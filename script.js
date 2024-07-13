document.addEventListener('DOMContentLoaded', (event) => {
    const heartIcons = document.querySelectorAll('.icon');
    const clickElement = document.getElementById('click-count');
    let clickCount = 0;

    heartIcons.forEach(heartIcon => {
        heartIcon.addEventListener('click', (event) => {
            clickCount++;
            clickElement.textContent =  clickCount;
        });
    });
});
// Favoriler formuna yönlendirme
function GoToFavoriteForms(){
    window.location.href='favorites.html';
}

// Yarın Kapında formuna yönlendirme
function GoToDeliveryForm(){
    window.location.href='delivery.html';
}