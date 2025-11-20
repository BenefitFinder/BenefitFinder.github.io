document.addEventListener("DOMContentLoaded", () => {

  const filters = Array.from(document.querySelectorAll('.filters input[type="checkbox"]'));
  const itemList = document.getElementById("item-list");
  const instructionCard = document.getElementById("instruction-card");
  const results = document.getElementById("results");
  const programs = window.programs || [];

  const criteriaFilters = document.getElementById("CriteriaFilters");
  const categoryFilters = document.getElementById("CategoryFilters");
  const check4 = document.getElementById("check4"); // Eligibility Criteria
  const check5 = document.getElementById("check5"); // Benefit Categories

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

  // Apply filters
function applyFilters() {
  updateSearchVisibility();

  const activeCriteria = filters
    .filter(f => f.checked && ["income","age"].includes(f.dataset.category))
    .map(f => f.value);

  const activeTags = filters
    .filter(f => f.checked && f.dataset.category === "tags")
    .map(f => f.value);

  if (activeCriteria.length === 0 && activeTags.length === 0) { 
    instructionCard.style.display = "block";
    results.style.setProperty("display", "none", "important");
    itemList.innerHTML = "";
    return;
  }

  instructionCard.style.display = "none";
  results.style.setProperty("display", "flex", "important");

  const matches = programs.filter(program => {
    const criteriaOK = program.criteria && program.criteria.some(c => activeCriteria.includes(c));
    const tagsOK = program.tags && program.tags.some(t => activeTags.includes(t));

    // logic criteria and tags
    return (activeCriteria.length && criteriaOK) || (activeTags.length && tagsOK);
  });

  renderItems(matches);
}

  // Checkbox change listener (mutual exclusivity)
filters.forEach(f => {
  f.addEventListener("change", () => {
    localStorage.setItem(f.id, f.checked);

    // mutually exclusive
    const exclusiveCategories = ["income", "age", "searchType"]; 
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

  // Initial state
  applyFilters();
  updateSearchVisibility();

});
