document.addEventListener("DOMContentLoaded", function(){
  // Ambil semua section yang memiliki atribut id (sesuai dengan anchor di navbar)
  const sections = document.querySelectorAll('main[id]');
  // Ambil semua link pada navbar
  const navLinks = document.querySelectorAll('.navbar-links ul li a');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      // Jika posisi scroll sudah melewati 1/3 section, maka set section tersebut sebagai aktif
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    
    // Update class active pada masing-masing link navbar
    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });
});

window.addEventListener("load", function() {
    // Cek tipe navigasi menggunakan API Performance
    let navEntries = window.performance.getEntriesByType("navigation");
    let navType = navEntries.length > 0 ? navEntries[0].type : performance.navigation.type;
  
    // Jika tipe navigasi adalah "reload" atau nilainya 1, redirect ke halaman login
    if (navType === "reload" || navType === 1) {
      window.location.href = "../index.html"; // Ganti dengan URL halaman login yang sesuai
    }
  });
  
  // Mengatur posisi scroll ke atas saat halaman akan dimuat ulang
    window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    // Referensi elemen
    const navLinks = document.querySelector('.navbar-links');
    const menuToggle = document.querySelector('.toggle-button');
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    // Fungsi toggle menu mobile
    function toggleMenu(e) {
      // Cegah event bubbling agar klik pada tombol tidak langsung memicu event document click
      e.stopPropagation();
      navLinks.classList.toggle('active');
    }
  
    // Event listener untuk tombol menu mobile
    menuToggle.addEventListener('click', toggleMenu);
  
    // Menutup navbar ketika mengklik di luar navbar
    document.addEventListener('click', function (event) {
      // Jika klik tidak berada di dalam navLinks atau menuToggle, tutup navbar
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
      }
    });
    
    const navItems = document.querySelectorAll('.navbar-links a');
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
    
    // Dark Mode: Periksa status dari localStorage
    if (localStorage.getItem('darkMode') === 'active') {
      darkModeToggle.checked = true;
      document.body.classList.add('dark-mode');
    }
  
    // Event listener untuk dark mode switch
    darkModeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'active');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('darkMode');
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("readMoreBtn");
    let close = document.getElementById("closeModal");
  
    // Menampilkan popup saat tombol diklik
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
        document.body.classList.add("modal-open"); // Mencegah scroll & input
    });
  
    // Menutup popup saat tombol close diklik
    close.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });
  });
  