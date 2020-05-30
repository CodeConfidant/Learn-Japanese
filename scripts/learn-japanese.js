navchange = () => {
    var nav_container = document.getElementById("nav-links");

    if (nav_container.style.display === "block") {
      nav_container.style.display = "none";
    } 
    else {
      nav_container.style.display = "block";
    }
};