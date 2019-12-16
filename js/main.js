let websiteCards = document.querySelectorAll('.website-card');
let websiteCardHeaders = document.querySelectorAll('.website-card-header');

websiteCardHeaders.forEach(header => header.addEventListener("click", (e) => {
    let websiteCard = header.closest(".website-card");

    if(websiteCard.offsetHeight <= 86) {
        websiteCard.style.maxHeight = "1000px";
    } else {
        websiteCard.style.maxHeight = "86px";
    }
}))