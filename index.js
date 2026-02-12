// JavaScript
// const buttons = document.querySelectorAll(".read-more-btn");

// buttons.forEach(button => {
//     button.addEventListener("click", function () {
//         const box = this.parentElement;
//         box.classList.toggle("active");

//         if (box.classList.contains("active")) {
//             this.textContent = "Show Less";
//         } else {
//             this.textContent = "Read More";
//         }
//     });
// });
// const circles = document.querySelectorAll(".circle");

// function animateCircles() {
//     circles.forEach(circle => {
//         const number = circle.querySelector(".number");
//         const progress = circle.querySelector(".progress");
//         const percent = number.getAttribute("data-percent");

//         const offset = 314 - (314 * percent) / 100;
//         progress.style.strokeDashoffset = offset;

//         let count = 0;
//         const interval = setInterval(() => {
//             if (count >= percent) {
//                 clearInterval(interval);
//             } else {
//                 count++;
//                 number.textContent = count + "%";
//             }
//         }, 20);
//     });
// }
// // CONTACT FORM NOTIFICATION
// const form = document.getElementById("contactForm");
// const notification = document.getElementById("notification");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     if (name === "" || email === "" || message === "") {
//         alert("Please fill all fields!");
//         return;
//     }

//     notification.classList.add("show");

//     setTimeout(() => {
//         notification.classList.remove("show");
//     }, 3000);

//     form.reset();
// });

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateCircles();
//         }
//     });
// }, { threshold: 0.5 });

// observer.observe(document.querySelector(".personal-skills"));
// ==============================
// MOBILE NAVBAR TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// Close menu when clicking a link (mobile friendly)
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ==============================
// CIRCULAR SKILLS ANIMATION
// ==============================

const circles = document.querySelectorAll(".circle");

function animateCircles() {

    circles.forEach(circle => {

        const number = circle.querySelector(".number");
        const progress = circle.querySelector(".progress");

        if (!number || !progress) return;

        const percent = parseInt(number.getAttribute("data-percent"));

        const radius = 50; // must match SVG r value
        const circumference = 2 * Math.PI * radius;

        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;

        const offset = circumference - (percent / 100) * circumference;

        setTimeout(() => {
            progress.style.strokeDashoffset = offset;
        }, 200);

        let count = 0;

        const interval = setInterval(() => {
            if (count >= percent) {
                clearInterval(interval);
            } else {
                count++;
                number.textContent = count + "%";
            }
        }, 15);

    });

}


// ==============================
// INTERSECTION OBSERVER
// ==============================

const skillSection = document.querySelector(".personal-skills");

if (skillSection) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                animateCircles();
                observer.unobserve(entry.target); // run only once
            }

        });

    }, { threshold: 0.3 });

    observer.observe(skillSection);
}


// ==============================
// CONTACT FORM NOTIFICATION
// ==============================

const form = document.getElementById("contactForm");
const notification = document.getElementById("notification");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        if (notification) {
            notification.classList.add("show");

            setTimeout(() => {
                notification.classList.remove("show");
            }, 3000);
        }

        form.reset();
    });
}
