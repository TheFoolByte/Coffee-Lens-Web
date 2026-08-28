const I18N = {
  id: {
    nav_features: "Fitur", nav_diseases: "Penyakit", nav_download: "Download", nav_about: "Tentang",
    eyebrow: "AI Pertanian · 100% Offline",
    hero_title: "Deteksi Penyakit Daun Kopi dalam Sekejap",
    hero_lead: "Coffee Lens mengidentifikasi 5 jenis penyakit utama daun kopi lewat kamera ponsel. Tanpa internet, tanpa biaya langganan — cukup bidik, hasil langsung muncul.",
    cta_download: "⬇ Download APK", cta_learn: "Pelajari Fitur",
    meta_offline: "Bekerja offline", meta_free: "Gratis", meta_min: "Android 8.0+", meta_size: "±25 MB",
    features_title: "Kenapa Coffee Lens?",
    features_lead: "Dibuat untuk petani kopi Aceh. Ringan, cepat, dan tetap jalan walau sinyal hilang.",
    f1_title: "Scan Instan", f1_desc: "Arahkan kamera ke daun, hasil klasifikasi muncul dalam <1 detik.",
    f2_title: "100% Offline", f2_desc: "Model AI tertanam di perangkat. Tidak butuh internet, tidak kirim data.",
    f3_title: "Ensiklopedia", f3_desc: "Pelajari gejala, penyebab, dan cara penanganan setiap penyakit.",
    f4_title: "Chat AI", f4_desc: "Tanya jawab perawatan kebun dengan asisten AI bawaan.",
    f5_title: "Toko Pertanian", f5_desc: "Temukan toko pertanian terdekat lewat peta.",
    f6_title: "Bilingual", f6_desc: "Antarmuka Indonesia & Inggris. Ganti kapan saja dari pengaturan.",
    diseases_title: "5 Penyakit yang Terdeteksi",
    diseases_lead: "Model TFLite terlatih untuk mengenali penyakit daun kopi paling umum di Indonesia.",
    version_pill: "Versi 1.0 · Android 8.0+",
    download_title: "Siap Download",
    download_lead: "Aplikasi sedang dalam tahap persiapan rilis. Daftarkan email untuk dapat notifikasi saat APK tersedia.",
    download_btn: "🔒 Segera Tersedia",
    status: "APK sedang disiapkan · Coming soon",
    about_title: "Tentang Coffee Lens",
    about_p1: "Coffee Lens adalah aplikasi Android offline yang dikembangkan untuk membantu petani kopi mengidentifikasi penyakit daun secara cepat dan akurat. Dikembangkan oleh tim mahasiswa Universitas Serambi Mekkah, Aceh.",
    about_p2: "Project Kampus · 2026 ·",
    footer_tag: "Deteksi penyakit daun kopi, di mana pun Anda berada."
  },
  en: {
    nav_features: "Features", nav_diseases: "Diseases", nav_download: "Download", nav_about: "About",
    eyebrow: "Agri AI · 100% Offline",
    hero_title: "Detect Coffee Leaf Diseases in a Snap",
    hero_lead: "Coffee Lens identifies 5 major coffee leaf diseases through your phone camera. No internet, no subscription — just point and shoot.",
    cta_download: "⬇ Download APK", cta_learn: "Learn More",
    meta_offline: "Works offline", meta_free: "Free", meta_min: "Android 8.0+", meta_size: "±25 MB",
    features_title: "Why Coffee Lens?",
    features_lead: "Built for Aceh coffee farmers. Lightweight, fast, and runs even when signal drops.",
    f1_title: "Instant Scan", f1_desc: "Point the camera at a leaf — classification in <1 second.",
    f2_title: "100% Offline", f2_desc: "AI model embedded on device. No internet, no data sent.",
    f3_title: "Encyclopedia", f3_desc: "Learn symptoms, causes, and treatment for every disease.",
    f4_title: "AI Chat", f4_desc: "Ask the built-in assistant about farm care anytime.",
    f5_title: "Agri Store", f5_desc: "Find the nearest farm supply store via map, no API key needed.",
    f6_title: "Bilingual", f6_desc: "Indonesian & English UI. Switch anytime in settings.",
    diseases_title: "5 Diseases Detected",
    diseases_lead: "TFLite model trained to recognize the most common coffee leaf diseases in Indonesia.",
    version_pill: "Version 1.0 · Android 8.0+",
    download_title: "Ready to Download",
    download_lead: "The app is in release preparation. Subscribe to get notified when the APK is available.",
    download_btn: "🔒 Coming Soon",
    status: "APK in preparation · Coming soon",
    about_title: "About Coffee Lens",
    about_p1: "Coffee Lens is an offline Android app developed to help coffee farmers quickly and accurately identify leaf diseases. Built by a student at Universitas Serambi Mekkah, Aceh.",
    about_p2: "Campus Project · 2026 ·",
    footer_tag: "Detect coffee leaf diseases, anywhere you are."
  }
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.id;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("coffee-lens-lang", lang); } catch (_) {}
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});
try {
  const saved = localStorage.getItem("coffee-lens-lang");
  if (saved && I18N[saved]) setLang(saved);
} catch (_) {}
