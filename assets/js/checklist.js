document.addEventListener("DOMContentLoaded", () => {

  //make sure programs is valid
  const filters = Array.from(document.querySelectorAll('#filters input[type="checkbox"]'));
  const itemList = document.getElementById("item-list");
  const instructionCard = document.getElementById("instruction-card");
  const programs = window.programs || [];


  // restore checkbox states from localStorage
  filters.forEach(cb => {
    const saved = localStorage.getItem(cb.id);
    cb.checked = (saved === "true");
  });

  // ensure the mutual exclusivity remains
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


  //display the benefit cards
  function renderItems(matches) {
    itemList.innerHTML = "";

    if (!matches || matches.length === 0) {
      return;
    }

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

      // Expand/collapse functionality
      const card = li.querySelector(".benefit-card");
      const toggle = li.querySelector(".toggle-btn");
      toggle.addEventListener("click", () => {
        card.classList.toggle("expanded");
      });

      itemList.appendChild(li);
    });
  }


  //apply filters
  function applyFilters() {
    const activeFilters = filters.filter(f => f.checked).map(f => f.value);

    if (activeFilters.length === 0) {
      // No filters → show instruction card, clear results
      instructionCard.style.display = "block";
      itemList.innerHTML = "";
      return;
    }

    instructionCard.style.display = "none";

    // Find programs where any criteria matches a selected filter
    const matches = programs.filter(program =>
      program.criteria.some(c => activeFilters.includes(c))
    );

    renderItems(matches);
  }


  //make checkboxes in teh same category mutually exclusive
  filters.forEach(f => {
    f.addEventListener("change", () => {

      // Save new state
      localStorage.setItem(f.id, f.checked);

      // If this box was unchecked
      if (!f.checked) {
        applyFilters();
        return;
      }

      const category = f.dataset.category;
      if (!category) {
        applyFilters();
        return;
      }

      // Uncheck others in the same category
      filters
        .filter(other => other !== f && other.dataset.category === category)
        .forEach(other => {
          other.checked = false;
          localStorage.setItem(other.id, false);
        });

      applyFilters();
    });
  });


  // initial page state
  applyFilters();
});
