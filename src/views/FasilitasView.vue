<template>
  <main class="overflow-x-hidden">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-[420px] sm:min-h-[520px] md:min-h-[640px] flex items-center"
    >
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <img
          alt="Lapangan SDIT Al Ittihaad"
          class="w-full h-full object-cover"
          data-alt="A wide angle panoramic view of a modern school campus with elegant Islamic school atmosphere and premium academic environment."
          src="@/assets/images/fasilitas/img-1.webp"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/85 to-background/40"
        ></div>

        <!-- Additional Soft Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
        ></div>
      </div>

      <!-- Content -->
      <div
        class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-start pt-10 md:pt-0"
      >
        <div class="max-w-3xl py-20 md:py-28">
          <!-- Badge -->
          <span
            class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary-container/90 text-on-secondary-container text-label-md font-semibold mb-6 backdrop-blur-md border border-white/10"
          >
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            KEUNGGULAN FASILITAS
          </span>

          <!-- Heading -->
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight text-on-surface mb-6"
          >
            Fasilitas Sekolah yang Mendukung Tumbuh Kembang
          </h1>

          <!-- Description -->
          <p class="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mb-10">
            Lingkungan belajar yang inspiratif dengan sarana modern untuk memfasilitasi perkembangan
            kognitif, spiritual, dan fisik siswa secara optimal di era digital.
          </p>

          <!-- CTA -->
          <div class="flex flex-wrap items-center gap-4">
            <a
              class="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 md:px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              href="#eksplorasi"
            >
              Eksplorasi Fasilitas

              <span class="material-symbols-outlined text-[20px]"> arrow_downward </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Bento Grid -->
    <section id="eksplorasi" class="py-14 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-20">
        <span
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
        >
          <span class="material-symbols-outlined text-base">apartment</span>
          Fasilitas Premium
        </span>

        <h2 class="text-headline-lg font-headline-lg text-primary mb-4">
          Sarana & Prasarana Unggulan
        </h2>

        <p class="max-w-2xl mx-auto text-body-lg text-on-surface-variant leading-relaxed">
          Lingkungan belajar modern dan nyaman untuk mendukung perkembangan akademik, spiritual,
          kesehatan, dan kreativitas siswa.
        </p>

        <div
          class="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mt-6"
        ></div>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[minmax(260px,auto)]">
        <!-- Featured: Ruang Kelas -->
        <div
          class="md:col-span-7 lg:row-span-2 group bg-surface-container-lowest relative overflow-hidden rounded-3xl shadow-lg border border-outline-variant/10 min-h-[420px] md:min-h-[520px]"
        >
          <img
            src="@/assets/images/fasilitas/img-2.jpg"
            alt="Ruang Kelas Ber-AC"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-10 bg-white">
            <div
              class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 backdrop-blur-md mb-5"
            >
              <span class="material-symbols-outlined text-3xl">ac_unit</span>
            </div>

            <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ruang Kelas Ber-AC</h3>

            <p class="text-on-surface-varian leading-relaxed max-w-2xl">
              Seluruh kelas dilengkapi pendingin ruangan, proyektor, dan tata ruang ergonomis untuk
              menciptakan suasana belajar yang nyaman dan fokus.
            </p>
          </div>
        </div>

        <!-- Perpustakaan -->
        <div
          class="md:col-span-5 group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 hover:shadow-xl transition-all duration-500"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <img
              src="@/assets/images/fasilitas/img-3.webp"
              alt="Perpustakaan"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-xl">
                auto_stories
              </span>
              <h3 class="text-xl font-bold">Perpustakaan</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Koleksi buku lengkap dan area baca yang nyaman untuk menumbuhkan budaya literasi
              siswa.
            </p>
          </div>
        </div>

        <!-- Laboratorium -->
        <div
          class="md:col-span-5 group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 hover:shadow-xl transition-all duration-500"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <img
              src="@/assets/images/fasilitas/img-4.jpeg"
              alt="Laboratorium"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-xl">
                science
              </span>
              <h3 class="text-xl font-bold">Lab IPA & Komputer</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Fasilitas praktik sains dan teknologi dengan perangkat modern untuk mengembangkan
              keterampilan digital.
            </p>
          </div>
        </div>

        <!-- Lapangan -->
        <div
          class="md:col-span-4 group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 hover:shadow-xl transition-all duration-500"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <img
              src="@/assets/images/Lapangan.webp"
              alt="Lapangan Multiguna"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-xl">
                sports_basketball
              </span>
              <h3 class="text-xl font-bold">Lapangan Multiguna</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Area olahraga untuk basket, futsal, badminton, dan kegiatan ekstrakurikuler.
            </p>
          </div>
        </div>

        <!-- Masjid -->
        <div
          class="md:col-span-4 group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 hover:shadow-xl transition-all duration-500"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <img
              src="@/assets/images/fasilitas/img-6.webp"
              alt="Masjid Raya Al-Ittihaad"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-xl">
                mosque
              </span>
              <h3 class="text-xl font-bold">Masjid Raya Al-Ittihaad</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Pusat ibadah dan pembinaan karakter Islami bagi seluruh siswa.
            </p>
          </div>
        </div>

        <!-- UKS -->
        <div
          class="md:col-span-4 group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 hover:shadow-xl transition-all duration-500"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <img
              src="@/assets/images/fasilitas/img-7.webp"
              alt="UKS"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div class="p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-xl">
                medical_services
              </span>
              <h3 class="text-xl font-bold">UKS</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Layanan kesehatan sekolah untuk pertolongan pertama dan pemantauan kesehatan siswa.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Environment Section -->
    <section class="py-24 bg-surface-container-low overflow-hidden">
      <div class="max-w-[1280px] mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="grid grid-cols-2 gap-4 md:gap-5">
              <!-- Image 1 -->
              <div class="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="@/assets/images/Setu-babakan.webp"
                  alt="Belajar Luar Kelas"
                  class="w-full h-52 md:h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <!-- Image 2 -->
              <div class="overflow-hidden rounded-3xl shadow-lg md:translate-y-8">
                <img
                  src="@/assets/images/perpustakaan_keliling2.webp"
                  alt="Lingkungan Hijau"
                  class="w-full h-52 md:h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <!-- Image 3 -->
              <div class="overflow-hidden rounded-3xl shadow-lg md:-translate-y-8">
                <img
                  src="@/assets/images/Lapangan.webp"
                  alt="Gedung Sekolah"
                  class="w-full h-52 md:h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <!-- Image 4 -->
              <div class="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="@/assets/images/Pentas-seni-2-11.webp"
                  alt="Pentas Seni"
                  class="w-full h-52 md:h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            <div
              class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
            ></div>
          </div>
          <div>
            <h2 class="text-headline-lg font-headline-lg text-on-surface mb-6">
              Lingkungan Belajar yang Menyenangkan
            </h2>
            <p class="text-body-lg font-body-lg text-on-surface-variant mb-6">
              Di SDIT Al Ittihaad, kami percaya bahwa lingkungan fisik memiliki peran krusial dalam
              proses edukasi. Kampus kami didesain sebagai ekosistem yang harmonis antara teknologi
              modern dan alam.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 class="font-bold font-headline-md text-on-surface">
                    Area Hijau &amp; Terbuka
                  </h4>
                  <p class="text-body-md font-body-md text-on-surface-variant">
                    Ruang terbuka hijau yang luas untuk sirkulasi udara alami dan area interaksi
                    sosial.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 class="font-bold font-headline-md text-on-surface">Keamanan 24 Jam</h4>
                  <p class="text-body-md font-body-md text-on-surface-variant">
                    Sistem keamanan terpadu dengan CCTV dan petugas keamanan profesional untuk
                    ketenangan orang tua.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <h4 class="font-bold font-headline-md text-on-surface">Aksesibilitas Digital</h4>
                  <p class="text-body-md font-body-md text-on-surface-variant">
                    Jaringan internet cepat yang menjangkau seluruh area pembelajaran untuk
                    menunjang riset mandiri.
                  </p>
                </div>
              </li>
            </ul>
            <router-link
              to="/galeri"
              class="text-primary font-bold font-label-md flex items-center gap-2 hover:gap-4 transition-all"
            >
              Lihat Galeri Sekolah Selengkapnya
              <span class="material-symbols-outlined">trending_flat</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-primary text-on-primary">
      <div class="max-w-[800px] mx-auto text-center">
        <h2 class="text-headline-lg text-on-primary font-headline-lg mb-6">
          Ingin Melihat Langsung Fasilitas Kami?
        </h2>
        <p class="text-body-lg font-body-lg opacity-90 mb-10">
          Kami mengundang Bapak/Ibu untuk melakukan School Tour dan merasakan langsung atmosfer
          belajar yang luar biasa di SDIT Al Ittihaad.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-surface-container-lowest text-primary px-10 py-4 rounded-lg font-bold font-label-md hover:shadow-xl transition-shadow"
          >
            Jadwalkan Kunjungan
          </button>
          <router-link
            to="/kontak"
            class="border border-on-primary text-on-primary px-10 py-4 rounded-lg font-bold font-label-md hover:bg-on-primary/10 transition-colors"
          >
            Hubungi Kami
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Micro-interaction for facility cards
  document.querySelectorAll('.bento-item').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.material-symbols-outlined')
      if (icon) {
        icon.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        icon.style.transform = 'scale(1.2) rotate(5deg)'
      }
    })
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.material-symbols-outlined')
      if (icon) icon.style.transform = 'scale(1) rotate(0deg)'
    })
  })
})
</script>

<style scoped>
.text-headline-xl {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.text-headline-lg {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
}
.text-headline-md {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
}
.text-body-lg {
  font-size: 1.125rem;
  line-height: 1.6;
}
.text-body-md {
  font-size: 1rem;
  line-height: 1.6;
}
.text-label-md {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.bento-item {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.bento-item:hover {
  transform: translateY(-4px);
  box-shadow: 0px 10px 30px rgba(4, 14, 22, 0.05);
}
</style>
