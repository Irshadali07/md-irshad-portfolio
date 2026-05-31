const menuBtn = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if(mobileMenu.classList.contains("active")){

        menuBtn.innerHTML = "✖";

    }else{

        menuBtn.innerHTML = "☰";

    }

});




const roles = [

    "Data Analyst ",

    "Python Developer",

    "Power BI Developer",

    "Excel Specialist",

   

];


const roleText = document.getElementById("role-text");

let index = 0;

setInterval(() => {

    roleText.classList.add("role-out");

    setTimeout(() => {

        index = (index + 1) % roles.length;

        roleText.textContent = roles[index];

        roleText.classList.remove("role-out");

        roleText.classList.add("role-in");

    }, 600);

}, 3000);


/* =========================
   ABOUT
========================= */

const readBtn = document.querySelector(".read-more-btn");
const moreText = document.querySelector(".more-text");

readBtn.addEventListener("click", () => {

    moreText.classList.toggle("show");

    if(moreText.classList.contains("show")){

        readBtn.textContent = "Read Less";

    }else{

        readBtn.textContent = "Read More";

    }

});