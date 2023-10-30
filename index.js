let form = document.querySelector("form");
let input = document.querySelector("input");
let email = document.querySelector(".email");
let p = document.createElement("p");
let container = document.querySelector(".container");
let submitted = document.querySelector(".submitted");
for (i = 0; i < container.children.length; i++) {
  container.children[i].style.opacity = 0;
  container.children[i].style.transition = "0.3s";
}
window.onload = function () {
  setTimeout(() => {
    let time = 0;
    for (i = 0; i < container.children.length; i++) {
      container.children[i].style.transitionDelay = `${time}ms`;
      container.children[i].style.opacity = 1;
      time += 500;
    }
  }, 500);
  setTimeout(() => {
    for (i = 0; i < container.children.length; i++) {
      container.children[i].style.transitionDelay = "0ms";
    }
  }, 1000);
};
form.onsubmit = function (e) {
  e.preventDefault();

  if (!/\w+@\w+.\w+/.test(input.value)) {
    email.classList.add("err");
    email.appendChild(p);
    p.innerHTML = "Please Provide Valid Email Address";
  } else {
    if (email.children.length > 1) {
      email.classList.remove("err");
      email.removeChild(p);
    }
    submitted.style.display = "block";
    setTimeout(() => {
      submitted.style.opacity = 1;
    }, 100);
    setTimeout(() => {
      submitted.style.opacity = 0;
      submitted.style.display = "none";
    }, 5000);
  }
};
