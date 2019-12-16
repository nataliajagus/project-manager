let websiteCards = document.querySelectorAll('.website-card');
let websiteCardHeaders = document.querySelectorAll('.website-card-header');

websiteCardHeaders.forEach(header => header.addEventListener("click", (e) => {
    let websiteCard = header.closest(".website-card");

    if(websiteCard.offsetHeight <= 140) {
        websiteCard.style.maxHeight = "1000px";
    } else if(window.innerWidth <= 768) {
        websiteCard.style.maxHeight = "140px";
    } else {
        websiteCard.style.maxHeight = "86px";
    }
}))


// SHORTEN LINKS

let links = document.querySelectorAll(".website-card a");

links.forEach(link => link.innerText = link.innerText.substring(0,30) + "...");
  