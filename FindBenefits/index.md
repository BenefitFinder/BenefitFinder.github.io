---
layout: custom
title: Find Benefits
---

<div id="filters" class="filter-cards">
  <label class="filter-card">
    <input type="checkbox" value="Income below $40,000">
    <span>Under $40,000</span>
  </label>
  <label class="filter-card">
    <input type="checkbox" value="Income below $20,000">
    <span>Under $20,000</span>
  </label>
  <label class="filter-card">
    <input type="checkbox" value="Must be 18 years or older">
    <span>Over 18</span>
  </label>
</div>

<ul id="item-list"></ul>

<style>
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
  /* Container spacing */
  .filter-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  /* Each card */
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

  /* Hover & active states */
  .filter-card:hover {
    background: #f0f4f8;
    transform: translateY(-1px);
  }

  /* When the checkbox inside is checked */
  .filter-card input[type="checkbox"]:checked + span {
    font-weight: 600;
    color: #0a66c2; /* accent color (blue-ish) */
  }

  .filter-card input[type="checkbox"]:checked {
    accent-color: #0a66c2; /* modern browsers */
  }

  /* Hide the raw checkbox but keep it clickable */
  .filter-card input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    margin: 0;
  }

  /* Result list */
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
  max-height: 500px; /* enough for all criteria */
  padding-top: 0.5rem;
}

.criteria-list {
  margin: 0.5rem 0 0 1.2rem;
  color: #333;
}

/* Center and constrain the results list */
#item-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 700px; /* width of results cards */
  margin: 0 auto;
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
