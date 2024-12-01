const productButton = document.getElementById("product-button");
const dropdownMenu = document.getElementById("dropdown-menu");

productButton.addEventListener("click", (event) => {
    event.preventDefault(); r
    console.log("Products button clicked");
    dropdownMenu.classList.toggle("show");
});


document.addEventListener("click", (event) => {
    if (!dropdownMenu.contains(event.target) && !productButton.contains(event.target)) {
        dropdownMenu.classList.remove("show");
    }
});

