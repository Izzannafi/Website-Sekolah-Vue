<template>
  <main class="pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="mb-6 md:mb-8 flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
        <router-link class="hover:text-primary transition-colors" to="/"> Beranda </router-link>

        <span class="material-symbols-outlined text-[18px]"> chevron_right </span>

        <router-link class="hover:text-primary transition-colors" to="/berita">
          Berita
        </router-link>

        <span class="material-symbols-outlined text-[18px]"> chevron_right </span>

        <span class="text-primary font-semibold truncate max-w-[180px] sm:max-w-xs"> Detail </span>
      </nav>

      <!-- Main Layout -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10">
        <!-- Article -->
        <div class="xl:col-span-8">
          <article
            class="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 shadow-sm overflow-hidden"
          >
            <!-- Hero -->
            <div class="relative aspect-[16/9] overflow-hidden">
              <img
                alt="Siswa menggunakan smartboard di kelas"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="@/assets/images/beritadetail/img-1.jpg"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
              ></div>

              <div class="absolute bottom-0 left-0 w-full p-5 md:p-8">
                <span
                  class="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 uppercase tracking-wide"
                >
                  Akademik
                </span>

                <h1
                  class="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-4xl"
                >
                  Smart Board: Solusi Cerdas Untuk Pembelajaran Interaktif di Sekolah
                </h1>
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 sm:p-7 md:p-10 lg:p-12">
              <!-- Meta -->
              <div
                class="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-on-surface-variant border-b border-outline-variant/40 pb-6 mb-8"
              >
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[20px]"> person </span>
                  <span>Admin Sekolah</span>
                </div>

                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[20px]">
                    calendar_month
                  </span>
                  <span>15 Sep 2024</span>
                </div>

                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-[20px]"> schedule </span>
                  <span>5 menit baca</span>
                </div>
              </div>

              <!-- Article Body -->
              <div
                class="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-on-surface prose-p:text-on-surface-variant prose-strong:text-on-surface prose-li:text-on-surface-variant"
              >
                <p class="text-lg leading-relaxed">
                  SDIT Al Ittihaad terus berkomitmen menghadirkan inovasi dalam dunia pendidikan.
                  Salah satu langkah konkret yang baru saja diimplementasikan adalah penggunaan
                  Smart Board di setiap ruang kelas sebagai instrumen pembelajaran masa depan.
                </p>

                <p>
                  Teknologi bukan lagi sekadar alat bantu, melainkan katalisator utama dalam
                  menciptakan ekosistem belajar yang dinamis. Smart Board menawarkan fitur
                  interaktif yang memungkinkan guru dan siswa untuk berkolaborasi secara langsung di
                  atas layar sentuh beresolusi tinggi.
                </p>

                <h2>Mengapa Smart Board?</h2>

                <ul>
                  <li>
                    <strong>Visualisasi Konsep:</strong> Materi abstrak lebih mudah dipahami melalui
                    simulasi 3D dan video interaktif.
                  </li>

                  <li>
                    <strong>Keterlibatan Siswa:</strong> Siswa dapat berinteraksi langsung melalui
                    media digital di kelas.
                  </li>

                  <li>
                    <strong>Efisiensi Digital:</strong> Catatan pembelajaran dapat disimpan dan
                    dibagikan ke portal akademik siswa.
                  </li>
                </ul>

                <div
                  class="my-8 md:my-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
                >
                  <p class="text-base md:text-lg italic leading-relaxed text-on-surface">
                    "Implementasi Smart Board di SDIT Al Ittihaad merupakan langkah nyata dalam
                    mempersiapkan siswa menghadapi era digital dengan kemampuan literasi teknologi
                    sejak dini."
                  </p>
                </div>

                <p>
                  Dengan adanya teknologi ini, guru-guru di SDIT Al Ittihaad telah dilatih untuk
                  merancang kurikulum yang lebih variatif. Dari kuis real-time hingga perjalanan
                  virtual ke seluruh penjuru dunia melalui layar digital interaktif.
                </p>
              </div>

              <!-- Share -->
              <div
                class="mt-10 md:mt-12 pt-6 border-t border-outline-variant/40 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between"
              >
                <span class="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant">
                  Bagikan Artikel
                </span>

                <div class="flex flex-wrap gap-3">
                  <button
                    class="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                  >
                    <span class="material-symbols-outlined text-[18px]"> chat </span>
                    WhatsApp
                  </button>

                  <button
                    class="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                  >
                    <span class="material-symbols-outlined text-[18px]"> thumb_up </span>
                    Facebook
                  </button>

                  <button
                    class="inline-flex items-center gap-2 rounded-xl bg-on-surface px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                  >
                    <span class="material-symbols-outlined text-[18px]"> close </span>
                    X
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Sidebar -->
        <aside class="xl:col-span-4 space-y-6 lg:space-y-8">
          <!-- Popular -->
          <div
            class="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 shadow-sm p-5 md:p-7"
          >
            <div class="flex items-center gap-2 mb-6">
              <span
                class="material-symbols-outlined text-primary"
                style="font-variation-settings: 'FILL' 1"
              >
                trending_up
              </span>

              <h3 class="text-xl font-bold text-on-surface">Berita Populer</h3>
            </div>

            <div class="space-y-5">
              <a class="group flex items-start gap-4" href="#">
                <div class="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img
                    alt="Wisuda Tahfidz"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="@/assets/images/beritadetail/img-2.jpg"
                  />
                </div>

                <div class="min-w-0">
                  <h4
                    class="text-sm md:text-base font-semibold leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-2"
                  >
                    Wisuda Tahfidz Angkatan VII: Mencetak Generasi Qurani
                  </h4>

                  <span class="mt-2 block text-xs text-on-surface-variant"> 10 Sep 2024 </span>
                </div>
              </a>

              <a class="group flex items-start gap-4" href="#">
                <div class="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img
                    alt="Pendaftaran Siswa Baru"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="@/assets/images/beritadetail/img-3.jpg"
                  />
                </div>

                <div class="min-w-0">
                  <h4
                    class="text-sm md:text-base font-semibold leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-2"
                  >
                    Pendaftaran Siswa Baru TA 2025/2026 Resmi Dibuka
                  </h4>

                  <span class="mt-2 block text-xs text-on-surface-variant"> 05 Sep 2024 </span>
                </div>
              </a>

              <a class="group flex items-start gap-4" href="#">
                <div class="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                  <img
                    alt="Field Trip"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="@/assets/images/beritadetail/img-4.jpg"
                  />
                </div>

                <div class="min-w-0">
                  <h4
                    class="text-sm md:text-base font-semibold leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-2"
                  >
                    Field Trip Virtual: Mengenal Ekosistem Hutan Hujan
                  </h4>

                  <span class="mt-2 block text-xs text-on-surface-variant"> 01 Sep 2024 </span>
                </div>
              </a>
            </div>
          </div>

          <!-- Category -->
          <div
            class="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 shadow-sm p-5 md:p-7"
          >
            <h3 class="text-xl font-bold text-on-surface mb-5">Kategori</h3>

            <div class="flex flex-wrap gap-3">
              <a
                class="rounded-xl bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
                href="#"
              >
                Akademik (12)
              </a>

              <a
                class="rounded-xl bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
                href="#"
              >
                Ekstrakurikuler (8)
              </a>

              <a
                class="rounded-xl bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
                href="#"
              >
                Kesiswaan (15)
              </a>

              <a
                class="rounded-xl bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
                href="#"
              >
                Pengumuman (5)
              </a>

              <a
                class="rounded-xl bg-surface-container px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
                href="#"
              >
                Religi (20)
              </a>
            </div>
          </div>

          <!-- Newsletter -->
          <div
            class="relative overflow-hidden rounded-3xl bg-primary p-6 md:p-8 text-on-primary shadow-lg"
          >
            <div
              class="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl"
            ></div>

            <div class="relative z-10">
              <span
                class="material-symbols-outlined text-4xl mb-4"
                style="font-variation-settings: 'FILL' 1"
              >
                mail
              </span>

              <h3 class="text-white font-bold mb-3">Berlangganan Newsletter</h3>

              <p class="text-sm leading-relaxed opacity-90 mb-6">
                Dapatkan update berita dan artikel terbaru langsung ke email Anda.
              </p>

              <form class="space-y-3" @submit.prevent>
                <input
                  class="w-full rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Masukkan email Anda"
                  type="email"
                />

                <button
                  class="w-full rounded-2xl bg-white py-3 font-semibold text-primary transition hover:bg-on-primary-container hover:text-white"
                  type="submit"
                >
                  Berlangganan
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>

      <!-- Related -->
      <section class="mt-16 md:mt-24">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-on-surface">Artikel Terkait</h2>

          <a
            class="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
            href="#"
          >
            Lihat Semua

            <span class="material-symbols-outlined text-[18px]"> arrow_right_alt </span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <!-- Card -->
          <div
            class="group overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm"
          >
            <div class="aspect-[16/10] overflow-hidden">
              <img
                alt="Digital Literacy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="@/assets/images/beritadetail/img-5.jpg"
              />
            </div>

            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">
                Akademik
              </span>

              <h3
                class="mt-3 text-lg font-bold leading-snug text-on-surface group-hover:text-primary transition-colors"
              >
                Membangun Literasi Digital Sejak Usia Dini
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Pentingnya pengenalan teknologi secara bijak bagi siswa sekolah dasar di era
                informasi.
              </p>

              <div class="mt-5 text-xs text-on-surface-variant">12 Sep 2024</div>
            </div>
          </div>

          <!-- Card -->
          <div
            class="group overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm"
          >
            <div class="aspect-[16/10] overflow-hidden">
              <img
                alt="Student Activities"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="@/assets/images/beritadetail/img-6.jpg"
              />
            </div>

            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-widest text-primary">
                Kesiswaan
              </span>

              <h3
                class="mt-3 text-lg font-bold leading-snug text-on-surface group-hover:text-primary transition-colors"
              >
                Metode Pembelajaran Project Based Learning
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Siswa belajar berkolaborasi dalam proyek kreatif berbasis eksperimen dan observasi.
              </p>

              <div class="mt-5 text-xs text-on-surface-variant">08 Sep 2024</div>
            </div>
          </div>

          <!-- Card -->
          <div
            class="group overflow-hidden rounded-3xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm"
          >
            <div class="aspect-[16/10] overflow-hidden">
              <img
                alt="Teacher Training"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="@/assets/images/beritadetail/img-7.jpg"
              />
            </div>

            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-widest text-primary"> Berita </span>

              <h3
                class="mt-3 text-lg font-bold leading-snug text-on-surface group-hover:text-primary transition-colors"
              >
                Peningkatan Kompetensi Guru di Era Digital
              </h3>

              <p class="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Workshop intensif bagi tenaga pengajar dalam menguasai teknologi pendidikan modern.
              </p>

              <div class="mt-5 text-xs text-on-surface-variant">02 Sep 2024</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.prose :where(h2):not(:where([class~='not-prose'] *)) {
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose :where(p):not(:where([class~='not-prose'] *)) {
  line-height: 1.9;
}

.prose :where(li):not(:where([class~='not-prose'] *)) {
  margin: 0.5rem 0;
}
</style>
