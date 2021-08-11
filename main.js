var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");

sidenav.style.right = "-25rem";
menubtn.onclick = function(){
    if(sidenav.style.right == "-25rem"){
        sidenav.style.right = "0";
    }
    else{
        sidenav.style.right = "-25rem";
    }
}
