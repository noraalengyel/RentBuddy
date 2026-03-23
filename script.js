const scriptURL = "https://script.google.com/macros/s/AKfycbyjTUxDTd64kOq5u7lBZg5m4MmlNML_QeSrmSQZ3-kgmN3GrU54TCzn5hJ8YXNWSWyDuQ/exec";

const ctaBtn = document.getElementById("cta-btn");
const formPage = document.getElementById("form-page");
const hero = document.getElementById("hero");

// FAKE PAGE TRANSITION
ctaBtn.addEventListener("click", () => {
  hero.classList.add("hide");

  setTimeout(() => {
    formPage.classList.add("active");
  }, 300);
});

// FORM SUBMIT
document.getElementById("signup-form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ name, email }),
  })
    .then(() => {
      document.getElementById("response-message").innerText = "You're on the list!";
    })
    .catch(() => {
      document.getElementById("response-message").innerText = "Something went wrong.";
    });
});

// CURSOR TRACKING
document.querySelectorAll(".feature").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--x", x + "%");
    card.style.setProperty("--y", y + "%");
  });
});