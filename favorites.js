// Sayfa yönlendirme
function Geriyonlendirme() {
    window.location.href = "index.html";
  }

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      cards.forEach((card) => {
        const cardTitle = card
          .querySelector(".card-title")
          .textContent.toLowerCase();
        if (cardTitle.includes(searchTerm)) {
          card.parentElement.style.display = "";
        } else {
          card.parentElement.style.display = "none";

        }
      });
    });
  });

  