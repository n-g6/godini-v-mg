function showDropdown() {
    let btn = document.getElementById("menu-button");

    document.getElementsByClassName("links-dropdown")[0].classList.toggle("visible");
    
    if (btn.classList.contains("fa-bars") || btn.classList.contains("fa-remove")) {
        btn.classList.toggle("fa-remove");
        btn.classList.toggle("fa-bars");
    }
}