// GET ACCESS TO THE NAV-ITEMS CONTAINER FROM THE HTML 

const navItemsContainer = document.getElementById("nav-items-wrapper");


// FUNCTION THAT OPEN AND CLOSE THE NAVBAR 
function toggleNavbar(){
    navItemsContainer.classList.toggle("open-nav-items")
}