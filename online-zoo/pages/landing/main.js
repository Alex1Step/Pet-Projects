//show search-input in header
const SEARCH = document.querySelector(".search-icon");
SEARCH.addEventListener(
  "click",
  (e) => {
    e.target.previousElementSibling.focus();
  },
  false
);
