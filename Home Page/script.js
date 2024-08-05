let menu = document.getElementById('menulist');
menu.style.maxHeight = "0px";

function Menu () {
    if (menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "100vh";
    }else {
        menu.style.maxHeight = "0px"
    }
}