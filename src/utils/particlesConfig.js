const particleOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "transparent", // Membuat background particles transparan agar tidak menutupi background CSS
    },
    image: "none", // Tidak menggunakan gambar di background particles
    position: "50% 50%", // Menempatkan particles di tengah
    repeat: "no-repeat", // Tidak ada pengulangan
    size: "cover", // Gambar mengisi layar jika ada
    opacity: 0, // Mengatur opacity particles menjadi 0 (transparan)
  },
  fullScreen: {
    enable: true, // Membuat particles tampil fullscreen
    zIndex: -1, // Particles tampil di bawah konten lainnya
  },
  particles: {
    number: {
      value: 100, // Jumlah particles
      density: {
        enable: true, // Kepadatan particles
        width: 1920,
        height: 1080,
      },
    },
    color: {
      value: "#ff0000", // Warna particles
    },
    shape: {
      type: "circle", // Bentuk particles
    },
    size: {
      value: 3, // Ukuran dasar particles
      random: true, // Ukuran acak
    },
    move: {
      enable: true, // Mengaktifkan pergerakan particles
      speed: 2, // Kecepatan gerakan particles
      direction: "none", // Gerakan acak
      outModes: {
        default: "out", // Particles keluar dari layar
      },
    },
    opacity: {
      value: 0.6, // Transparansi particles
      random: true, // Transparansi acak
    },
    links: {
      enable: true, // Menghubungkan particles dengan garis
      distance: 150, // Jarak untuk menghubungkan particles
      color: "#ffffff", // Warna garis penghubung
      opacity: 0.5, // Transparansi garis
      width: 1, // Lebar garis
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true, // Mengaktifkan efek saat hover
        mode: "repulse", // Efek repulse saat hover
      },
      onClick: {
        enable: false, // Tidak ada efek klik
      },
    },
    modes: {
      repulse: {
        distance: 100, // Jarak efek repulse
        duration: 0.4, // Durasi efek repulse
      },
    },
  },
};

export default particleOptions;
