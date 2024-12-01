const productButton = document.getElementById("product-button");
const dropdownMenu = document.getElementById("dropdown-menu");

productButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents default link behavior
    console.log("Products button clicked");
    dropdownMenu.classList.toggle("show");
});

// Close the dropdown if clicking outside
document.addEventListener("click", (event) => {
    if (!dropdownMenu.contains(event.target) && !productButton.contains(event.target)) {
        dropdownMenu.classList.remove("show");
    }
});
