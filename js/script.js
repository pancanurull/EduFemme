// =========================
// Script untuk Interaksi Halaman Web
// =========================
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM Content Loaded. Memulai interaksi...");

    // Ambil elemen modal & tombol
    const signInLink = document.querySelector(".btn-signin"); // Tombol Sign In di navbar
    const modal = document.getElementById("signin-modal"); // Modal Sign In
    const closeBtn = document.querySelector(".close"); // Tombol Close (X) di modal
    const signInForm = document.getElementById("signInForm"); // Formulir Sign In
    const loginLink = document.getElementById("loginLink"); // Link Login

    // Pastikan modal tidak tampil saat halaman pertama kali dimuat
    modal.style.display = "none";
        
    // **Menampilkan Modal saat tombol Sign In diklik**
    if (signInLink) {
        signInLink.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman
            modal.style.display = "flex"; // Menampilkan modal
        });
    }

    // **Menutup Modal saat Tombol Close (X) diklik**
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            modal.style.display = "none"; // Menyembunyikan modal
        });
    }

    // **Menutup Modal jika klik di luar modal**
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Menyembunyikan modal
        }
    });

    // **Event saat Formulir Sign In dikirim**
    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            // Ambil nilai input dari form
            const fullName = document.getElementById("fullName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const dob = document.getElementById("dob").value;
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // **Validasi: Pastikan semua kolom terisi**
            if (!fullName || !phone || !dob || !email || !password) {
                //alert("⚠ Harap isi semua kolom sebelum melanjutkan!");
                return;
            }

            // **Menampilkan SweetAlert2 jika sign-in berhasil**
            Swal.fire({
                title: "✅ Berhasil Sign In!",
                text: `Selamat datang, ${fullName}! 🎉`,
                icon: "success",
                confirmButtonText: "OK",
            });

            // Tutup modal setelah login sukses
            modal.style.display = "none";
        });
    }

    // =========================
    // Pop-up untuk "Login di sini"
    // =========================
    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman
            Swal.fire({
                title: "Fitur Login",
                text: "🔒 Fitur login akan segera tersedia!",
                icon: "info",
                confirmButtonText: "OK",
                timer: 3000
            });
        });
    }

    // ===========================
    // Pengujian Kode (Console Testing)
    // ===========================
    function testValidation() {
        console.log("⚙️ Testing validasi form...");

        // Simulasi input kosong
        document.getElementById("fullName").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        // Kirim formulir untuk pengujian
        document.getElementById("signInForm").dispatchEvent(new Event("submit"));

        console.log("✅ Jika form dikirim dan kolom kosong, form tidak akan diproses!");
    }

    // Jalankan pengujian saat halaman sudah sepenuhnya dimuat
    setTimeout(() => {
        testValidation();
    }, 500); // Beri sedikit jeda agar tidak memberatkan halaman

});
