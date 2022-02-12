const navContainer = document.querySelector(".nav-container");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const curtain = document.querySelector(".curtain")

menuIcon.addEventListener("click", () => {
    navContainer.classList.add("menu-open");
    curtain.classList.add("show");
    document.body.style.overflow = "hidden"
});

closeIcon.addEventListener("click", () => {
    navContainer.classList.remove("menu-open");
    curtain.classList.remove("show");
    document.body.style.overflow = "auto";
});


curtain.addEventListener("click", () => {
  navContainer.classList.remove("menu-open");
    curtain.classList.remove("show");
    document.body.style.overflow = "auto";
});


