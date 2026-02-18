document.addEventListener("DOMContentLoaded", () => {
  // BAGIAN 1: DATA (KONTEN WEBSITE)

  const portfolioData = {
    navbar: {
      logoText: "JAEL.",
      links: [
        { text: "Tentang", href: "#about" },
        { text: "Proyek", href: "#projects" },
        { text: "Pengalaman", href: "#experience" },
        { text: "Kontak", href: "#contact" },
      ],
    },
    hero: {
      headline:
        "Building Scalable Digital Solutions & <span>Data-Driven Insights.</span>",
      subHeadline:
        "Muhamad Usman Al Jaelani | Information Systems Student (IPK/GPA 3.87)",
      bodyText:
        "Aspiring IT Developer & Data Analyst. Combining technical coding expertise with meticulous data accuracy.",
      buttons: [
        { text: "View Work", href: "#projects", class: "btn primary" },
        { text: "Contact Me", href: "#contact", class: "btn secondary" },
      ],
      image: "assets/profile.png",
    },
    about: {
      title: "Profil & Tujuan",
      cards: [
        {
          icon: "fa-graduation-cap",
          title: "Pelajar",
          desc: "Mahasiswa semester 5 Universitas Nasional dengan pemahaman fundamental yang kuat dalam Pengembangan Perangkat Lunak dan Sains Data.",
        },
        {
          icon: "fa-user-tie",
          title: "Profesional",
          desc: "Berpengalaman dalam manajemen administrasi, menjunjung tinggi integritas data, akurasi keuangan, dan disiplin operasional.",
        },
        {
          icon: "fa-crosshairs",
          title: "Tujuan",
          desc: "Mencari kesempatan magang untuk menerapkan pengetahuan dan keterampilan analitis di lingkungan teknologi profesional.",
        },
      ],
    },
    projects: [
      {
        id: "modal-1",
        img: "assets/cover1.jpg",
        modalImg: "assets/modal1.jpeg",
        tags: ["HTML", "CSS", "JS"],
        title: "Jual-Beli Akun Game",
        shortDesc: "Proyek Pertama: Frontend E-commerce.",
        longDesc:
          "Proyek pertama saya dalam membangun antarmuka e-commerce. Fokus pada tata letak grid yang rapi untuk menampilkan katalog produk game.",
        features: [
          "Tata letak responsif dengan CSS Flexbox.",
          "Efek hover interaktif pada kartu produk.",
          "Navigasi simpel dan ramah pengguna.",
        ],
      },
      {
        id: "modal-2",
        img: "assets/cover2.jpg",
        modalImg: "assets/modal2.jpeg",
        tags: ["HTML", "CSS", "JS"],
        title: "Jasa Perjalanan",
        shortDesc: "Laman Eksplorasi Destinasi Wisata.",
        longDesc:
          "Website eksplorasi destinasi wisata yang menampilkan paket perjalanan, galeri lokasi, dan informasi perjalanan secara visual dan terstruktur.",
        features: [
          "Halaman destinasi dengan layout grid.",
          "Section paket wisata dan detail perjalanan.",
          "Desain responsif untuk mobile & desktop.",
        ],
      },
      {
        id: "modal-3",
        img: "assets/cover3.jpg",
        modalImg: "assets/modal3.jpeg",
        tags: ["JS", "MySQL", "Bootstrap"],
        title: "Jasa Fotografi",
        shortDesc: "Landing Page Portofolio Estetik.",
        longDesc:
          "Landing page portofolio fotografi dengan fokus pada visual, tipografi modern, dan navigasi yang bersih.",
        features: [
          "Galeri foto dengan efek lightbox.",
          "Section harga & kontak.",
          "Desain estetik dan profesional.",
        ],
      },
      {
        id: "modal-4",
        img: "assets/cover4.jpg",
        modalImg: "assets/modal4.jpeg",
        tags: ["Flutter", "Supabase"],
        title: "Cloud Gallery App",
        shortDesc: "Aplikasi Mobile dengan Database Real-time.",
        longDesc:
          "Aplikasi seluler untuk manajemen aset digital dengan integrasi penyimpanan cloud. Memungkinkan pengguna mengunggah dan mengakses foto secara real-time.",
        features: [
          "Autentikasi Pengguna (Masuk/Daftar).",
          "Tampilan Galeri Grid yang responsif.",
          "Integrasi Supabase untuk backend tanpa server.",
        ],
      },
      {
        id: "modal-5",
        img: "assets/cover5.jpg",
        modalImg: "assets/modal5.jpeg",
        tags: ["PHP", "MySQL"],
        title: "Sistem Inventaris",
        shortDesc: "Sistem CRUD Lengkap untuk Sekolah.",
        longDesc:
          "Aplikasi web untuk digitalisasi pencatatan barang di sekolah (SMK). Menggantikan sistem manual dengan basis data terpusat.",
        features: [
          "CRUD Lengkap (Barang Masuk/Keluar).",
          "Manajemen Kategori dan Pemasok.",
          "Laporan stok real-time.",
        ],
      },
      {
        id: "modal-6",
        img: "assets/cover6.jpg",
        modalImg: "assets/modal6.jpeg",
        tags: ["Python", "Pandas", "Data Mining"],
        title: "Analisis Pola Pembelian",
        shortDesc: "Studi Kasus Market Basket Analysis.",
        longDesc:
          "Studi kasus Market Basket Analysis untuk menemukan asosiasi produk dalam data transaksi ritel.",
        features: [
          "Pembersihan Data (Cleaning) menggunakan Pandas.",
          "Algoritma FP-Growth untuk mencari pola asosiasi.",
          "Visualisasi hasil untuk strategi bundling produk.",
        ],
      },
    ],
    experience: {
      title: "Pengalaman Profesional",
      role: "Data Entry",
      company: "Menginput data ke sistem komputer"
      details: [
        {
          icon: "fa-coins",
          title: "Akurasi Keuangan",
          desc: "Mengelola pencatatan arus kas harian dan pelaporan keuangan bulanan dengan akurasi tinggi.",
        },
        {
          icon: "fa-file-invoice",
          title: "Manajemen Data",
          desc: "Menangani digitalisasi data dan pelacakan biaya operasional menggunakan Microsoft Excel.",
        },
        {
          icon: "fa-clipboard-check",
          title: "Soft Skills",
          desc: "Mengembangkan ketelitian terhadap detail, integritas dalam menangani data sensitif, dan kebiasaan dokumentasi yang disiplin.",
        },
      ],
    },
    credentials: {
      title: "Sertifikasi & Keahlian Teknis",
      certs: [
        {
          icon: "fa-brands fa-aws",
          title: "Dasar Cloud dan Gen AI",
          issuer: "Amazon Web Service (2025)",
        },
        {
          icon: "fa-solid fa-code",
          title: "Dasar Pemrograman JavaScript",
          issuer: "Dicoding (2025)",
        },
        {
          icon: "fa-solid fa-code",
          title: "CodingCamp Software Engineer",
          issuer: "RevoU (2026)",
        },
      ],
      techStack: [
        { icon: "fa-brands fa-php", name: "PHP" },
        { icon: "fa-brands fa-js", name: "JavaScript" },
        { icon: "fa-brands fa-python", name: "Python" },
        { icon: "fa-brands fa-android", name: "Dart/Flutter" },
        { icon: "fa-solid fa-database", name: "MySQL" },
        { icon: "fa-solid fa-bolt", name: "Supabase" },
        { icon: "fa-brands fa-git-alt", name: "Git" },
        { icon: "fa-solid fa-file", name: "Microsoft Office" },
      ],
    },
    contact: {
      title: "Siap Berkontribusi.",
      sub: "Terbuka untuk kesempatan Magang.<br>Tersedia untuk peran Web Development atau Data Analyst.",
      links: [
        {
          href: "mailto:musmanaljaelani@gmail.com",
          icon: "fa-solid fa-envelope",
          text: "Email Saya",
        },
        {
          href: "https://linkedin.com/in/usmanjaelani",
          icon: "fa-brands fa-linkedin",
          text: "LinkedIn",
        },
        {
          href: "https://wa.me/6285780862773",
          icon: "fa-brands fa-whatsapp",
          text: "WhatsApp",
        },
      ],
    },
  };

  // BAGIAN 2: RENDERING (LOGIKA PEMBUATAN HTML)

  // 1. Render Navbar
  const navContainer = document.getElementById("navbar-container");
  let navHTML = `
        <div class="logo"><a href="#hero">${portfolioData.navbar.logoText}</a></div>
        <div class="hamburger"><i class="fa-solid fa-bars"></i></div>
        <ul class="nav-links">
            ${portfolioData.navbar.links.map((link) => `<li><a href="${link.href}">${link.text}</a></li>`).join("")}
        </ul>
    `;
  navContainer.innerHTML = navHTML;

  // 2. Render Hero
  const heroContainer = document.getElementById("hero");
  heroContainer.innerHTML = `
        <div class="content-left">
            <h1 class="headline fade-in">${portfolioData.hero.headline}</h1>
            <h2 class="sub-headline fade-in delay-1">${portfolioData.hero.subHeadline}</h2>
            <p class="body-text fade-in delay-2">${portfolioData.hero.bodyText}</p>
            <div class="cta-group fade-in delay-3">
                ${portfolioData.hero.buttons.map((btn) => `<a href="${btn.href}" class="${btn.class}">${btn.text}</a>`).join("")}
            </div>
        </div>
        <div class="visual-right">
            <div class="image-container hero-img-container fade-in delay-2">
                <img src="${portfolioData.hero.image}" alt="Profile" class="hero-img">
                <div class="tech-overlay"></div>
            </div>
        </div>
    `;

  // 3. Render About
  const aboutContainer = document.getElementById("about");
  aboutContainer.innerHTML = `
        <h2 class="section-title fade-up">${portfolioData.about.title}</h2>
        <div class="about-grid">
            ${portfolioData.about.cards
              .map(
                (card, index) => `
                <div class="about-card fade-up delay-${index + 1}">
                    <i class="fa-solid ${card.icon} icon-large"></i>
                    <h3>${card.title}</h3>
                    <p>${card.desc}</p>
                </div>
            `,
              )
              .join("")}
        </div>
    `;

  // 4. Render Projects (Grid) & Modals
  const projectsContainer = document.getElementById("projects");
  const modalsContainer = document.getElementById("modals-container");

  // Generate Grid
  let gridHTML = `
        <h2 class="section-title fade-up">Proyek</h2>
        <p class="section-subtitle fade-up delay-1">Klik kartu untuk melihat detail studi kasus.</p>
        <div class="grid-container fade-up delay-2">
    `;

  portfolioData.projects.forEach((proj) => {
    // Gabung tags jadi string span
    const tagHTML =
      proj.tags.length > 0
        ? `<span class="tag">${proj.tags.join("/")}</span>`
        : "";

    gridHTML += `
            <div class="project-card" onclick="openModal('${proj.id}')">
                <div class="card-image"><img src="${proj.img}" alt="${proj.title}"></div>
                <div class="card-info">
                    ${tagHTML}
                    <h3>${proj.title}</h3>
                    <p>${proj.shortDesc}</p>
                </div>
            </div>
        `;
  });
  gridHTML += `</div>`;
  projectsContainer.innerHTML = gridHTML;

  // Generate Modals
  let modalsHTML = "";
  portfolioData.projects.forEach((proj) => {
    const modalTags = proj.tags.map((t) => `<span>${t}</span>`).join("");
    const featuresList = proj.features.map((f) => `<li>${f}</li>`).join("");

    modalsHTML += `
            <div id="${proj.id}" class="modal">
                <div class="modal-content">
                    <span class="close-btn" onclick="closeModal('${proj.id}')">&times;</span>
                    <div class="modal-visual">
                        <img src="${proj.modalImg}" class="detail-img">
                    </div>
                    <div class="modal-info-col">
                        <div class="modal-header">
                            <h2>${proj.title}</h2>
                            <div class="modal-tags">${modalTags}</div>
                        </div>
                        <div class="modal-body">
                            <h3>Tentang Proyek</h3>
                            <p>${proj.longDesc}</p>
                            <h3>Fitur & Teknis</h3>
                            <ul>${featuresList}</ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  modalsContainer.innerHTML = modalsHTML;

  // 5. Render Experience
  const expContainer = document.getElementById("experience");
  expContainer.innerHTML = `
        <h2 class="section-title fade-up">${portfolioData.experience.title}</h2>
        <div class="experience-card glass-card fade-up delay-1">
            <div class="exp-header">
                <h3>${portfolioData.experience.role}</h3>
                <span class="company">${portfolioData.experience.company}</span>
            </div>
            <div class="exp-body">
                ${portfolioData.experience.details
                  .map(
                    (item) => `
                    <div class="exp-item">
                        <i class="fa-solid ${item.icon}"></i>
                        <div>
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;

  // 6. Render Credentials (Certs & Tech)
  const credContainer = document.getElementById("credentials");
  credContainer.innerHTML = `
        <h2 class="section-title fade-up">${portfolioData.credentials.title}</h2>
        <div class="certs-container fade-up delay-1">
            ${portfolioData.credentials.certs
              .map(
                (cert) => `
                <div class="cert-item">
                    <i class="${cert.icon} icon-brand"></i>
                    <div>
                        <h4>${cert.title}</h4>
                        <p>${cert.issuer}</p>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
        <div class="tech-grid fade-up delay-2">
            ${portfolioData.credentials.techStack
              .map(
                (tech) => `
                <div class="tech-item"><i class="${tech.icon}"></i> ${tech.name}</div>
            `,
              )
              .join("")}
        </div>
    `;

  // 7. Render Contact & Footer
  const contactContainer = document.getElementById("contact");
  const currentYear = new Date().getFullYear();
  contactContainer.innerHTML = `
        <h2 class="section-title fade-up">${portfolioData.contact.title}</h2>
        <p class="contact-sub fade-up delay-1">${portfolioData.contact.sub}</p>
        <div class="contact-links fade-up delay-2">
            ${portfolioData.contact.links
              .map(
                (link) => `
                <a href="${link.href}" target="_blank" class="contact-btn">
                    <i class="${link.icon}"></i> ${link.text}
                </a>
            `,
              )
              .join("")}
        </div>
        <footer class="fade-up delay-3">
            <p>&copy; <span id="year">${currentYear}</span> Muhamad Usman Al Jaelani. Dibuat dengan Kode & Data.</p>
        </footer>
    `;

  // BAGIAN 3: FUNGSIONALITAS (INTERAKSI)

  // Hamburger Menu Logic
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = hamburger.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = hamburger.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });
  }

  // Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".fade-in, .fade-up");
  animatedElements.forEach((el) => observer.observe(el));

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// GLOBAL FUNCTIONS (Untuk onclick di HTML string)

window.openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
};

window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};






