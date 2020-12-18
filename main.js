const bar = document.querySelector(".fa.fa-bars");
const headerMenu = document.querySelector(".header-menu");

bar.addEventListener("click", function () {
  headerMenu.classList.toggle("slide");
  bar.classList.toggle("fa-times");
});
