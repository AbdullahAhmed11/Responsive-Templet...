let btn = document.querySelector(".up");

window.onscroll = function() {
    this.scrollY >= 300 ? btn.classList.add("show") : btn.classList.remove("show");
}
btn.onclick = function() {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
}