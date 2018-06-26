var openButton = document.querySelector(".search-open-button");
var searchForm = document.querySelector(".search-form");
var arrivalDate = searchForm.querySelector("[name=arrival-date]");
var departureDate = searchForm.querySelector("[name=departure-date]");
var adultsCount = searchForm.querySelector("[name=adults-count]");
var childrenCount = searchForm.querySelector("[name=children-count]");

var isStorageSupport = true;
var storage = "";

try {
  storageAdultsCount = localStorage.getItem("adultsCount");
  storageChildrenCount = localStorage.getItem("childrenCount");
} catch (err) {
  isStorageSupport = false;
}

openButton.addEventListener("click", function(event) {
  event.preventDefault();
  searchForm.classList.toggle("search-form-open");  
  searchForm.classList.remove("search-form-error");
  arrivalDate.focus();
  if (isStorageSupport) {
    adultsCount.value = localStorage.getItem("adultsCount");
    childrenCount.value = localStorage.getItem("childrenCount");
  }
});

searchForm.addEventListener("submit", function(event) {
  if (!arrivalDate.value.trim() || !departureDate.value.trim() ||
  !adultsCount.value.trim() || !childrenCount.value.trim()) {
    event.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("search-form-error");
  }  else {
    if (isStorageSupport) {
      localStorage.setItem("adultsCount", Number(adultsCount.value));
      localStorage.setItem("childrenCount", Number(childrenCount.value));
    }
  }
});