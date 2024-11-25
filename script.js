window.onscroll = function() {stickyHeader()};

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// inisialisasi datatabels
$(document).ready(function() {
    $('#example').DataTable({
        scrollX: true,
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });
});

// gambaran chart
const ctx = document.getElementById('chartLimbah').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2018', '2019', '2020', '2021'],
        datasets: [
            { label: 'PEM (Ton)', data: [90417311.57, 65164117.47], backgroundColor: 'rgba(75, 192, 192, 0.6)' },
            { label: 'Prasarana (Ton)', data: [31365793.62, 1173234.78], backgroundColor: 'rgba(255, 99, 132, 0.6)' },
        ]
    }
});

// analisa limbah b3
const dataLimbah = {
    "A101d": {
        nama: "Limbah yang mengandung senyawa POPs dan UPOPs",
        nfpa: "Health Hazard",
        penanggulangan: "Gunakan APD lengkap, hindari kontak langsung, dan simpan di wadah kedap udara.",
        identifikasi: "Limbah yang mengandung senyawa POPs dan UPOPs."
    },
    "A102d": {
        nama: "Limbah aki atau baterai bekas",
        nfpa: "Specific Hazard",
        penanggulangan: "Gunakan sarung tangan, simpan di tempat kering, dan hindari sumber panas.",
        identifikasi: "Limbah dari aki bekas atau baterai yang tidak digunakan."
    },
    "A103d": {
        nama: "Debu dan fiber asbes",
        nfpa: "Health Hazard",
        penanggulangan: "Gunakan masker respirator, simpan dalam kantong plastik berlabel asbes, hindari penyebaran debu.",
        identifikasi: "Debu atau fiber asbes yang berasal dari proses industri."
    },
    "A104d": {
        nama: "Air lindi dari landfill",
        nfpa: "Specific Hazard",
        penanggulangan: "Tampung dalam tangki tahan korosi, lakukan pengolahan dengan sistem filtrasi dan bioremediasi, buang setelah memenuhi baku mutu lingkungan.",
        identifikasi: "Cairan yang keluar dari tempat penimbunan limbah."
    },
    "A105d": {
        nama: "Limbah mengandung merkuri",
        nfpa: "Health Hazard",
        penanggulangan: "Simpan di wadah kaca/plastik anti bocor, hindari suhu tinggi yang menyebabkan penguapan.",
        identifikasi: "Sumber dari alat ukur, lampu fluoresen, produk kimia."
    },
    "A106d": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A107d": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A108d": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A109d": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A331-2": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A337-1": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A337-2": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "A337-3":{
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "B102d": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    },
    "B104d": {
        nama: "",
        nfpa: "",
        penanggulangan: "",
        identifikasi: ""
    }
};

function analisisLimbah(kodeLimbah) {
    let hasil = "";

    console.log("Kode Limbah yang Dipilih: ", kodeLimbah);
    
    if (!kodeLimbah || !dataLimbah[kodeLimbah]) {
        hasil = "<p>Kode limbah tidak ditemukan.</p>";
    } else {
        hasil = `
            <h3>Hasil Analisis</h3>
            <p><strong>Jenis Limbah:</strong> ${dataLimbah[kodeLimbah].nama}</p>
            <p><strong>Identifikasi:</strong> ${dataLimbah[kodeLimbah].identifikasi || "Tidak ada informasi identifikasi."}</p>
            <p><strong>Simbol NFPA 704:</strong> ${dataLimbah[kodeLimbah].nfpa}</p>
            <p><strong>Cara Penanggulangan:</strong> ${dataLimbah[kodeLimbah].penanggulangan}</p>
        `;
    }

    console.log("Hasil Analisis: ", hasil);

    document.getElementById("hasilAnalisis").innerHTML = hasil;
}

const form = document.getElementById('form-kalkulator');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const kodeLimbah = document.getElementById('kode-limbah').value;
    console.log("Nilai kode limbah yang diambil: ", kodeLimbah);
    analisisLimbah(kodeLimbah);

    const link = document.createElement('a');
    link.href = 'https://example.com';
    link.target = '_blank';
    link.textContent = 'Klik di sini untuk informasi lebih lanjut';
    link.style.display = 'block';
    link.style.marginTop = '10px';

    hasil.appendChild(link);
});
