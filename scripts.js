document.addEventListener('scroll', function () {
    // Handle scrolling for .body-container
    const bodyContainer = document.querySelector('.body-container');
    const scrollThreshold = 0; // Adjust this value if needed
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (bodyContainer) {
        bodyContainer.style.transform = `translateY(${scrollPosition - scrollThreshold}px)`;
    }

    // Handle scrolling for .section
    const section = document.querySelector('.section');
    if (section) {
        section.style.transform = `translateY(-${scrollPosition}px)`;
    }
});