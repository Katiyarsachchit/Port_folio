// --- Feature 1: Typewriter Effect ---
const words = ["Web Developer", "UI Designer", "Freelancer", "Tech Enthusiast"];
let i = 0; // Current word index
let j = 0; // Current character index
let currentWord = "";
let isDeleting = false;

function typeWriter() {
    currentWord = words[i];

    // Check if deleting or typing
    if (isDeleting) {
        // Remove a character
        document.getElementById("typing-text").innerHTML = currentWord.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i++;
            if (i === words.length) i = 0; // Loop back to first word
        }
    } else {
        // Add a character
        document.getElementById("typing-text").innerHTML = currentWord.substring(0, j++);
        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); // Pause before deleting
            return;
        }
    }
    
    // Speed control
    const speed = isDeleting ? 100 : 200;
    setTimeout(typeWriter, speed);
}

// Start the typing effect when window loads
window.onload = typeWriter;


// --- Feature 2: Dark/Light Mode Toggle ---
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        button.innerHTML = "🌙"; // Moon icon for dark mode switch
    } else {
        button.innerHTML = "☀️"; // Sun icon for light mode switch
    }
}


// --- Feature 3: Blog Interaction ---
function readBlog(title) {
    alert("Opening article: " + title + "\n\n(This would link to the full post in a real site!)");
}