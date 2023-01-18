// navigation scripts

let nav = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");
hamburger.src = "images/hamburger.png";

hamburger.onclick = function() {
    if (nav.classList.contains("out")) {
        nav.classList.remove("out");
        hamburger.src = "images/hamburger.png"
    } else {
        nav.classList.add("out");
        hamburger.src = "images/x-out.png"
    }
}

let menuItems = document.getElementsByClassName("menu-item");

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function() {
        nav.classList.remove("out");
        hamburger.src = "images/hamburger.png"
    }
}

/*Featured work scroll functionality*/

let featureBox = document.getElementById("featured-work");
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

leftArrow.onclick = function left() {
    featureBox.scrollLeft -= 300;
};

rightArrow.onclick = function right() {
    featureBox.scrollLeft += 300;
};

function featureScroll() {
    let x = featureBox.scrollLeft;
    let featureWidth = featureBox.clientWidth;

    if (x < 1 * featureWidth) {
        leftArrow.classList.add("arrow-not-used");
    } else {
        leftArrow.classList.remove("arrow-not-used");
    }

    if (x > 2 * featureWidth) {
        rightArrow.classList.add("arrow-not-used");
    } else {
        rightArrow.classList.remove("arrow-not-used");
    }
}

featureBox.addEventListener("scroll", featureScroll);