---
layout: custom
title: Search
---

<div id="filters">
  <label><input type="checkbox" value="Income below $40,000"> Under $40,000</label>
  <label><input type="checkbox" value="Income below $20,000"> Under $20,000</label>
  <label><input type="checkbox" value="Must be 18 years or older"> Over 18</label>
</div>

<ul id="item-list"></ul>

<script>
  window.programs = [
    {% for article in site.articles %}
    {
      "title": {{ article.title | jsonify }},
      "url": {{ article.url | relative_url | jsonify }},
      "criteria": {{ article.criteria | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>
