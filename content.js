// Change the title of the page
document.title = "GooPT - ChatGPT disguised as Google";

// Change the logo
const logo = document.querySelector("#logo"); // Replace '#logo' with the actual logo selector
if (logo) {
  logo.src =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  logo.alt = "GooPT";
}

// Change the header
const header = document.querySelector("#header"); // Replace '#header' with the actual header selector
if (header) {
  header.style.backgroundColor = "#ffffff";
  header.style.boxShadow = "0 1px 6px rgba(32, 33, 36, 0.28)";
}

// Modify the search box to look like Google's search box
const searchBox = document.querySelector("#searchBox"); // Replace '#searchBox' with the actual search box selector
if (searchBox) {
  searchBox.style.border = "1px solid #dfe1e5";
  searchBox.style.borderRadius = "24px";
  searchBox.style.fontSize = "16px";
}

// Add any other element manipulations here
