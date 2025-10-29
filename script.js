const items = [
  { name: "Apple", type: "fruit" },
  { name: "Banana", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Broccoli", type: "vegetable" },
  { name: "Milk", type: "dairy" },
  { name: "Cheese", type: "dairy" }
];

const list = document.getElementById("item-list");
const filters = document.querySelectorAll("#filters input[type=checkbox]");

function updateList() {
  // Get which categories are checked
  const activeFilters = Array.from(filters)
    .filter(f => f.checked)
    .map(f => f.value);

  // Filter items
  const visibleItems = items.filter(item => activeFilters.includes(item.type));

  // Render
  list.innerHTML = visibleItems
    .map(item => `<li>${item.name}</li>`)
    .join("");
}

// Listen for changes
filters.forEach(f => f.addEventListener("change", updateList));

// Initial render
updateList();
