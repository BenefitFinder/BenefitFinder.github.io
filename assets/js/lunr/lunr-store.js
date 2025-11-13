---
layout: null
---
//This works for some reason
var store = [
  {% assign docs = site.pages | concat: site.posts | concat: site.articles %}
  {% for page in docs %}
    {
      "title": {{ page.title | jsonify }},
      "excerpt": {{ page.description | default: page.excerpt | strip_html | jsonify }},
      "categories": {{ page.categories | jsonify }},
      "tags": {{ page.tags | jsonify }},
      "url": {{ page.url | relative_url | jsonify }},
      "teaser": {{ page.teaser | relative_url | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];
