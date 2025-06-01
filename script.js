function transition(element, href) {

    element.style.animationName = "transition"
    element.classList.add("animation")
    setTimeout(function () {
        window.location.href = href
    }, 2000)

}

let boton1 = document.getElementById("btn1")
let boton2 = document.getElementById("btn2")
let boton3 = document.getElementById("btn3")

let botones = [boton1, boton2, boton3]

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")

let imgs = [img1, img2, img3]


for (let i = 0; i < botones.length; i++) {

    botones[i].addEventListener("click", function (e) {
        e.preventDefault();
        transition(imgs[i], botones[i].href);
    });

}
