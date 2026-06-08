// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// =========================
// HERO BUTTON
// =========================

const exploreBtn = document.getElementById("exploreBtn");

if(exploreBtn){

    exploreBtn.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// MEMORY BUTTONS
// =========================

const memoryButtons = document.querySelectorAll(".memory-btn");

memoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if(!content) return;

        if(content.style.display === "block"){

            content.style.display = "none";

        }else{

            content.style.display = "block";

        }

    });

});

// =========================
// SECRET MESSAGE
// =========================

const secretBtn = document.getElementById("secretBtn");

if(secretBtn){

    secretBtn.addEventListener("click", () => {

        const secretMessage =
        document.getElementById("secretMessage");

        if(secretMessage){

            secretMessage.style.display = "block";

        }

    });

}

// =========================
// MEMORY VAULT
// =========================

const vaultBtn = document.getElementById("vaultBtn");

if(vaultBtn){

    vaultBtn.addEventListener("click", () => {

        const vaultMessage =
        document.getElementById("vaultMessage");

        if(vaultMessage){

            vaultMessage.style.display = "block";

        }

    });

}

// =========================
// TYPING EFFECT
// =========================

const typingElement =
document.getElementById("typingText");

if(typingElement){

    const text =
    "Whenever life gets heavy, you don't have to carry it alone.";

    let index = 0;

    function typeWriter(){

        if(index < text.length){

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

}

// =========================
// PARALLAX HERO
// =========================

window.addEventListener("scroll", () => {

    const heroImage =
    document.querySelector(".hero-img");

    if(heroImage){

        const scrollValue =
        window.pageYOffset;

        heroImage.style.transform =
        `translateY(${scrollValue * 0.3}px)`;

    }

});

// =========================
// NAV ACTIVE LINK
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 300){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){

            link.classList.add("active");

        }

    });

});
