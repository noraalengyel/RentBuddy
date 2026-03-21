const scriptURL = "https://script.google.com/macros/s/AKfycbyjTUxDTd64kOq5u7lBZg5m4MmlNML_QeSrmSQZ3-kgmN3GrU54TCzn5hJ8YXNWSWyDuQ/exec";

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

// CTA SCROLL
document.getElementById("cta-btn").addEventListener("click", () => {
  document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
});