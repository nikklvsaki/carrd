/** @param {HTMLElement} element */
function transition(element, href) {
    const top = element.y;
    const left = element.x;
    const right = window.innerWidth - (left + element.clientWidth);
    const width = element.clientWidth;

    element.setAttribute("style", `--pre-top: ${top}px; --pre-left: ${left}px; --pre-right: ${right}px; --pre-width: ${width}px;`);

    element.classList.add("animation");

    const prefetch = document.createElement("link");
    prefetch.rel = "prefetch";
    prefetch.href = href;
    document.getElementsByTagName("head")[0].appendChild(prefetch)

    setTimeout(function () {
        window.location.href = href
    }, 1000)
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
