const scriptURL = "https://script.google.com/macros/s/AKfycbyjTUxDTd64kOq5u7lBZg5m4MmlNML_QeSrmSQZ3-kgmN3GrU54TCzn5hJ8YXNWSWyDuQ/exec";

const formSection = document.getElementById("form-section");
const ctaBtn = document.getElementById("cta-btn");

// SMOOTH REVEAL (NO JUMP)
ctaBtn.addEventListener("click", () => {
  formSection.classList.add("active");

  setTimeout(() => {
    formSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
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