/*click images to open full screen version*/



let image = document.querySelectorAll('#overview img');

for (let i = 0; i < image.length; i++) {
    image[i].onclick = function() {
        let fullDiv = document.createElement("div");
        fullDiv.classList.add("fullscreen");
        fullDiv.style.backgroundImage = "url(" + image[i].src + ")";
        fullDiv.onclick = function() {
            fullDiv.classList.remove("fullscreen");
        }

        document.getElementsByTagName('body')[0].appendChild(fullDiv);
    };
}