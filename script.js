/* Open */
function openNav() {
  document.getElementById("menu").style.height = "100%";
  document.getElementById("openmenu").style.height = "0";
}

function openNav1() {
  document.getElementById("submenu-1").style.height = "100%";
  document.getElementById("openmenu").style.height = "0";
}

function openNav2() {
  document.getElementById("submenu-2").style.height = "100%";
  document.getElementById("openmenu").style.height = "0";
}

/* Close */
function closeNav() {
  document.getElementById("menu").style.height = "0";
  document.getElementById("openmenu").style.height = "40px";
}

function closeNav1() {
  document.getElementById("submenu-1").style.height = "0";
  document.getElementById("openmenu").style.height = "40px";
}

function closeNav2() {
  document.getElementById("submenu-2").style.height = "0";
  document.getElementById("openmenu").style.height = "40px";
}

function goBack() {
  window.history.back();
}
