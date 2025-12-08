---
layout: custom
title: Find Benefits
---
<div class="filters filter-groups">
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
  <div class="filter-group" style="text-align: center;">
    <h4 class="filter-heading">Household Size</h4>
    <select id="householdSize" class="household-dropdown">
      <option value="1">1 person</option>
      <option value="2">2 people</option>
      <option value="3">3 people</option>
      <option value="4">4 people</option>
      <option value="5">5 people</option>
      <option value="6">6 people</option>
      <option value="7">7 people</option>
      <option value="8">8 people</option>
    </select>
  </div>
</div>

<div id="CriteriaFilters">
<div class="filters filter-masonry">

  <div class="filter-block">
  <div class="filter-group">
  <h4 class="filter-heading">Income</h4>
  <div class="filter-cards">
    <!-- 100% FPL -->
    <label class="filter-card">
      <input type="checkbox" value="100% FPL" data-category="income" id="inccheck1">
      <span class="income-range" data-min="18000" data-max="18000">$18,000 or less</span>
      <span class="texthelp">
        <span class="help-icon">?</span>
        <span class="help-text">Income less than or equal to $18,000 annually for an individual.</span>
      </span>
    </label>
    <!-- 100–150% FPL -->
    <label class="filter-card">
      <input type="checkbox" value="100-150% FPL" data-category="income" id="inccheck2">
      <span class="income-range" data-min="18001" data-max="27000">$18,001 – $27,000</span>
      <span class="texthelp">
        <span class="help-icon">?</span>
        <span class="help-text">Individual income between $18,001 and $27,000.</span>
      </span>
    </label>
    <!-- 150–200% FPL -->
    <label class="filter-card">
      <input type="checkbox" value="150-200% FPL" data-category="income" id="inccheck3">
      <span class="income-range" data-min="27001" data-max="36000">$27,001 – $36,000</span>
      <span class="texthelp">
        <span class="help-icon">?</span>
        <span class="help-text">Individual income between $27,001 and $36,000.</span>
      </span>
    </label>
    <!-- 200–250% FPL -->
    <label class="filter-card">
      <input type="checkbox" value="200-250% FPL" data-category="income" id="inccheck4">
      <span class="income-range" data-min="36001" data-max="45000">$36,001 – $45,000</span>
      <span class="texthelp">
        <span class="help-icon">?</span>
        <span class="help-text">Individual income between $36,001 and $45,000.</span>
      </span>
    </label>
    <!-- 250–300% FPL -->
    <label class="filter-card">
      <input type="checkbox" value="250-300% FPL" data-category="income" id="inccheck5">
      <span class="income-range" data-min="45001" data-max="60000">$45,001 – $60,000</span>
      <span class="texthelp">
        <span class="help-icon">?</span>
        <span class="help-text">Individual income between $45,001 and $60,000.</span>
      </span>
    </label>
    <!-- Over 300% FPL -->
    <label class="filter-card">
      <input type="checkbox" value="over 300% FPL" data-category="income" id="inccheck6">
      <span class="income-range" data-min="60001" data-max="9999999">Over $60,000</span>
      <span class="texthelp">
        <span class="help-icon">?</span>
        <span class="help-text">Individual income over $60,000.</span>
      </span>
    </label>
  </div>
  </div>
