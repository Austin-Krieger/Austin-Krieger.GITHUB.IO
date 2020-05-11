document.getElementById('closeSideNav').addEventListener('click', closeNav);
//document.getElementById('containButtons').addEventListener('click', closeNav);

function openNav() {
    // Moved (var x) here so user needs to open the nav before we decide the width of the nav
    var x = window.matchMedia("(max-width: 520px)")
    if (x.matches) { // If media query matches
        document.getElementById("Sidenav").style.width = "100%";        
        document.getElementById("Sidenav").style.textAlign = "center";
    } else {
        document.getElementById("Sidenav").style.width = "250px";
        document.getElementById("Sidenav").style.textAlign = "left";
    }
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.body.style.backgroundColor = "#777777";
}