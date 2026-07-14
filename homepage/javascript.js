// ===============================
// Scroll To Top Button
// ===============================
const scrollTopBtn = document.getElementById("scrolltopbtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===============================
// Mobile / Tablet Navigation Menu
// ===============================
const menu = document.getElementById("nav-menu");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelectorAll(".head-links a");

// Open / Close Menu
function toggleMenu() {

    // Only work on mobile and tablet
    if (window.innerWidth > 950) return;

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.innerHTML = "&times;";
    } else {
        menuBtn.innerHTML = "&#9776;";
    }
}

// Close Menu
function closeMenu() {
    menu.classList.remove("active");
    menuBtn.innerHTML = "&#9776;";
}

// Close menu when clicking outside
document.addEventListener("click", function (e) {

    if (
        window.innerWidth <= 950 &&
        !menu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        closeMenu();
    }

});

// Close menu after clicking any navigation link
navLinks.forEach(link => {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 950) {
            closeMenu();
        }

    });

});

// Close menu automatically when resizing to desktop
window.addEventListener("resize", () => {

    if (window.innerWidth > 950) {
        closeMenu();
    }

});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openModal");
const openBtns = document.getElementById("openModals");

// Open modal
openBtn.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.add("show");
});
openBtns.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.add("show");
});
// Close when clicking outside the white modal
modal.addEventListener("click", function(e){

    if(e.target === modal){
        modal.classList.remove("show");
    }

});


// Close the modal when clicking the × button
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
});