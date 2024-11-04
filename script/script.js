window.addEventListener('scroll', function() {
    const image = document.getElementById('mainImage');
    if (window.scrollY > 100) { // Puedes ajustar el valor
        image.classList.add('hidden');
    } else {
        image.classList.remove('hidden');
    }
});