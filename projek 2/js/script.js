let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};

function deteksiSakit() {
    var nama = document.getElementById("nama").value;
    var hari = document.getElementById("hari").value;
    var telp = document.getElementById("telp").value;
    var pesan = document.getElementById("pesan").value;

    const gejala = document.getElementById("gejala").value.toLowerCase();    
    let hasilDiagnosa = "Penanganan untuk gejala anda adalah ";

    if (gejala.includes("demam")) {
        hasilDiagnosa += "istirahat yang cukup, konsumsi cairan yang adekuat, dan penggunaan obat penurun demam seperti parasetamol sesuai dosis yang disarankan. Jika demam berlanjut atau disertai gejala lain, sebaiknya konsultasikan dengan dokter. ";
    }

    if (gejala.includes("batuk") || gejala.includes("pilek")) {
        hasilDiagnosa += "istirahat yang cukup, konsumsi cairan yang banyak, dan penggunaan obat simptomatik seperti dekongestan atau antipiretik jika diperlukan. Jika gejala parah atau berlanjut, sebaiknya konsultasikan dengan dokter. Vaksinasi flu juga dapat membantu mencegah infeksi.";
    }

    if (gejala.includes("sakit perut")) {
        hasilDiagnosa += "Masalah  menghindari makanan pedas, berlemak, dan asam. Konsumsi makanan kecil tapi sering dapat membantu. Obat antasid atau penghambat proton dapat digunakan sesuai petunjuk dokter. Hindari konsumsi alkohol dan berhenti merokok dapat membantu mengurangi gejala maag. Jika gejala berlanjut, sebaiknya konsultasikan dengan dokter. ";
    }

    if (gejala.includes("sakit kepala")) {
        hasilDiagnosa += "stirahat yang cukup, konsumsi cairan yang adekuat, dan penggunaan obat pereda nyeri seperti parasetamol atau ibuprofen sesuai dosis yang disarankan. Hindari pemicu seperti kurang tidur atau stres. Jika sakit kepala berulang atau menjadi semakin parah, sebaiknya konsultasikan dengan dokter untuk penanganan lebih lanjut.";
    }

    if (gejala.includes("radang tenggorokan")) {
        hasilDiagnosa += "melibatkan istirahat vokal, konsumsi cairan hangat seperti teh atau air lemon madu, dan hisapan es batu untuk meredakan peradangan. Obat semprot tenggorokan atau permen hisap bisa membantu meredakan gejala. Jika radang tenggorokan berlanjut atau disertai demam, segera konsultasikan dengan dokter. ";
    }

    if (gejala.includes("salah bantal")) {
        hasilDiagnosa += "pertimbangkan untuk menggunakan bantal yang memberikan dukungan yang tepat untuk leher dan kepala Anda. Evaluasi posisi tidur Anda dan pastikan bantal tidak terlalu tinggi atau rendah. Jika mungkin, konsultasikan dengan ahli fisioterapi atau dokter untuk saran lebih lanjut mengenai pilihan bantal yang sesuai dengan kebutuhan postur tubuh Anda.";
    }

    if (gejala.includes("nyeri otot")) {
        hasilDiagnosa += "melibatkan istirahat, aplikasi kompres dingin atau panas, dan konsumsi obat pereda nyeri seperti ibuprofen atau parasetamol sesuai dosis yang disarankan. Peregangan ringan juga dapat membantu meredakan ketegangan otot. Jika nyeri otot berlanjut atau menjadi semakin parah, sebaiknya konsultasikan dengan profesional medis.";
    }

    if (gejala.includes("bisul")) {
        hasilDiagnosa += "melibatkan penerapan kompres hangat untuk meredakan nyeri dan mempercepat pecahnya bisul. Hindari memencet bisul, dan jaga kebersihan area tersebut. Jika bisul berlanjut atau menyebabkan ketidaknyamanan yang signifikan, sebaiknya konsultasikan dengan dokter untuk perawatan lebih lanjut.";
    }

    if (gejala.includes("cacar")) {
        hasilDiagnosa += "melibatkan isolasi untuk mencegah penyebaran, istirahat, hidrasi yang cukup, penggunaan obat antipruritus, dan pakaian yang nyaman. Jika gejala memburuk, segera konsultasikan dengan dokter.";
    }
    if (gejala.includes("sakit gigi")) {
        hasilDiagnosa += " mencoba berkumur dengan air hangat dan garam, menggunakan kompres dingin di daerah yang sakit, dan mengonsumsi obat pereda nyeri sesuai dosis yang disarankan. Penting untuk segera berkonsultasi dengan dokter gigi untuk mengetahui penyebab sakit gigi dan mendapatkan perawatan yang tepat. Jangan menunda kunjungan ke dokter gigi jika rasa sakit berlanjut atau menjadi lebih intens.";
    }


    if (gejala.includes("cantengan")) {
        hasilDiagnosa += "melibatkan perendaman kaki dalam air hangat, menjaga kebersihan kuku, dan menghindari pemotongan kuku terlalu pendek. Penggunaan antiseptik dapat membantu mencegah infeksi. Jika terjadi peradangan atau infeksi lebih lanjut, sebaiknya konsultasikan dengan dokter.";
    }

    if (hasilDiagnosa === "Kemungkinan penyakit Anda: ") {
        hasilDiagnosa += "Tidak dapat dideteksi. Silakan konsultasikan dengan dokter.";
    }

    // document.getElementById("hasilDiagnosa").textContent = hasilDiagnosa;
    alert(nama +" "+ hasilDiagnosa )
}

