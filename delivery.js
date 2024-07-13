const data = {
    istanbul: {
        kadikoy: ["Moda", "Göztepe", "Bostancı"],
        besiktas: ["Etiler", "Levent", "Ortaköy"]
    },
    ankara: {
        cankaya: ["Kızılay", "Bahçelievler", "Ayrancı"],
        mamak: ["Akdere", "Dikimevi", "Saimekadın"]
    },
    izmir: {
        bornova: ["Kazımdirik", "Erzene", "Evka 3"],
        karsiyaka: ["Bostanlı", "Mavişehir", "Alaybey"]
    },
    bursa: {
        nilufer: ["Görükle", "Ataevler", "Beşevler"],
        osmangazi: ["Çekirge", "Dikkaldırım", "Altıparmak"]
    },
    antalya: {
        muratpasa: ["Konyaaltı", "Lara", "Kaleiçi"],
        kepez: ["Dokuma", "Sütçüler", "Teomanpaşa"]
    },
    adana: {
        seyhan: ["Çınarlı", "Reşatbey", "Kurtuluş"],
        cukurova: ["Güzelyalı", "Toros", "Yüzüncüyıl"]
    },
    konya: {
        selcuklu: ["Bosna Hersek", "Kosova", "Yazır"],
        meram: ["Karatay", "Konevi", "Saadet"]
    }
};

function updateIlce() {
    const ilSelect = document.getElementById("ilSelect");
    const ilceSelect = document.getElementById("ilceSelect");
    const mahalleSelect = document.getElementById("mahalleSelect");
    const selectedIl = ilSelect.value;

    ilceSelect.innerHTML = '<option selected disabled>İlçe seçin</option>';
    mahalleSelect.innerHTML = '<option selected disabled>Mahalle seçin</option>';

    if (selectedIl) {
        const ilceler = Object.keys(data[selectedIl]);
        ilceler.forEach(ilce => {
            const option = document.createElement("option");
            option.value = ilce;
            option.textContent = ilce.charAt(0).toUpperCase() + ilce.slice(1);
            ilceSelect.appendChild(option);
        });
    }
}

function updateMahalle() {
    const ilSelect = document.getElementById("ilSelect");
    const ilceSelect = document.getElementById("ilceSelect");
    const mahalleSelect = document.getElementById("mahalleSelect");
    const selectedIl = ilSelect.value;
    const selectedIlce = ilceSelect.value;

    mahalleSelect.innerHTML = '<option selected disabled>Mahalle seçin</option>';

    if (selectedIl && selectedIlce) {
        const mahalleler = data[selectedIl][selectedIlce];
        mahalleler.forEach(mahalle => {
            const option = document.createElement("option");
            option.value = mahalle.toLowerCase();
            option.textContent = mahalle;
            mahalleSelect.appendChild(option);
        });
    }
}

document.getElementById("selectionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun varsayılan submit davranışını engelle
    const il = document.getElementById("ilSelect");
    const ilce = document.getElementById("ilceSelect");
    const mahalle = document.getElementById("mahalleSelect");
    const messageDiv = document.getElementById("message");

    let message = 'Adres: ';

    if (il.selectedIndex > 0) {
        message += `İl - ${il.options[il.selectedIndex].text}, `;
    }
    if (ilce.selectedIndex > 0) {
        message += `İlçe - ${ilce.options[ilce.selectedIndex].text}, `;
    }
    if (mahalle.selectedIndex > 0) {
        message += `Mahalle - ${mahalle.options[mahalle.selectedIndex].text}`;
    }

    message = message.trim().replace(/,$/, '');

    messageDiv.style.display = "block";
    messageDiv.textContent = message;

    setTimeout(function() {
        messageDiv.style.display = "none";
    }, 3200);
});

function loginYonlendirme(){
    window.location.href="login.html";
}