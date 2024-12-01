document.addEventListener("DOMContentLoaded", function () {
  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const userIcon = document.getElementById("user-icon");
  const popupOverlay = document.getElementById("popup-overlay");

  userIcon.addEventListener("click", function () {
      popupOverlay.style.display = "flex";
  });

  loginTab.addEventListener("click", function () {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
      loginTab.classList.add("active");
      registerTab.classList.remove("active");
  });

  registerTab.addEventListener("click", function () {
      registerForm.style.display = "block";
      loginForm.style.display = "none";
      registerTab.classList.add("active");
      loginTab.classList.remove("active");
  });

  popupOverlay.addEventListener("click", function (e) {
      if (e.target === popupOverlay) {
          popupOverlay.style.display = "none";
      }
  });
});
