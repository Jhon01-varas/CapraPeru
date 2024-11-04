AOS.init();

window.addEventListener("scroll", function() {
    const mainImage = document.getElementById("mainImage");
    if (window.scrollY > 100) {
        mainImage.classList.add("hidden");
    } else {
        mainImage.classList.remove("hidden");
    }
});
