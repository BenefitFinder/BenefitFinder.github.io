
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("item-list");
  const filters = document.querySelectorAll("#filters input[type=checkbox]");
  const programs = window.programs || [];

  function renderResults(visiblePrograms) {
    if (!list) return;
    list.innerHTML = "";

    if (visiblePrograms.length === 0) {
      list.innerHTML = `<li>No matching programs found.</li>`;
      return;
    }

    visiblePrograms.forEach(p => {
      const card = document.createElement("li");
      card.classList.add("benefit-card");
      card.innerHTML = `
        <div class="benefit-header">
          <a href="${p.url}" class="benefit-title">${p.title}</a>
          <button class="toggle-btn" aria-label="Show details">▼</button>
        </div>
        <p class="benefit-description">${p.description || ""}</p>
        <div class="benefit-details">
          <h4>Eligibility Criteria</h4>
          <ul class="criteria-list">
            ${(p.criteria || []).map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>
      `;
      list.appendChild(card);
    });

    // add expand/collapse behavior
    list.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const card = e.target.closest(".benefit-card");
        card.classList.toggle("expanded");
      });
    });
  }

  function updateList() {
    const activeFilters = Array.from(filters)
      .filter(f => f.checked)
      .map(f => f.value);

    const visiblePrograms = activeFilters.length
      ? programs.filter(p =>
          (p.criteria || []).some(c => activeFilters.includes(c))
        )
      : programs;

    renderResults(visiblePrograms);
  }

  filters.forEach(f => f.addEventListener("change", updateList));
  updateList();
});
