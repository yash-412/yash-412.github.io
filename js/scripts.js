// scripts.js

// window.addEventListener('load', function () {
//     const loadingScreen = document.getElementById('loading-screen');
//     const content = document.getElementById('content');

//     setTimeout(() => {
//         loadingScreen.style.opacity = '0';
//         content.classList.remove('hidden');
//         content.classList.add('visible');

//         setTimeout(() => {
//             loadingScreen.style.display = 'none';
//         }, 500); // Match the transition duration
//     }, 1000); // Ensure the image loads properly before hiding the loading screen
// });

document.addEventListener('DOMContentLoaded', function() {
    var linkedinLink = document.getElementById('linkedin-link');
    var linkedinCard = document.getElementById('linkedin-card');

    linkedinLink.addEventListener('mouseover', function() {
        linkedinCard.style.display = 'block';
    });

    linkedinLink.addEventListener('mouseout', function(event) {
        if (!linkedinCard.contains(event.relatedTarget)) {
            linkedinCard.style.display = 'none';
        }
    });

    linkedinCard.addEventListener('mouseleave', function() {
        linkedinCard.style.display = 'none';
    });
});

