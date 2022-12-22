// logo scripts

let logo = document.getElementById("logo");

// default to hidden logo on page load

window.onload = function() {
    logo.className = "hide";
}

// show logo only after scrolling 100px

function logoScroll() {
    let y = window.scrollY;
    if (y >= 100) {
        logo.className = "show"
    } else {
        logo.className = "hide";
        logo.style.transition = ".5s"; // avoids transition happening on page load - instead only happens when scrolling back up
    }
}

window.addEventListener("scroll", logoScroll);

// navigation scripts

let nav = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");
//hamburger.src = "../images/hamburger-01.svg";

hamburger.onclick = function() {
    if (nav.classList.contains("out")) {
        nav.classList.remove("out");
        //hamburger.src = "../images/hamburger-01.svg"
    } else {
        nav.classList.add("out");
        //hamburger.src = "../images/x-out.svg"
    }
}

let menuItems = document.getElementsByClassName("menu-item");

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = function() {
        nav.classList.remove("out");
        hamburger.src = "../images/hamburger-01.svg"
    }
}

/*Featured work scroll functionality*/

let featureBox = document.getElementById("featured-work");
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

leftArrow.onclick = function() {
    featureBox.scrollLeft += 200;
};

rightArrow.onclick = function() {
    featureBox.scrollLeft -= 200;
};