</div>



  <!-- Age Category -->
  <div class="filter-block">
  <div class="filter-group">
    <h4 class="filter-heading">Age</h4>
    <div class="filter-cards">
      <label class="filter-card">
        <input type="checkbox" value="Age 18+" data-category="age" id="check3">
        <span class="texthelp">
          Over 18
          <span class="help-icon">?</span>
          <span class="help-text">18 years of age or older.</span>
        </span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Age 65+" data-category="age" id="check4">
        <span class="texthelp">
          Over 65
          <span class="help-icon">?</span>
          <span class="help-text">65 years of age or older.</span>
        </span>
      </label>
    </div>
  </div>
  </div>

  <!-- Disability Category -->
  <div class = "filter-block">
  <div class="filter-group">
    <h4 class="filter-heading">Disabilities</h4>
    <div class="filter-cards">
      <label class="filter-card">
        <input type="checkbox" value="Blind" data-category="disability" id="check5">
        <span class="texthelp">
          Blind
          <span class="help-icon">?</span>
          <span class="help-text">Legally blind. Some programs may have more strict requirements on visual acuity.</span>
        </span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Disabled" data-category="disability" id="check6">
        <span class="texthelp">
          Disability lasting >3 months
          <span class="help-icon">?</span>
          <span class="help-text">Disability that prevents or inhibits work for 3 months or more.</span>
        </span>
      </label>
    </div>
  </div>
  </div>


  <div class = "filter-block">
  <div class="filter-group">
    <h4 class="filter-heading">Citizenship Status</h4>
    <div class="filter-cards">
      <label class="filter-card">
        <input type="checkbox" value="Citizen" data-category="citizenship" id="citcheck1">
        <span class="texthelp">
          U.S. Citizen
          <span class="help-icon">?</span>
          <span class="help-text">You are a legal U.S. Citizen.</span>
        </span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Legal Immigrant" data-category="citizenship" id="citcheck2">
        <span class="texthelp">
          Legal Immigrant
          <span class="help-icon">?</span>
          <span class="help-text">You are not a citizen but are a documented legal immigrant.</span>
        </span>
      </label>
    </div>
  </div>
  </div>

</div>
</div>

<div id="CategoryFilters">
<div class="filters filter-groups">

  <!-- Added categories for each criteria -->

  <!-- Category Selection -->
  <div class="filter-group">
    <h4 class="filter-heading">Categories</h4>
    <div class="filter-cards">
      <label class="filter-card">
        <input type="checkbox" value="Health" id="category1" data-category="tags">
          <span class="texthelp">
            Health
            <span class="help-icon">?</span>
            <span class="help-text">Benefits that are related to personal health.</span>
        </span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Financial Aid" id="category2" data-category="tags">
          <span class="texthelp">
            Financial Aid
            <span class="help-icon">?</span>
            <span class="help-text">Benefits that are related to financial aid.</span>
          </span>
      </label>
      <label class="filter-card">
        <input type="checkbox" value="Food Assistance" id="category3" data-category="tags">
          <span class="texthelp">
            Food
            <span class="help-icon">?</span>
            <span class="help-text">Benefits that are related to food.</span>
          </span>
      </label>
    </div>
  </div>

</div>
</div>

<!-- Instruction card -->
<div id="instruction-card" class="instruction-card">
  <h3>Getting Started</h3>
  <p>To find programs that may apply to you:</p>
  <ul>
    <li>Select one or more filters above.</li>
    <li>You can use a combination of Criteria and Categories to tailor your search</li>
    <li>Some criteria are mutually exclusive, such as age.</li>
    <li>Benefits matching <b>at least one</b> of your selected criteria will appear. This search should give you a rough idea of eligibility, so please check each article page for more detailed requirements.</li>
  </ul>
</div>

<div id="results" class="results">
  <h2>Results</h2>
  <button id="export" type="button">Export</button>
</div>

<ul id="item-list"></ul>

<div class="floating-reset-wrapper">
  <div class="texthelp reset-tooltip-wrapper">
    <span class="help-icon">?</span>
    <span class="help-text reset-tooltip">
      We don’t ever store your data on our end, but your selections do live in your browser.
      Click this button to clear your selections from your browser history for privacy.
    </span>
    <button id="resetFiltersBtn" class="reset-btn">
      Reset All Filters
    </button>
  </div>
</div>

<style>
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
.texthelp:hover .help-text:not(.reset-tooltip) {
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


  .filters {
    margin-bottom: 1em;
  }
  .filters label {
    display: block;
    margin: 0.3em 0;
  }
  #item-list li {
    margin: 0.5em 0;
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
#CriteriaFilters {
  padding: 0 1.5rem; /* brings content in from screen edge */
}

