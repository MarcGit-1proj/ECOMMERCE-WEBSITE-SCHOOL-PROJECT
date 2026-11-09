function toggleSearch() {
    document.getElementById("searchBar").classList.toggle("active");
}


document.addEventListener("click", function(event) {
    const search = document.querySelector(".search-container");
    const dropdown = document.getElementById("searchBar");

    if (!search.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});

// Video Background Control with IntersectionObserver and muted playback
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

// Products and Support dropdown menus hover logic with buffer timeout
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
const dropdownHome = document.getElementById("dropdownHome");
const dropdownSupport = document.getElementById("dropdownSupport");

let hideTimeout;

function closeAllDropdowns() {
    dropdownHome.classList.remove("open");
    dropdownSupport.classList.remove("open");
}

function cancelHide() {
    clearTimeout(hideTimeout);
}

function scheduleHide() {
    hideTimeout = setTimeout(() => {
        closeAllDropdowns();
    }, 150);
}


dropdown1.addEventListener("mouseenter", () => {
    cancelHide();
    dropdownSupport.classList.remove("open");
    dropdownHome.classList.add("open");
});
dropdown1.addEventListener("mouseleave", scheduleHide);

dropdownHome.addEventListener("mouseenter", cancelHide);
dropdownHome.addEventListener("mouseleave", scheduleHide);


dropdown2.addEventListener("mouseenter", () => {
    cancelHide();
    dropdownHome.classList.remove("open");
    dropdownSupport.classList.add("open");
});
dropdown2.addEventListener("mouseleave", scheduleHide);

dropdownSupport.addEventListener("mouseenter", cancelHide);
dropdownSupport.addEventListener("mouseleave", scheduleHide);

// AUTOMATIC MAG CO-CLOSE YUNG MENU KAPAG SCROLL MO BSTA YUN NAYUN
window.addEventListener("scroll", closeAllDropdowns);

// Cart Toggle Function 
function toggleCart() {
    console.log("Cart clicked");
}