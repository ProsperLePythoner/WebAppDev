const words = ["Prosper.dev", "Innovation", "Web Development", "Creative Design"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const target = document.getElementById("typewriter");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Remove one character
        target.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add one character
        target.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing speed adjustments
    let typingSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause briefly when a full word is completed
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Switch to the next word once deleted
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start animation on DOM load
document.addEventListener("DOMContentLoaded", typeEffect);