.filter-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center; /* centers rows nicely */
  margin-bottom: 2rem;
  align-items: flex-start;
}

/* Each group becomes a responsive card that can stack */
.filter-group {
  flex: 1 1 auto;  
  max-width: 450px; /* prevents overly wide cards on big screens */
  min-width: 150px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem 1.2rem;
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
  gap: 0.6em;
}

.search-group {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem 1.2rem;
 /* width: 400px;*/
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.reset-tooltip-wrapper .help-icon {
  font-size: 1.1rem;   
  width: 26px;         /* hitbox size */
  height: 26px;
  line-height: 24px;   /*center the icon */
}

/* Floating reset button that stays above footer */
.floating-reset-wrapper {
  position: sticky;
  bottom: 2rem;       
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  padding-right: 1.5rem;
  margin-top: 2rem;    
}

.reset-tooltip-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

/* Reset button */
.reset-btn {
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #2a7ae2;
  color: white;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  white-space: nowrap;
}
.reset-btn:hover {
  background-color: #1f65c7;
}

/* Tooltip next to reset button */
.reset-tooltip {
  display: none;
  position: absolute;

  /* anchor to the left of the question mark */
  right: calc(100% + 10px);

  /* vertically align with top of button */
  top: 50%;
  transform: translateY(-120%);

  background: #333;
  color: white;
  padding: 12px;
  border-radius: 8px;
  width: 240px;
  max-width: 80vw;
  font-size: 0.85rem;
  line-height: 1.3;
  white-space: normal;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  z-index: 9999;
}

/* Hover for desktop */
.reset-tooltip-wrapper .help-icon:hover + .reset-tooltip {
  display: block;
}

.filter-masonry {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: flex-start;
}

/* Column wrapper inserted by script */
.masonry-col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1 1 0;
  min-width: 0;      /* avoid overflow */
  max-width: 450px;  /* match filter-group max width */
}

/* ensure each block keeps its internal padding and full width inside the column */
.filter-block {
  width: 100%;
  box-sizing: border-box;
}
/* Prevent splitting blocks and keep consistent spacing */
.filter-masonry .filter-block {
  display: block; /* ensure each filter block stays intact */
}

.masonry-stack {
  column-count: 2;
  column-gap: 1.5rem;
}

.masonry-stack .filter-group {
  break-inside: avoid;     
  margin-bottom: 1.5rem;
}

/* Dynamically change number of columns by screen width */
@media (min-width: 1000px) {
  .filter-masonry {
    column-count: 2;  /* Desktop: 2 columns UPDATE THESE AS NEEDED*/
  }
}

@media (min-width: 1400px) {
  .filter-masonry {
    column-count: 2;  /* Larger screens: 2 columns */
  }
}

@media (min-width: 1800px) {
  .filter-masonry {
    column-count: 2;  /* Ultra-wide screens: 2 columns */
  }
}

@media (max-width: 600px) {
  .reset-tooltip-wrapper:hover .reset-tooltip {
    display: none;
  }

  .help-icon:active + .reset-tooltip,
  .help-icon:focus + .reset-tooltip {
    display: block;
  }

  .reset-tooltip {
    right: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    bottom: auto;
    top: -10px; 
    max-width: 90vw;
  }
  .filter-groups {
    flex-direction: column;
    align-items: stretch; 
  }
}

</style>

<script>
  window.programs = [
    {% for article in site.articles %}
    {
      "title": {{ article.title | jsonify }},
      "url": {{ article.url | relative_url | jsonify }},
      "description": {{ article.description | jsonify }},
      "criteria": {{ article.criteria | jsonify }},
      "tags": {{ article.tags | jsonify }},
      "homepage_link": {{ article.homepage_link | jsonify }} 
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

</script>

<script src="/assets/js/checklist.js"></script>


{% include scripts.html %}

