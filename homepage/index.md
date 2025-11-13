---
layout: splash
title: Benefit Finder
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.4"
  overlay_image: /assets/images/header-background.png
  #caption: "A tool to help you find all the benefits you deserve"
benefit-categories:
  - image_path: /assets/images/health_image.png
    alt: "Health Benefits"
    title: "Health & Wellness"
    excerpt: "There are a lot of programs that can help pay your medical bills. This includes things like reduced-cost or free insurance for you and your dependents."
  - image_path: /assets/images/food_image.png
    alt: "Food Benefits"
    title: "Addressing Hunger"
    excerpt: "These programs help keep you from going hungry. SNAP can help make ends meet along with more specific programs like WIC or emergency food assistance."
  - image_path: /assets/images/housing_image.png
    alt: "Housing Benefits"
    title: "Housing Support"
    excerpt: "Housing is hard to find and expensive right now. Fortunately there are options to get rental assistance or public housing. This can extend to emergency housing as well."
  - image_path: /assets/images/work_image.png
    alt: "Employment Benefits"
    title: "Help to stay on your feet."
    excerpt: "Sudden or prolonged unemployment can be devastating. Times like these are when you can collect unemployment benefits or look towards things like WorkSource to help you get back on your feed."
---


Welcome to **Benefit Finder**, a tool that helps you discover and apply for benefits that match your needs.

<form action="/search/" method="get" style="text-align:center; margin: 2rem 0;">
  <input type="text" name="q" placeholder="Search pages..." style="padding:10px; width:300px; border-radius:8px; border:1px solid #ccc;">
  <button type="submit" style="padding:10px 15px; border-radius:8px; background-color:#2a7ae2; color:white; border:none;">Search</button>
</form>

<div style="text-align:center; background-color:#f8f9fa; padding:2rem 1rem; border-radius:12px; margin: 3rem auto 2rem auto; max-width:900px;">
  <h2 style="font-size:2rem; margin-bottom:0.5rem; color:#222;">Do you know what you can get?</h2>
  <p style="max-width:650px; margin:0 auto; color:#555; font-size:1.1rem;">
    You pay taxes for these benefits so you deserve to collect them! Explore available programs that support your health, food security, housing, and more.
  </p>
</div>

{% include feature_row id="benefit-categories" type="left" %}


