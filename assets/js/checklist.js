document.addEventListener("DOMContentLoaded", () => {
    const items = [
      { name: "Apple", type: "fruit" },
      { name: "Carrot", type: "vegetable" },
      { name: "Milk", type: "dairy" }
    ];
  
    const list = document.getElementById("item-list");
    const filters = document.querySelectorAll("#filters input[type=checkbox]");
  
    function updateList() {
      const activeFilters = Array.from(filters)
        .filter(f => f.checked)
        .map(f => f.value);
  
      const visibleItems = items.filter(item => activeFilters.includes(item.type));
      list.innerHTML = visibleItems.map(item => `<li>${item.name}</li>`).join("");
    }
  
    filters.forEach(f => f.addEventListener("change", updateList));
    updateList();
  });
  