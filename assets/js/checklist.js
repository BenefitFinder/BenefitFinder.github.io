document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("item-list");
  const filters = document.querySelectorAll("#filters input[type=checkbox]");

  // Uses the data from search.md
  const programs = window.programs || [];

  function updateList() {
    const activeFilters = Array.from(filters)
      .filter(f => f.checked)
      .map(f => f.value);

    // Show items that match checked criterion
    const visiblePrograms = programs.filter(program =>
      program.criteria.some(c => activeFilters.includes(c))
    );

    // Render the visible programs
      list.innerHTML = visiblePrograms
        .map(
          p => `
          <li>
            <strong><a href="${p.url}">${p.title}</a></strong>
            <ul>${p.criteria.map(c => `<li>${c}</li>`).join("")}</ul>
          </li>`
        )
        .join("");
    
  }

  filters.forEach(f => f.addEventListener("change", updateList));
  updateList();
});
