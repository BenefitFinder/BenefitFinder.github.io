<div class="feedback-container">
  <h2>Help us improve Benefit Finder</h2>
  <p>Your feedback helps us improve this resource. You don’t need an account, just send your message below.</p>

  <form action="https://formspree.io/f/xwpayzrq" method="POST" class="feedback-form">
    
    <!-- Message -->
    <label for="feedback-message">Your Feedback</label>
    <textarea id="feedback-message" name="message" required></textarea>

    <!-- Optional Email -->
    <label for="feedback-email">Your Email (optional)</label>
    <input id="feedback-email" type="email" name="_replyto" placeholder="you@example.com">

    <!-- Hidden metadata -->
    <input type="hidden" name="page_url" value="{{ page.url | absolute_url }}">
    
    <button type="submit">Send Feedback</button>
  </form>

  <p class="feedback-confirmation" style="display:none;">
    ✅ Thank you! Your feedback has been sent.
  </p>
</div>

<script>
document.querySelector(".feedback-form")?.addEventListener("submit", function() {
  setTimeout(() => {
    document.querySelector(".feedback-confirmation").style.display = "block";
  }, 500);
});
</script>
<style>
.feedback-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background: var(--mm-bg, #f9f9fb);
  border: 1px solid var(--mm-border, #dcdcdc);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.feedback-container h2 {
  color: var(--mm-accent, #2a7ae2);
  margin-top: 0;
}

.feedback-form label {
  font-weight: 600;
  margin: 0.5rem 0 0.2rem;
  display: block;
  color: var(--mm-text, #333);
}

.feedback-form textarea {
  width: 100%;
  height: 120px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
}

.feedback-form input[type="email"] {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.feedback-form button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  background-color: var(--mm-accent, #2a7ae2);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.feedback-form button:hover {
  background-color: #1f5fb8;
}
</style>