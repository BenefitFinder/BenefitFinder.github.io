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
<!-- top portion container -->
<div style="
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:2rem;
  padding:1.5rem 0;
  max-width:1000px;
  margin:auto;
">

  <!-- left column -->
  <div style="flex:1 1 420px; min-width:300px;">
    <img src="/assets/images/benefits_intro.png"
         alt="Benefit Finder Overview"
         style="width:100%; max-width:380px; border-radius:12px; margin-bottom:1rem;">

    <p style="font-size:1.15rem; color:#444; margin:0;">
      We're here to help you find all the benefits you deserve. Using this tool you can
      learn about a variety of programs, check eligibility, and understand what they can do for you.
      We never store your personal data. Anything you enter is gone as soon as you leave the page.
    </p>
  </div>

<!-- right column -->
<div style="
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
">

  <!-- Tour Button -->
  <button id="take-tour-btn"
    style="
      padding:12px 20px;
      border-radius:8px;
      background-color:#2a7ae2;
      color:white;
      border:none;
      font-size:1.1rem;
      cursor:pointer;
      white-space:nowrap;
      margin-bottom:0.75rem;
    ">
    New here? Take a tour!
  </button>

  <p style="
    font-size:0.95rem;
    line-height:1.35;
    color:#444;
    max-width:280px;
    margin:0 0 1.5rem 0;
  ">
    First time visiting the page? Take a quick walkthrough and see what to expect.
  </p>

  <a href="/FindBenefits/" style="text-decoration:none; width:100%;">
    <button
      style="
      padding:12px 20px;
      border-radius:8px;
      background-color:#2a7ae2;
      color:white;
      border:none;
      font-size:1.1rem;
      cursor:pointer;
      white-space:nowrap;
      margin-bottom:0.75rem;
      ">
      Jump to Benefit Finder
    </button>
  </a>
   <p style="
    font-size:0.95rem;
    line-height:1.35;
    color:#444;
    max-width:280px;
    margin:0 0 1.5rem 0;
  ">
    Know your way around already? Jump straight to the Benefit Finder tool!
  </p>

</div>


</div>


<div id="learn-more"
  style="
    text-align:center;
    background-color:#f8f9fa;
    padding:0.5rem 1rem 2rem 1rem;
    border-radius:12px;
    margin:3rem auto 2rem auto;
    max-width:900px;
    margin-bottom:3cm;
  "
  class="fade-in"
>
  <h2 style="font-size:2rem; margin:0 0 0.5rem 0; color:#222; padding-top:0.25rem;">
    Do you know what you can get?
  </h2>

  <hr style="border:0; border-top:2px solid #ddd; width:80%; margin:1rem auto;">

  <p style="max-width:650px; margin:0 auto; color:#555; font-size:1.1rem;">
    There might be far more coverage than you would expect! <br>
    Here are some examples of what benefits can offer you.
  </p>
</div>


<div class="fade-in">
  {% include feature_row id="benefit-categories" type="left" %}
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Unobserve so it doesn't trigger every scroll
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
});
</script>
