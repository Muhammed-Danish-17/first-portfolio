// JavaScript
const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const box = this.parentElement;
        box.classList.toggle("active");

        if (box.classList.contains("active")) {
            this.textContent = "Show Less";
        } else {
            this.textContent = "Read More";
        }
    });
});
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
// CONTACT FORM NOTIFICATION
const form = document.getElementById("contactForm");
const notification = document.getElementById("notification");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);

    form.reset();
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCircles();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".personal-skills"));
