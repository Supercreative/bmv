function focusOut(id){
   var formval = document.getElementById(id).value.length;
    if (formval !== 0){
      var parentel = document.getElementById(id);
      parentel.parentElement.classList.add('focus');
    } else {
      var parentel = document.getElementById(id);
      parentel.parentElement.classList.remove('focus');
    }
}

function navToggle() {
  var element = document.getElementById("navblock");
  element.classList.toggle("hidenav");
  element.classList.toggle("shownav");
  setTimeout(() => {  element.classList.toggle("hideme"); }, 250);
}


function drawerToggle(drawerid,objectid) {
  var element = document.getElementById(drawerid);
  var primaryContainer = document.getElementById("main");

  if (element.classList.contains("hidedrawer")){
    element.classList.remove("hidedrawer");
    setTimeout(() => { element.classList.toggle("reveal"); },0);
    element.classList.toggle("conceal");
  } else {
    element.classList.toggle("reveal");
    element.classList.toggle("conceal");
    setTimeout(() => {  element.classList.add("hidedrawer"); }, 500);
  }
  setTimeout(() => { primaryContainer.classList.toggle("bump");}, 500);
  setTimeout(() => { document.getElementById(objectid).focus();}, 500);
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


function tabs(tabber, tabName, itemid){
  let tabs = document.getElementById(tabber);
  let children = tabs.children;
  for (var i=0; i<children.length; i++) {
    children[i].classList.remove('active');
  }
  document.getElementById(itemid).parentElement.classList.add('active');
  var tabcontentID = tabber + "content";

  let tabcontent = document.getElementById(tabcontentID);
  let contentchildren = tabcontent.children;
  for (var i=0; i<children.length; i++) {
    contentchildren[i].classList.remove('active');
  }
  document.getElementById(tabName).classList.add('active');
}
