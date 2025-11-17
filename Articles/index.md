---
layout: custom
title: All Articles
---

<div class="articles-page">

  <h1>All Articles</h1>

  <div class="articles-grid">
    {% for article in site.articles %}
    <a class="article-card" href="{{ article.url | relative_url }}">
      <h3 class="article-title">{{ article.title }}</h3>
      {% if article.description %}
        <p class="article-description">{{ article.description }}</p>
      {% endif %}
    </a>
    {% endfor %}
  </div>

</div>

<style>

.articles-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}


.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}


.article-card {
  display: block;
  background: var(--mm-bg, #fafbfd);
  border: 1px solid var(--mm-border, #dcdcdc);
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  text-decoration: none !important;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: all 0.18s ease;
}

.article-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  border-color: var(--mm-accent, #2a7ae2);
}


.article-title {
  margin-top: 0;
  margin-bottom: 0.4rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--mm-accent, #2a7ae2);
}


.article-description {
  margin: 0;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.35;
}
</style>
