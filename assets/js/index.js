var hamburguerMenu = document.getElementById("hamburguer-menu");

hamburguerMenu.addEventListener("click", () => {
  var navBar = document.getElementById("nav-bar");

  if (navBar.classList.contains("removed")) {
    navBar.classList.remove("removed");
    navBar.style.flexDirection = "column";
  } else {
    navBar.classList.add("removed");
  }
});
