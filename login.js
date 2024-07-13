function login() {
    var kullaniciAd = document.querySelector('.Input').value;
    var parola = document.querySelector('.password').value;

    if (kullaniciAd === "kullanici" && parola === "1234") {
        window.location.href="index.html";
    } else {
        var messageElement = document.getElementById("message");
        messageElement.innerHTML = '<div class="alert alert-danger">Geçersiz kullanıcı adı veya şifre.</div>';
        setTimeout(function() {
            messageElement.innerHTML = '';
        }, 2500);
    }
}