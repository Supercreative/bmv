function navToggle() {
  var element = document.getElementById("navblock");
  element.classList.toggle("hidenav");
  element.classList.toggle("shownav");
  setTimeout(() => {  element.classList.toggle("hideme"); }, 250);
}

window.addEventListener("resize", function() {
if (window.innerWidth > 992){
if (document.getElementById("navblock") !== 'undefined'){
var element = document.getElementById("navblock");

element.classList.remove("shownav");
element.classList.add("hidenav");
element.classList.add("hideme");
}}
});
