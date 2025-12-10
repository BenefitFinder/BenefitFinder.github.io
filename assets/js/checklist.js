document.addEventListener("DOMContentLoaded", () => {

  const filters = Array.from(document.querySelectorAll('.filters input[type="checkbox"]'));
  const itemList = document.getElementById("item-list");
  const instructionCard = document.getElementById("instruction-card");
  const results = document.getElementById("checklist-results");
  const programs = window.programs || [];

  const criteriaFilters = document.getElementById("CriteriaFilters");
  const categoryFilters = document.getElementById("CategoryFilters");
  const check4 = document.getElementById("check4"); // Eligibility Criteria
  const check5 = document.getElementById("check5"); // Benefit Categories

  //values for income dynamic updates based on household
  const householdSize = document.getElementById("householdSize");
  const incomeRanges = document.querySelectorAll(".income-range");
  const helpTexts = document.querySelectorAll(".help-text");

  // Show/hide panels
  function updateSearchVisibility() {
    if (criteriaFilters) criteriaFilters.style.display = check4.checked ? "block" : "none";
    if (categoryFilters) categoryFilters.style.display = check5.checked ? "block" : "none";
  }

  // Restore checkbox states from localStorage
  filters.forEach(cb => {
    const saved = localStorage.getItem(cb.id);
    cb.checked = (saved === "true");
  });

  // Ensure mutual exclusivity per category
  const categories = [...new Set(filters.map(f => f.dataset.category).filter(Boolean))];
  categories.forEach(category => {
    const checkedInCategory = filters.filter(f => f.dataset.category === category && f.checked);
    if (checkedInCategory.length > 1) {
      checkedInCategory.slice(0, -1).forEach(f => {
        f.checked = false;
        localStorage.setItem(f.id, false);
      });
    }
  });

  // Display results
  function renderItems(matches) {
    itemList.innerHTML = "";
    if (!matches || matches.length === 0) return;

    matches.forEach(program => {
      const li = document.createElement("li");

      li.innerHTML = `
        <div class="benefit-card">
          <div class="benefit-header">
            <a href="${program.url}" class="benefit-title">${program.title}</a>
            <button class="toggle-btn">&#9660;</button>
          </div>
          <p class="benefit-description">${program.description}</p>
          <div class="benefit-details">
            <ul class="criteria-list">
              ${(program.criteria || []).map(c => `<li>${c}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;

      const card = li.querySelector(".benefit-card");
      const toggle = li.querySelector(".toggle-btn");
      toggle.addEventListener("click", () => card.classList.toggle("expanded"));

      itemList.appendChild(li);
    });
  }


// Certain criteria imply truthiness for others. Example: 65+ includes 18+
const criteriaImplications = {
  "Age 65+": ["Age 18+"],
  "100% FPL" : ["100-150% FPL", "150-200% FPL", "200-250% FPL", "250-300% FPL", "over 300% FPL"],
  "100-150% FPL" : ["150-200% FPL", "200-250% FPL", "250-300% FPL", "over 300% FPL"],
  "150-200% FPL" : ["200-250% FPL", "250-300% FPL", "over 300% FPL"],
  "200-250% FPL" : ["250-300% FPL", "over 300% FPL"],
  "250-300% FPL" : ["over 300% FPL"],
  "Age 65+" : ["Age 16+", "Age 18+"],
  "Age 18+" : ["Age 16+"]
};

// Apply filters
function applyFilters() {
  updateSearchVisibility();

  // Collect selected criteria
  let activeCriteria = filters
    .filter(f => f.checked && ["income", "age", "disability", "citizenship"].includes(f.dataset.category))
    .map(f => f.value);

  // Expand activeCriteria using criteriaImplications to catch all cases
  function expandCriteria(selected) {
    const expanded = new Set(selected);

    // Recursively add implied criteria
    function addImplied(value) {
      const implied = criteriaImplications[value];
      if (implied) {
        implied.forEach(v => {
          if (!expanded.has(v)) {
            expanded.add(v);
            addImplied(v);
          }
        });
      }
    }

    selected.forEach(addImplied);
    return Array.from(expanded);
  }

  activeCriteria = expandCriteria(activeCriteria);

  // Collect all selected category tags
  const activeTags = filters
    .filter(f => f.checked && f.dataset.category === "tags")
    .map(f => f.value);

  //if no filters selected then show instructions
  if (activeCriteria.length === 0 && activeTags.length === 0) {
    instructionCard.style.display = "block";
    results.style.setProperty("display", "none", "important");
    itemList.innerHTML = "";
    return;
  }

  instructionCard.style.display = "none";
  results.style.setProperty("display", "flex", "important");

  const matches = programs.filter(program => {
    const programCriteria = program.criteria || [];
    const programTags = program.tags || [];

    // Must match ANY criteria
    const criteriaOK =
      activeCriteria.length === 0 ||
      activeCriteria.some(c => programCriteria.includes(c));

    // Must match AT LEAST ONE tag if any tags are selected
    const tagsOK =
      activeTags.length === 0 ||
      activeTags.some(t => programTags.includes(t));

    return criteriaOK && tagsOK;
  });

  renderItems(matches);
}



  // Checkbox change listener
filters.forEach(f => {
  f.addEventListener("change", () => {
    localStorage.setItem(f.id, f.checked);

    //categories that should be mutually exclusive UPDATE ME WITH NEW CATEGORIES OR FIX THIS
    const exclusiveCategories = ["income", "age", "citizenship","searchType"]; 
    const category = f.dataset.category;

    if (f.checked && exclusiveCategories.includes(category)) {
      filters
        .filter(other => other !== f && other.dataset.category === category)
        .forEach(other => {
          other.checked = false;
          localStorage.setItem(other.id, false);
        });
    }

    applyFilters();
  });
});

// Reset filters and remove local storage
const resetBtn = document.getElementById("resetFiltersBtn");
if (!resetBtn) return;

resetBtn.addEventListener("click", () => {
  // Clear all checkbox entries from localStorage
  const filters = Array.from(document.querySelectorAll('.filters input[type="checkbox"]'));
  filters.forEach(cb => {
    localStorage.removeItem(cb.id);
    cb.checked = cb.defaultChecked; //restore checkboxes to default
  });

  // reapply default filters
  if (typeof applyFilters === "function") applyFilters();
  if (typeof updateSearchVisibility === "function") updateSearchVisibility();
});



  // Initial state
  applyFilters();

  // Export Button
  const exportBtn = document.getElementById("export");

  exportBtn.addEventListener("click", () => {
    const cards = Array.from(itemList.querySelectorAll(".benefit-card"));

    let textOutput = "";

    cards.forEach(card => {
      const title = card.querySelector(".benefit-title")?.textContent.trim() || "";
      const articleUrl = card.querySelector(".benefit-title")?.href || "";

      const criteria = Array.from(card.querySelectorAll(".criteria-list li"))
        .map(li => li.textContent.trim());

      const program = programs.find(p => p.title === title);

      const tags = program?.tags?.join(", ") || "None";
      const govUrl = program?.homepage_link || "No government link available";

      textOutput += 
`---------------------------
Title: ${title}

Criteria:
${criteria.length ? criteria.map(c => "- " + c).join("\n") : "None"}

Tags: ${tags}

Our Article: ${articleUrl}
Gov Homepage: ${govUrl}

`;
    });

    // Create a downloadable file
    const blob = new Blob([textOutput], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "BF_ResultSummary.txt";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  updateSearchVisibility();

  function updateIncomeRanges() {
    const size = parseInt(householdSize.value, 10) || 1;
  
    // 2025 Federal Poverty Level
    const baseFPL = 15060;
    const addPerPerson = 5380;
  
    // Calculate 100% FPL for selected household size
    const fpl100 = baseFPL + (size - 1) * addPerPerson;
  
    // Bracket multipliers
    const brackets = [
      { min: 0.0, max: 1.0 },   // 100% or less
      { min: 1.0, max: 1.5 },   // 100–150%
      { min: 1.5, max: 2.0 },   // 150–200%
      { min: 2.0, max: 2.5 },   // 200–250%
      { min: 2.5, max: 3.0 },   // 250–300%
      { min: 3.0, max: 999999 } // >300%
    ];
  
    incomeRanges.forEach((el, index) => {
      const b = brackets[index];
      const scaledMin = Math.round(fpl100 * b.min);
      const scaledMax = Math.round(fpl100 * b.max);
  
      // Update visible text
      if (b.max > 900000) {
        el.textContent = `Over $${scaledMin.toLocaleString()}`;
      } else if (scaledMin === 0) {
        el.textContent = `$${scaledMax.toLocaleString()} or less`;
      } else {
        el.textContent = `$${scaledMin.toLocaleString()} – $${scaledMax.toLocaleString()}`;
      }
  
      // Update tooltip
      const help = helpTexts[index];
      if (help) {
        if (b.max > 900000) {
          help.textContent = `Household income over $${scaledMin.toLocaleString()}.`;
        } else if (scaledMin === 0) {
          help.textContent = `Household income less than or equal to $${scaledMax.toLocaleString()}.`;
        } else {
          help.textContent = `Household income between $${scaledMin.toLocaleString()} and $${scaledMax.toLocaleString()}.`;
        }
      }
    });
  }
  

  // Run on load and whenever the dropdown changes
  updateIncomeRanges();
  householdSize.addEventListener("change", updateIncomeRanges);

  const container = document.querySelector('.filter-masonry');
  if (!container) return;

  // breakpoints -> how many columns to display
  const breakpoints = [
    { minWidth: 1400, cols: 3 },
    { minWidth: 1000, cols: 3 },
    { minWidth: 700,  cols: 2 },
    { minWidth: 0,    cols: 1 }
  ];

  function getColumnCount() {
    const w = container.clientWidth;
    for (let i = 0; i < breakpoints.length; i++) {
      if (w >= breakpoints[i].minWidth) return breakpoints[i].cols;
    }
    return 2;
  }

  function debounce(fn, wait = 120) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  function measureHeight(el) {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    const marginBottom = parseFloat(style.marginBottom || 0);
    const marginTop = parseFloat(style.marginTop || 0);
    return rect.height + marginTop + marginBottom;
  }

  // Main layout function
  function layoutMasonry() {
    // Grab items
    const items = Array.from(container.querySelectorAll('.filter-block'));

    // If no items or only one return
    if (items.length <= 1) {
      return;
    }

    // Determine number of columns
    const columnCount = Math.max(1, Math.floor(getColumnCount()));

    // Create empty columns
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
      const col = document.createElement('div');
      col.className = 'masonry-col';
      columns.push(col);
    }

    // temporarily remove children
    items.forEach(it => it.remove());

    // put each element into the currently shortest column
    const colHeights = Array(columnCount).fill(0);

    // measure each item
    items.forEach(item => {
      item.style.width = ''; // reset any inline width
      item.style.boxSizing = 'border-box';

      // temporarily append to offscreen container 
      const measurer = document.createElement('div');
      measurer.style.position = 'absolute';
      measurer.style.visibility = 'hidden';
      measurer.style.pointerEvents = 'none';
      measurer.style.left = '-99999px';
      measurer.appendChild(item);
      document.body.appendChild(measurer);

      const h = measureHeight(item);

      document.body.removeChild(measurer);

      // find shortest column index
      let shortestIndex = 0;
      let shortestHeight = colHeights[0];
      for (let c = 1; c < colHeights.length; c++) {
        if (colHeights[c] < shortestHeight) {
          shortestIndex = c;
          shortestHeight = colHeights[c];
        }
      }

      // append item to shortest column and update height
      columns[shortestIndex].appendChild(item);
      colHeights[shortestIndex] += h;
    });

    // Clear container then append columns (left-to-right)
    container.innerHTML = '';
    columns.forEach(col => container.appendChild(col));
  }

  // Run layout after fonts/images settle;
  function runLayoutWhenReady() {
    layoutMasonry();
    // run after window load (images/fonts)
    window.addEventListener('load', () => {
      // small delay to allow layout stabilization
      setTimeout(layoutMasonry, 60);
    }, { once: true });
  }

  const onResize = debounce(() => {
    layoutMasonry();
  }, 150);

  // Run initially
  runLayoutWhenReady();

  // Re-run on resize
  window.addEventListener('resize', onResize);

});
