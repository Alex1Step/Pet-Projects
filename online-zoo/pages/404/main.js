//show search input in header
const SEARCH = document.querySelector(".search-icon");
SEARCH.addEventListener(
  "click",
  (e) => {
    e.target.previousElementSibling.focus();
  },
  false
);

//show burger menu
const BURGER = document.querySelector(".burger");
const BURGER_MENU = document.querySelector(".show-burger-menu");
BURGER.addEventListener("click", (e) => {
  BURGER_MENU.classList.toggle("show");
});
