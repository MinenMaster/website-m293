const burger = document.querySelector("burger")
const burgernav = document.querySelector("burgernav")

function closeBurger() {
    var initialBurgerColor = window.getComputedStyle(document.getElementById("burger1")).backgroundColor;
    console.log(initialBurgerColor)
    burgernav.style.display = "none"
    document.getElementById("burger1").style.visibility = "visible";
    document.getElementById("burger1").style.transform = "translateY(0%)";
    document.getElementById("burger2-1").style.backgroundColor = initialBurgerColor;
    document.getElementById("burger2-1").style.transform = "rotate(0deg)";
    document.getElementById("burger2-2").style.backgroundColor = initialBurgerColor;
    document.getElementById("burger2-2").style.transform = "rotate(0deg)";
    document.getElementById("burger3").style.visibility = "visible";
    document.getElementById("burger3").style.transform = "translateY(0%)";
}

function openBurger() {
    burgernav.style.display = "block"
    document.getElementById("burger1").style.transform = "translateY(300%)";
    document.getElementById("burger1").style.visibility = "hidden";
    document.getElementById("burger2-1").style.backgroundColor = "black";
    document.getElementById("burger2-1").style.transform = "rotate(45deg)";
    document.getElementById("burger2-2").style.backgroundColor = "black";
    document.getElementById("burger2-2").style.transform = "rotate(-45deg)";
    document.getElementById("burger3").style.transform = "translateY(-300%)";
    document.getElementById("burger3").style.visibility = "hidden";
}

burger.addEventListener("click", () => {
    if (burgernav.style.display === "block") {
        closeBurger();
    } else {
        openBurger();
    }8818
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        burgernav.style.display = "none";
        closeBurger();
    }
});

var modal = document.getElementById("imprint");
var btn = document.getElementById("footer-button");
var contact = document.getElementById("modal-contact");
var span = document.getElementsByClassName("close")[0];
// When click on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When click on <span> (x), close the modal81
span.onclick = function() {
    modal.style.display = "none";
}
contact.onclick = function() {
    modal.style.display = "none";
}
// When click anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function(){
    $("#myCarousel").carousel({interval: false});

    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});