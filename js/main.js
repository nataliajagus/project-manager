let websiteCards = document.querySelectorAll('.website-card');
let websiteCardHeaders = document.querySelectorAll('.website-card-header');

websiteCardHeaders.forEach(header => header.addEventListener("click", (e) => {
    let websiteCard = header.closest(".website-card");

    if(websiteCard.offsetHeight < 450) {
        websiteCard.style.maxHeight = "450px";
        websiteCard.style.overflowY = "scroll";
    } else if(window.innerWidth >= 427 && window.innerWidth <= 768) {
        websiteCard.style.maxHeight = "170px";
        websiteCard.style.overflow = "hidden";
    } else if(window.innerWidth > 768) {
        websiteCard.style.maxHeight = "86px";
        websiteCard.style.overflow = "hidden";
    } else {
        websiteCard.style.maxHeight = "140px";
        websiteCard.style.overflow = "hidden";
    }

}))




// SHORTEN LINKS

let links = document.querySelectorAll(".website-card a");

if(window.innerWidth < 600) {
    links.forEach(link => link.innerText = link.innerText.substring(0,40) + "...");
}

if(window.innerWidth < 420) {
    links.forEach(link => link.innerText = link.innerText.substring(0,30) + "...");
}

if(window.innerWidth < 330) {
    links.forEach(link => link.innerText = link.innerText.substring(0,20) + "...");
}


window.addEventListener("resize", () => {
    if(window.innerWidth < 600) {
        links.forEach(link => link.innerText = link.innerText.substring(0,40) + "...");
    }

    if(window.innerWidth < 420) {
        links.forEach(link => link.innerText = link.innerText.substring(0,30) + "...");
    }
    
    if(window.innerWidth < 330) {
        links.forEach(link => link.innerText = link.innerText.substring(0,20) + "...");
    }
    
})



  