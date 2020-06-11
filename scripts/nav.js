var nav_container = document.getElementById("nav-links");
var nav_button = document.getElementById("nav-button");

navchange = () => {
  if (nav_container.style.display === "block") {
    nav_container.style.display = "none"
  } 
  else {
    nav_container.style.display = "block"
  }
};

navhover_on = () => {
  nav_button.style.borderColor = "dodgerblue"
  nav_button.style.color = "dodgerblue"
};

navhover_off = () => {
  nav_button.style.borderColor = "whitesmoke"
  nav_button.style.color = "whitesmoke"
};