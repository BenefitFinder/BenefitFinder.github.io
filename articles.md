---
layout: custom
title: All Articles
---

# All Articles

<ul>
{% for article in site.articles %}
  <li>
    <a href="{{ article.url | relative_url }}">{{ article.title }}</a><br>
    <small>{{ article.description }}</small>
  </li>
{% endfor %}
</ul>
