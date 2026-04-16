// Basit Kayıt Mantığı
function registerUser() {
    let name = document.getElementById('regName').value;
    let pass = document.getElementById('regPass').value;

    if(name === "" || pass === "") {
        alert("Lütfen isim ve şifre giriniz!");
    } else {
        localStorage.setItem('username', name);
        alert("Hoş geldin " + name + "! MangaLX dünyasına adım attın.");
        document.getElementById('authModal').style.display = 'none';
    }
}

// + Butonuna Basınca Form Açma (Basit alert ile gösterim)
document.getElementById('openUploadModal').addEventListener('click', () => {
    let choice = prompt("Hangi içeriği oluşturmak istiyorsun?\n1- Manga Oluştur\n2- Anime Oluştur");
    
    if(choice == "1") {
        alert("Manga Oluşturma Modu Aktif: Resimleri 1-2-3 sırasıyla seçin!");
    } else if(choice == "2") {
        alert("Anime Oluşturma Modu Aktif: Minimum 10 dk video yükleyin.");
    }
});

// Sayfa yüklenince kayıt ekranını göster (Giriş yapılmamışsa)
window.onload = () => {
    if(!localStorage.getItem('username')) {
        document.getElementById('authModal').style.display = 'flex';
    }
}
