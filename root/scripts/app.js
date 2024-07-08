// Element Selection 
let header = document.querySelector(".header");
let lists = document.querySelectorAll(".filter-buttons li");
let filterBoxs = document.querySelectorAll(".filter-box");
let topBtn = document.querySelector(".top-btn");
let burgerMenu = document.querySelector(".responsiv-menu img");
// Scroll Event
window.addEventListener("scroll", () => {
    let y = parseInt(this.scrollY.toString().slice(0, 4));
    if (y > 20) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    if (y > 100) {
        let aboutUs = document.querySelector(".about-us-container");
        aboutUs.classList.add("active");
        topBtn.classList.add("active");
    }else{
        topBtn.classList.remove("active")
    }
    if (y > 850) {
        let accordion = document.querySelector(".why-us-container");
        let imgBox = document.querySelector(".image-box");
        accordion.classList.add('active');
        imgBox.classList.add('active');
    }
    if (y > 1500) {
        let chartimage = document.querySelector(".chart-image");
        let skillsbar = document.querySelector(".skills-container")
        chartimage.classList.add('active');
        skillsbar.classList.add('active');
    }
    if (y > 2000) {
        let servicesSection = document.querySelector(".services-container .section-name");
        servicesSection.classList.add("active");
    }
    if (y > 2100) {
        let serviceBox = document.querySelectorAll(".service-box");
        serviceBox.forEach(box => {
            box.classList.add("active");
        })
    }
    if (y > 2500) {
        let coverContainer = document.querySelector(".cover-container");
        coverContainer.classList.add("animate__zoomIn");
    }
    if (y > 3000) {
        let portfolio = document.querySelector(".portfolio-container .section-name");
        portfolio.classList.add("animate__fadeInUp");
    }
    if (y > 3100) {
        let filterBtns = document.querySelector(".filter-buttons");
        let imageContainer = document.querySelector(".image-container");
        filterBtns.classList.add("animate__fadeInUp");
        imageContainer.classList.add("animate__fadeInUp");
    }
    if (y > 4600) {
        let testimonialSection = document.querySelector(".testimonial-container .section-name");
        testimonialSection.classList.add("animate__fadeInUp");
    }
    if (y > 4780) {
        let teamBoxses = document.querySelectorAll(".team-box");
        teamBoxses.forEach(teamBox => {
            teamBox.classList.add("animate__zoomIn");
        })
    }
    if (y > 5500){
        let pricingSection = document.querySelector(".pricing-container .section-name");
        pricingSection.classList.add("animate__fadeInUp");
    }
    if (y > 5650){
        let priceBoxses = document.querySelectorAll(".price-box");
        priceBoxses.forEach(priceBox => {
            priceBox.classList.add("animate__fadeInUp");
        })
    }
    if (y > 6450){
        let contactContainer = document.querySelector(".contact-container .section-name");
        contactContainer.classList.add("animate__fadeInUp");
    }
    if (y > 6550){
        let contactArea = document.querySelector(".contact-area");
        let formContact = document.querySelector(".form-contact");
        contactArea.classList.add("animate__fadeInUp");
        formContact.classList.add("animate__fadeInUp");
    }

})
    function portfolio() {
        lists.forEach(list => {
            list.addEventListener('click', (e) => {
                let value = e.target.getAttribute("data-filter");
                if (value === "all") {
                    filterBoxs.forEach(box => {
                        box.style.display = "block";
                        box.classList.add("animate__zoomIn");
                    })
                }
                if (value === "app") {
                    let filterBoxses = Array.from(filterBoxs);
                    filterBoxses.filter(box => {
                        box.style.display = "none";
                        if (box.classList.contains("filter-app")) {
                            box.style.display = "block";
                            box.classList.add("animate__zoomIn");

                        }
                    })
                }
                if (value === "card") {
                    let filterBoxses = Array.from(filterBoxs);
                    filterBoxses.filter(box => {
                        box.style.display = "none";
                        if (box.classList.contains("filter-card")) {
                            box.style.display = "block";
                            box.classList.add("animate__zoomIn");
                        }
                    })
                }
                if (value === "web") {
                    let filterBoxses = Array.from(filterBoxs);
                    filterBoxses.filter(box => {
                        box.style.display = "none";
                        if (box.classList.contains("filter-web")) {
                            box.style.display = "block";
                            box.classList.add("animate__zoomIn");
                        }
                    })
                }
            })
        })
    }
    portfolio();

    function buttonClick(clickedButton) {
        let filterBtn = document.querySelectorAll(".filter-btn");
        for (let i = 0; i < filterBtn.length; i++) {
            filterBtn[i].classList.remove("active");
        }
        clickedButton.classList.add("active");
    }

topBtn.addEventListener("click", () => {
     window.scrollTo({
        top: 0  
     })
});

function burgerBtn(){
    let responsiveMenu = document.querySelector(".nav-menu");
    responsiveMenu.classList.toggle("mobil-menu");
}