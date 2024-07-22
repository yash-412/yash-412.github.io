document.addEventListener('scroll', function () {
    const contactSection = document.querySelector('#contact');
    const redes = document.querySelector('.redes');
    const contactSectionPosition = contactSection.getBoundingClientRect();

    if (contactSectionPosition.top <= window.innerHeight && contactSectionPosition.bottom >= 0) {
        redes.classList.add('hidden');
    } else {
        redes.classList.remove('hidden');
    }
});