---
layout: custom
title: Find Benefits
---

<div id="filters" class="filter-groups">
  <div class="search-group">
    <h4 class="filter-heading">Search Type</h4>
    <div id="searchDisplay">
      <label class="filter-card">
        <input type="checkbox" value="Eligibility Criteria" data-category="searchType" id="check4">
        <span>Eligibility Criteria</span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Benefit Categories" data-category="searchType" id="check5">
        <span>Benefit Categories</span>
      </label>
    </div>
  </div>
</div>

<div id="filters" class="filter-groups">

  <!-- Added categories for each criteria -->

  <!-- Income Category -->
  <div class="filter-group">
    <h4 class="filter-heading">Income</h4>
    <div class="filter-cards">
      <label class="filter-card">
        <input type="checkbox" value="Income below $40,000" data-category="income" id="check1">
          <span class="texthelp">
            Under $40,000
            <span class="help-icon">?</span>
            <span class="help-text">Income less than $40,000.</span>
        </span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Income below $20,000" data-category="income" id="check2">
          <span class="texthelp">
            Under $20,000
            <span class="help-icon">?</span>
            <span class="help-text">Income less than $20,000.</span>
          </span>
      </label>
    </div>
  </div>

  <!-- Age Category -->
  <div class="filter-group">
    <h4 class="filter-heading">Age</h4>
    <div class="filter-cards">
      <label class="filter-card">
        <input type="checkbox" value="Must be 18 years or older" data-category="age" id="check3">
        <span class="texthelp">
          Over 18
          <span class="help-icon">?</span>
          <span class="help-text">Older than 18 years of age.</span>
        </span>
      </label>
    </div>
  </div>

</div>


<!-- Instruction card -->
<div id="instruction-card" class="instruction-card">
  <h3>Getting Started</h3>
  <p>To find programs that may apply to you:</p>
  <ol>
    <li>Select one or more filters above.</li>
    <li>Matching benefits will appear here.</li>
  </ol>
</div>

<div id="results" class="results">
  <h2>Results</h2>
  <button>Export</button>
</div>

<ul id="item-list"></ul>

<style>
/* Displays additional info for each checkbox */
.label-with-help {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.help-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #0a66c2;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  cursor: pointer;
}
.help-text {
  display: none;
  position: absolute;
  top: 120%;
  left: 0;
  background: white;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 180px;
  font-size: 0.9rem;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  z-index: 10;
}
.texthelp:hover .help-text {
  display: block;
}

/* The results section that also holds the export button */
  .results {
    max-width: 700px;  
    margin: 0 auto;     
    display: flex;
    justify-content: space-between;
    align-items: center;    
  }
  .results h2{
    padding-left: 0.2rem;
    color: #0a66c2;
  }
  .results button{
    padding: 0.3rem 0.6rem;
    font-size: 1rem; 
    text-align: right;
    color: white;
    background-color: #0a66c2;
    border: 2px solid #0a66c2;
    border-radius: 10px;
    margin-top: 2em;
    transition: all 0.2s ease;
  }
.results button:hover { 
  color: #0a66c2;
  background: #f0f4f8; 
}


  #filters {
    margin-bottom: 1em;
  }
  #filters label {
    display: block;
    margin: 0.3em 0;
  }
  #item-list li {
    margin: 0.5em 0;
  }

  .filter-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  /* Each result card */
  .filter-card {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--card-bg, #f6f7f8);
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    user-select: none;
  }

  /* Hover  */
  .filter-card:hover {
    background: #f0f4f8;
    transform: translateY(-1px);
  }

  /* When checkbox is checked */
  .filter-card input[type="checkbox"]:checked + span {
    font-weight: 600;
    color: #0a66c2;
  }

  .filter-card input[type="checkbox"]:checked {
    accent-color: #0a66c2;
  }

  .filter-card input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    margin: 0;
  }

  /* Result list formatting */
  #item-list {
    list-style: none;
    padding: 0;
  }
  #item-list li {
    margin: 0.4em 0;
  }

  /* --- Benefit Result Cards --- */
#item-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.benefit-card {
  background: #f9f9fb;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
}

.benefit-card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.08);
}

.benefit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.benefit-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0a66c2;
  text-decoration: none;
}

.benefit-title:hover {
  text-decoration: underline;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
  transition: transform 0.2s ease;
}

.benefit-card.expanded .toggle-btn {
  transform: rotate(180deg);
}

.benefit-description {
  margin: 0.5rem 0 0.3rem;
  color: #444;
}

.benefit-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding-top: 0;
}

.benefit-card.expanded .benefit-details {
  max-height: 500px; /* Add more height if necessary here to contain all the criteria for cards */
  padding-top: 0.5rem;
}

.criteria-list {
  margin: 0.5rem 0 0 1.2rem;
  color: #333;
}

/* center the list */
#item-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 700px; /* width of results cards */
  margin: 0 auto;
}

/* ---- Instruction Card Styling ---- */
.instruction-card {
  background: #f9f9fb;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  max-width: 700px;
  margin: 1.5rem auto;
  color: #444;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  text-align: left;
}

.instruction-card h3 {
  margin-top: 0;
  color: #0a66c2;
}

/* --- Filter Groups & Headings --- */
.filter-groups {
  display: flex;
  flex-wrap: wrap; /* Wrap for mobile */
  gap: 1.5rem;
  justify-content: center;   
  margin-bottom: 2rem;
}

.filter-group {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  width: 320px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.filter-group:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.filter-heading {
  margin: 0 0 0.8rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a66c2;
  border-bottom: 2px solid #e2e6ea;
  padding-bottom: 0.4rem;
}

.filter-cards {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

#searchDisplay{
  display: flex;
  flex-direction row;
  gap:0.6em;
}

.search-group {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

</style>

<script>
  window.programs = [
    {% for article in site.articles %}
    {
      "title": {{ article.title | jsonify }},
      "url": {{ article.url | relative_url | jsonify }},
      "description": {{ article.description | jsonify }},
      "criteria": {{ article.criteria | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script> 



{% include scripts.html %}
<script src="/assets/js/checklist.js"></script>
