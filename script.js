
// HAMBURGER MENU


const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

if(menu){

    menu.addEventListener("click",()=>{

        nav.classList.toggle("show");

    });

}




// SMOOTH SCROLL


document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener('click',function(e){

        const id=this.getAttribute("href");

        if(id.startsWith("#")){

            e.preventDefault();

            document.querySelector(id).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



// ACTIVE NAVBAR


const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});




// STICKY NAVBAR


const navbar=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.classList.add("sticky");

    }

    else{

        navbar.classList.remove("sticky");

    }

});










// SCROLL ANIMATION

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hero,.about,.tweets,.picture").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

const links = document.querySelectorAll("nav a");

function goToSection(id) {

    document.getElementById(id).scrollIntoView({

        behavior: "smooth"

    });

}

links.forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const sectionId = this.textContent.toLowerCase();

        goToSection(sectionId);

    });

});

function copyEmail() {
    const email = "ranasalmanali897@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const btn = document.getElementById("copy-btn");
        const originalText = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch((err) => {
        console.error("Copy failed:", err);
    });
}






menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});