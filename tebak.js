// Soal dengan gambar dan jawaban yang sesuai
const soalJawaban = [
    { gambar: "image/polisi.png", jawaban: "polisi tidur" },
    { gambar: "image/tikusberdasi.png", jawaban: "tikus berdasi" },
    { gambar: "image/matirasa.png", jawaban: "mati rasa" },
    { gambar: "image/tenagalistrik.png", jawaban: "tenaga listrik" },
    { gambar: "image/jambu batu.png", jawaban: "jambu batu" },
    { gambar: "image/raden.png", jawaban: "raden speed" },
    { gambar: "image/pakupayung.png", jawaban: "paku payung" },
    { gambar: "image/spongebob.png", jawaban: "mas anis mas anis" },
    { gambar: "image/pintutobat.png", jawaban: "pintu tobat" },
    { gambar: "image//marimakan.png", jawaban: "mari makan" },
    { gambar: "image/tuangair.png", jawaban: "tuang air" },
    { gambar: "image/kutubuku.png", jawaban: "kutu buku" },
    { gambar: "image/ambalabuu.png", jawaban: "ambalabu" },
    { gambar: "image/ulartangga.png", jawaban: "ular tangga" },
    { gambar: "image/hutangundul.png", jawaban: "hutan gundul" },
    { gambar: "image/buahbibir.png", jawaban: "buah bibir" },
    { gambar: "image/ibujari.png", jawaban: "ibu jari" },
    { gambar: "image/mtk.png", jawaban: "99" },
    { gambar: "image/rendang.png", jawaban: "rendang" },
    { gambar: "image/demamtinggi.png", jawaban: "demam tinggi" }



    
];

let indexSoal = 0;

let soalGambar = document.querySelector("#soal img"); // Ambil elemen gambar
let popup = document.getElementById("popup");
let popupMessage = document.getElementById("popup-text");
let popupImg = document.getElementById("popup-img");
let jawabanBenar = false; // Status apakah jawaban benar atau salah

// Fungsi untuk menampilkan soal (mengganti gambar)
function tampilkanSoal() {
    soalGambar.src = soalJawaban[indexSoal].gambar;
}

// Fungsi untuk mengecek jawaban
function cekJawaban() {
    let inputJawaban = document.getElementById("jawaban").value.toLowerCase().trim();
    let jawabanBenarSekarang = soalJawaban[indexSoal].jawaban.toLowerCase();

    if (inputJawaban === jawabanBenarSekarang) {
        popupMessage.innerHTML = "✅ Anjayyy benar Cihuyyy!";
        popupImg.src = "image/senang.png";
        popupImg.style.display = "block";
        jawabanBenar = true; // Tandai jawaban benar
    } else {
        popupMessage.innerHTML = "❌ Salah Kocak";
        popupImg.src = "image/emotebatu.png";
        jawabanBenar = false; // Jawaban salah, tetap di soal yang sama
    }

    // Tampilkan popup
    popup.style.display = "flex";
}

// Fungsi untuk menutup popup dan lanjut ke soal berikutnya jika jawaban benar
function tutupPopup() {
    popup.style.display = "none";
    document.getElementById("jawaban").value = ""; // Reset input

    if (jawabanBenar) {
        indexSoal++; // Pindah ke soal berikutnya hanya jika jawaban benar
        if (indexSoal >= soalJawaban.length) {
            popupMessage.innerHTML = "🎉 Semua soal sudah selesai!";
            indexSoal = 0; // Restart ke soal pertama
        }
        tampilkanSoal(); // Perbarui gambar soal
    }
}

// Tampilkan soal pertama saat halaman dimuat
tampilkanSoal();
