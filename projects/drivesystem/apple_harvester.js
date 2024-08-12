document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const backButtons = document.querySelectorAll('.back-to-contents');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
        updateNavigation();
        updateBackToContents();
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        showSlide(n);
    }

    function updateNavigation() {
        document.getElementById('prevBtn').style.display = currentSlide === 0 ? 'none' : 'block';
        document.getElementById('nextBtn').style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
    }

    function updateBackToContents() {
        backButtons.forEach((button) => {
            button.style.display = currentSlide > 1 ? 'block' : 'none';
        });
    }
    // Create navigation buttons
    const prevDiv = document.createElement('div');
    prevDiv.className = 'nav-btn prev-btn';
    prevDiv.innerHTML = '<button id="prevBtn" onclick="prevSlide()">&#10094;</button>';
    document.body.appendChild(prevDiv);
 
    const nextDiv = document.createElement('div');
    nextDiv.className = 'nav-btn next-btn';
    nextDiv.innerHTML = '<button id="nextBtn" onclick="nextSlide()">&#10095;</button>';
    document.body.appendChild(nextDiv);

   // Initialize
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });
    updateNavigation();
    updateBackToContents();

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case "ArrowLeft":
                prevSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
        }
    });

    // Expose functions to global scope
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.goToSlide = goToSlide;

    console.log("Presentation mode initialized with arrow key navigation.");
});