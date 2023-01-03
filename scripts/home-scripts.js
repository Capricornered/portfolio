// logo scripts (for index only)

let logo = document.getElementById("logo");

// default to hidden logo on page load

window.onload = function() {
    logo.className = "hide";
}

// show logo only after scrolling 100px

function logoScroll() {
    let y = window.scrollY;
    if (y >= (window.innerHeight - 100)) {
        logo.className = "show"
    } else {
        logo.className = "hide";
        logo.style.transition = ".5s"; // avoids transition happening on page load - instead only happens when scrolling back up
    }
}

window.addEventListener("scroll", logoScroll);