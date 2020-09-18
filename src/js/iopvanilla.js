function navToggle() {
  var element = document.getElementById("navblock");
  element.classList.toggle("hidenav");
  element.classList.toggle("shownav");
}

window.addEventListener("resize", function() {
if (window.innerWidth > 992)
var element = document.getElementById("navblock");
element.classList.remove("shownav");
element.classList.add("hidenav");
});
