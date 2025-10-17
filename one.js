document.addEventListener('DOMContentLoaded', function() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    // Find the element with the introductory text
    const greetingElement = document.querySelector('.hero-content h2');
    
    // Check if the element exists and prepend the dynamic greeting
    if (greetingElement) {
        greetingElement.textContent = greeting + " I'm " + greetingElement.textContent.replace("Hi, I'm ", "").trim();
    }
});