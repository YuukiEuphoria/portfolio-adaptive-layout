let nav = document.querySelector("#nav");
let navBtn = document.querySelector("#nav-btn");
let navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./image/icons/nav-close.svg";
  } else {
    navBtnImg.src = "./image/icons/nav-open.svg";
  }
};
