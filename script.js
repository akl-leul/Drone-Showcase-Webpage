
function add1(){  
    document.getElementById("price").innerText = "Price: $299.99";
};
function showMenu(){
    document.getElementById("menu").style.display ="flex";
    document.getElementById("menubtn").style.display ="none";
}
function closeMenu(){
    document.getElementById("menu").style.display ="none";
    document.getElementById("menubtn").style.display ="flex";
}