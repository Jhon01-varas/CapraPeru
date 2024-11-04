AOS.init();

window.addEventListener("scroll", function() {
    const mainImage = document.getElementById("mainImage");
    if (window.scrollY > 100) {
        mainImage.classList.add("hidden");
    } else {
        mainImage.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.mission-vision-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    });

    observer.observe(section);
});
