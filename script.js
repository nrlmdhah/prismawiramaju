// =============================
// Mobile Menu Toggle
// =============================

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Data for packages
const packageDetails = {
    pkgA: {
        title: "PAKEJ TERATAI - A",
        subtitle: "Sesuai bagi Majlis Aqiqah, Sambutan Hari Lahir & Lain-lain",
        items: [
            "Masa Sewaan 8 Jam",
            "4 Jam Untuk Persiapan Majlis",
            "4 Jam Untuk Sesi Majlis",
            "Seluruh Ruang Tingkat Satu",
            "Satu Bilik Persiapan",
            "Seluruh Lot Parking",
            "Kawalan Keselamatan"
        ],
        price: "RM 2,000"
    },
    pkgB: {
        title: "PAKEJ TERATAI - B",
        subtitle: "Sesuai bagi Majlis Tunang, Sambutan Hari Lahir & Lain-lain",
        items: [
            "Masa Sewaan 12 Jam",
            "7 Jam Untuk Persiapan Majlis",
            "5 Jam Untuk Sesi Majlis",
            "Seluruh Ruang Tingkat Satu & Dua",
            "Akses Kolam Renang",
            "Empat Bilik Persiapan",
            "Seluruh Lot Parking",
            "Kawalan Keselamatan"
        ],
        price: "RM 3,500"
    },
    pkgC: {
        title: "PAKEJ TERATAI - C",
        subtitle: "Sesuai bagi Majlis Nikah, Rumah Terbuka & Lain-lain",
        items: [
            "Masa Sewaan 24 Jam",
            "Penginapan Satu Malam",
            "5 Jam Untuk Sesi Majlis",
            "Keseluruhan Ruang Rumah",
            "Akses Kolam Renang",
            "Tujuh Bilik Persiapan",
            "Seluruh Lot Parking",
            "Kawalan Keselamatan"
        ],
        price: "RM 5,000"
    },
    pkgD: {
        title: "PAKEJ TERATAI - D",
        subtitle: "Sesuai bagi Majlis Resepsi, Hari Keluarga & Korporat",
        items: [
            "Masa Sewaan 3 Hari 2 Malam",
            "Penginapan Dua Malam",
            "6 Jam Untuk Sesi Majlis",
            "Keseluruhan Ruang Rumah",
            "Akses Kolam Renang",
            "Tujuh Bilik Persiapan",
            "Seluruh Lot Parking",
            "Kawalan Keselamatan"
        ],
        price: "RM 6,500"
    }
};

// Modal functions
function openModal(pkgId) {
    const data = packageDetails[pkgId];
    const modal = document.getElementById('packageModal');
    const body = document.getElementById('modalBody');

    // Generate List HTML
    const listHtml = data.items.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');

    body.innerHTML = `
        <h2>${data.title}</h2>
        <p style="color: #666; font-style: italic; margin-bottom: 20px;">${data.subtitle}</p>
        <ul>${listHtml}</ul>
        <div class="price-box">${data.price} SAHAJA</div>
        <div style="margin-top: 30px; text-align: center;">
            <a href="https://wa.me/601155529237?text=Saya berminat dengan ${data.title}" 
               target="_blank" 
               class="btn">Tempah Melalui WhatsApp</a>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('packageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById('packageModal');
    if (event.target == modal) {
        closeModal();
    }
}