const signInBtnEl = document.getElementById("sign-in");
const formContainerEl = document.getElementById("login-form-container");
// const overlay = document.getElementById("overlay");
// const closeLogin = document.getElementsByClassName("close-login");
const header = document.getElementById("header");
const bookBtn = document.querySelectorAll(".book-now-btn");

const showSignForm = () => {
  formContainerEl.classList.remove("hidden");
  // overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

signInBtnEl.addEventListener("click", function () {
  showSignForm();
});

bookBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showSignForm();
  });
});

formContainerEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("login-form-container")) {
    formContainerEl.classList.add("hidden");
    document.body.style.overflow = "scroll";
  }
  // // overlay.classList.add("hidden");
});

// document.querySelector(".sign-up").addEventListener("submit", function (e) {
//   e.preventDefault();
// });

//logic for header image loop
// const headerImages = ["train1.jpg", "train2.jpg", "train3.jpg"];
// // const changeHeaderImage = (i) => {};
// let i = 0;
// setInterval(() => {
//   if (i >= headerImages.length) {
//     i = 0;
//   }
//   header.style.backgroundImage = `linear-gradient(rgba(1, 24, 11, 0.7), rgba(1, 24, 11, 0.7)), url("../assets/${headerImages[i]}")`;
//   header.style.backdropFilter = "opacity(1)";
//   i++;
//   console.log(i);
//   console.log(header);
// }, 4000);

// start
document.addEventListener("DOMContentLoaded", function () {
  var showSignupForm = document.getElementById("showSignupForm");
  var showLoginForm = document.getElementById("showLoginForm");
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");

  showSignupForm.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  });

  showLoginForm.addEventListener("click", function (event) {
    event.preventDefault();
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });
});
