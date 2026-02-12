const circles = document.querySelectorAll(".circle");

function animateCircles() {
    circles.forEach(circle => {
        const number = circle.querySelector(".number");
        const progress = circle.querySelector(".progress");
        const percent = number.getAttribute("data-percent");

        const offset = 314 - (314 * percent) / 100;
        progress.style.strokeDashoffset = offset;

        let count = 0;
        const interval = setInterval(() => {
            if (count >= percent) {
                clearInterval(interval);
            } else {
                count++;
                number.textContent = count + "%";
            }
        }, 20);
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCircles();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".personal-skills"));
