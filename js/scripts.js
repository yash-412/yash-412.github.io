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
    var githubLink = document.getElementById('github-link');
    var githubCard = document.getElementById('github-card');
    var huggingfaceLink = document.getElementById('huggingface-link');
    var huggingfaceCard = document.getElementById('huggingface-card');

    function showCard(link, card) {
        var rect = link.getBoundingClientRect();
        var top = rect.bottom + window.scrollY;
        var left = rect.left + window.scrollX;
        card.style.top = top + 'px';
        card.style.left = left + 'px';
        card.style.display = 'block';
    }

    function hideCard(card) {
        card.style.display = 'none';
    }

    linkedinLink.addEventListener('mouseover', function() {
        showCard(linkedinLink, linkedinCard);
    });
    githubLink.addEventListener('mouseover', function() {
        showCard(githubLink, githubCard);
    });
    huggingfaceLink.addEventListener('mouseover', function() {
        showCard(huggingfaceLink, huggingfaceCard);
    });

    linkedinLink.addEventListener('mouseout', function(event) {
        if (!linkedinCard.contains(event.relatedTarget)) {
            hideCard(linkedinCard);
        }
    });
    githubLink.addEventListener('mouseout', function(event) {
        if (!githubCard.contains(event.relatedTarget)) {
            hideCard(githubCard);
        }
    });
    huggingfaceLink.addEventListener('mouseout', function(event) {
        if (!huggingfaceCard.contains(event.relatedTarget)) {
            hideCard(huggingfaceCard);
        }
    });

    linkedinCard.addEventListener('mouseleave', function() {
        hideCard(linkedinCard);
    });
    githubCard.addEventListener('mouseleave', function() {
        hideCard(githubCard);
    });
    huggingfaceCard.addEventListener('mouseleave', function() {
        hideCard(huggingfaceCard);
    });
});



