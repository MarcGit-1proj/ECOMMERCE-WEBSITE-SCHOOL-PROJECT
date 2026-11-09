// ==========================================
// SEARCH BAR TOGGLE & OUTSIDE CLICK
// ==========================================
function toggleSearch() {
    document.getElementById("searchBar").classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const search = document.querySelector(".search-container");
    const dropdown = document.getElementById("searchBar");

    if (search && dropdown && !search.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});

// ==========================================
// VIDEO BACKGROUND CONTROL (IntersectionObserver)
// ==========================================
const video = document.getElementById("myVideo");

if (video) {
    video.muted = true;
    
    video.play().catch(error => {
        console.log("Autoplay was prevented by browser policy:", error);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(e => console.log(e));
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(video);
}

// ==========================================
// NAVBAR DROPDOWNS (Products & Support)
// ==========================================
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdownHome = document.getElementById("dropdownHome");
const dropdownSupport = document.getElementById("dropdownSupport");

let hideTimeout;

function closeAllDropdowns() {
    if (dropdownHome) dropdownHome.classList.remove("open");
    if (dropdownSupport) dropdownSupport.classList.remove("open");
}

function cancelHide() {
    clearTimeout(hideTimeout);
}

function scheduleHide() {
    hideTimeout = setTimeout(() => {
        closeAllDropdowns();
    }, 150);
}

if (dropdown1 && dropdownHome) {
    dropdown1.addEventListener("mouseenter", () => {
        cancelHide();
        if (dropdownSupport) dropdownSupport.classList.remove("open");
        dropdownHome.classList.add("open");
    });
    dropdown1.addEventListener("mouseleave", scheduleHide);

    dropdownHome.addEventListener("mouseenter", cancelHide);
    dropdownHome.addEventListener("mouseleave", scheduleHide);
}

if (dropdown2 && dropdownSupport) {
    dropdown2.addEventListener("mouseenter", () => {
        cancelHide();
        if (dropdownHome) dropdownHome.classList.remove("open");
        dropdownSupport.classList.add("open");
    });
    dropdown2.addEventListener("mouseleave", scheduleHide);

    dropdownSupport.addEventListener("mouseenter", cancelHide);
    dropdownSupport.addEventListener("mouseleave", scheduleHide);
}

// Automatically close dropdown menus when scrolling
window.addEventListener("scroll", closeAllDropdowns);

// ==========================================
// CART DROPDOWN MENU TOGGLE & OUTSIDE CLICK
// ==========================================
function toggleCart() {
    const cartDropdown = document.getElementById("cartDropdown");
    if (cartDropdown) {
        cartDropdown.classList.toggle("active");
    }
}

// Close the cart dropdown when clicking outside of the cart container
document.addEventListener("click", function(event) {
    const cartContainer = document.querySelector(".cart-container");
    const cartDropdown = document.getElementById("cartDropdown");

    if (cartContainer && cartDropdown && !cartContainer.contains(event.target)) {
        cartDropdown.classList.remove("active");
    }
});