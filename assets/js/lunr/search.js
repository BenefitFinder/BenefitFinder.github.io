/*
 This might be a little buggy, it's modified from the lunr search example
*/

(function() {
    function getQueryVariable(variable) {
      const query = window.location.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === variable) return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  
    const searchTerm = getQueryVariable('q');
    const searchInput = document.querySelector('#search');
    const resultsContainer = document.querySelector('#search-results');
  
    if (searchInput) searchInput.value = searchTerm || '';
  
    if (searchTerm) {
      performSearch(searchTerm);
    }
  
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        performSearch(query);
      });
    }
  
    function performSearch(query) {
      if (!window.store) {
        console.warn("Lunr store not found!");
        return;
      }
  
      // Build the index
      const idx = lunr(function() {
        this.ref('url');
        this.field('title');
        this.field('excerpt');
        this.field('tags');
        this.field('categories');
  
        window.store.forEach(function(doc) {
          this.add(doc);
        }, this);
      });
  
      // Perform the search
      const results = idx.search(query + '*'); // wildcard for partial matches
      console.log("🔎 Lunr search results:", results);
      displayResults(results);
    }
  
    function displayResults(results) {
        if (!resultsContainer) return;
      
        if (!Array.isArray(results) || results.length === 0) {
          resultsContainer.innerHTML = '<p>No results found.</p>';
          return;
        }
      
        const items = results.map(result => {
          // Look up the actual item in the store
          const item = window.store.find(p => {
            if (!p || !p.url) return false;
            // Match either exact URL or if ref ends with it
            return (
              p.url === result.ref ||
              result.ref === ('/' + p.url) ||
              result.ref.endsWith(p.url) ||
              p.url.endsWith(result.ref)
            );
          });
      
          if (!item) {
            console.warn('⚠️ No match found for ref:', result.ref);
            return `<article><p>⚠️ Missing data for ${result.ref}</p></article>`;
          }
      
          // Render found item safely
          return `
            <article class="search-result">
              <h3><a href="${item.url}">${item.title || '(untitled)'}</a></h3>
              <p>${item.excerpt || ''}</p>
            </article>
          `;
        });
      
        resultsContainer.innerHTML = items.join('');
      }
  })();