const container = document.querySelector(".container");
const loginToggle = document.querySelector(".toggle-login");
const registerToggle = document.querySelector(".toggle-register");

if (container && loginToggle && registerToggle) {
  registerToggle.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginToggle.addEventListener("click", () => {
    container.classList.remove("active");
  });
}
