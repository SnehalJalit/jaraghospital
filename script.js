
// Get the icon and the div
const toggleIcon = document.querySelector('.navbar-set1-oc-icon');
const toggleIcon1 = document.querySelector('.navbar-set1-oc-icon1');
const main2Div = document.querySelector('.main2');

// Add click event listener to the icon
toggleIcon.addEventListener('click', function() {
    // Toggle the visibility of the main2 div
    if (main2Div.style.display === "none" || main2Div.style.display === "") {
        main2Div.style.display = "block";
    } else {
        main2Div.style.display = "none";
    }
});


toggleIcon1.addEventListener('click', function() {
    // Toggle the visibility of the main2 div
    if (main2Div.style.display === "none" || main2Div.style.display === "") {
        main2Div.style.display = "block";
    } else {
        main2Div.style.display = "none";
    }
});

function bookAppointment() {
    alert("Booking an appointment...");
}

// <.........................section3.........>/


// <....................section4............>




document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("#whyChooseUsList li");
    let currentIndex = 0;

    function typeText(element, text, index, callback) {
        if (index < text.length) {
            element.innerHTML = text.substring(0, index + 1) + '<span class="blink">|</span>'; // Blink cursor at end
            setTimeout(() => typeText(element, text, index + 1, callback), 50); // Typing speed is 50ms per character
        } else {
            element.innerHTML = text; // Remove cursor when done
            if (callback) callback();
        }
    }

    function startTypingEffect() {
        if (currentIndex < listItems.length) {
            const listItem = listItems[currentIndex];
            const text = listItem.textContent;
            listItem.textContent = ""; // Clear the current text for typing

            typeText(listItem, text, 0, function() {
                currentIndex++;
                setTimeout(startTypingEffect, 10); // Wait 500ms before typing the next list item
            });
        }
    }

    // Start typing when the section is visible using IntersectionObserver
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            startTypingEffect();
            observer.disconnect(); // Avoid multiple triggers
        }
    });

    observer.observe(document.querySelector(".section6-left-p2"));
});

// <...........................sect5......>


document.addEventListener("DOMContentLoaded", function() {
    const servicesText = document.querySelector(".section5-left-p1");

    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            servicesText.style.animationPlayState = 'running'; // Start animation when in view
        } else {
            servicesText.style.animationPlayState = 'paused'; // Pause when out of view
        }
    });

    // Initially pause the animation until the section is in view
    servicesText.style.animationPlayState = 'paused';

    observer.observe(servicesText);
});





// <...-------------section4...----->

document.addEventListener("DOMContentLoaded", function() {
    const section4 = document.querySelector(".section4");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section4.classList.add('zoom'); // Add class to start the zoom animation
            } else {
                section4.classList.remove('zoom'); // Remove class when out of view
            }
        });
    });

    observer.observe(section4); // Observe the section
});


// <-------------------section6----------->

document.addEventListener("DOMContentLoaded", function() {
    const section6Img = document.querySelector(".sec6-img");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section6Img.classList.add('zoom'); // Add class to start the zoom animation
            } else {
                section6Img.classList.remove('zoom'); // Remove class when out of view
            }
        });
    });

    observer.observe(section6Img); // Observe the image
});
