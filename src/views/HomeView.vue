<template>
  <main>
    <!-- Hero Section -->
    <section
      class="pt-32 pb-16 md:pt-40 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          alt="SDIT Al Ittihaad Classroom"
          class="w-full h-full object-cover"
          src="@/assets/images/Lapangan.webp"
        />
        <div class="absolute inset-0 hero-gradient"></div>
      </div>
      <div
        class="relative z-10 h-full flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div class="max-w-3xl text-white">
          <span
            class="inline-block py-1 px-4 bg-primary-container/20 backdrop-blur-md rounded-full border border-white/20 text-white font-label-md text-label-md mb-6"
          >
            Penerimaan Peserta Didik Baru (PPDB) 2026/2027
          </span>
          <h1
            class="font-headline-xl text-headline-xl md:text-[64px] leading-tight mb-6 text-white"
          >
            Build Smart Islamic Generation
          </h1>
          <p class="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl">
            SDIT Al Ittihaad Tebet berpengalaman lebih dari 18 tahun dalam membentuk karakter
            Qur'ani dan kecerdasan intelektual melalui pendidikan dasar yang berkualitas dan
            berintegritas.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              to="/spmb"
              class="inline-flex justify-center items-center bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-container transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Daftar PPDB Online
            </router-link>
            <router-link
              to="/akademik"
              class="inline-flex justify-center items-center bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
            >
              Lihat Kurikulum
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 md:py-24 bg-surface-container-low" ref="statsSection">
      <div class="max-w-5xl mx-auto px-6 md:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div
            class="text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10"
          >
            <div class="text-primary font-bold text-4xl mb-2">{{ countSiswa }}+</div>
            <div
              class="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"
            >
              Siswa Aktif
            </div>
          </div>
          <div
            class="text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10"
          >
            <div class="text-primary font-bold text-4xl mb-2">{{ countGuru }}+</div>
            <div
              class="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"
            >
              Guru Berpengalaman
            </div>
          </div>
          <div
            class="text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10"
          >
            <div class="text-primary font-bold text-4xl mb-2">{{ countAlumni }}+</div>
            <div
              class="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"
            >
              Lulusan Tangguh
            </div>
          </div>
          <div
            class="text-center p-6 bg-white rounded-2xl shadow-sm border border-outline-variant/10"
          >
            <div class="text-primary font-bold text-4xl mb-2">{{ countTahun }}+</div>
            <div
              class="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"
            >
              Tahun Mengabdi
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News & Events Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-5xl mx-auto px-6 md:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div class="max-w-xl">
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">
              Berita &amp; Kegiatan Terkini
            </h2>
            <p class="text-on-surface-variant text-body-lg">
              Informasi terbaru seputar kegiatan sekolah, prestasi, dan inovasi pendidikan di SDIT
              Al Ittihaad.
            </p>
          </div>
          <router-link
            class="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-4 mt-6 md:mt-0"
            to="/berita"
          >
            Selengkapnya <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="(berita, index) in latestNews"
            :key="berita.id"
            class="group rounded-2xl overflow-hidden shadow-md border border-outline-variant/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white flex flex-col"
          >
            <div class="relative h-60 overflow-hidden flex-shrink-0">
              <img
                :alt="berita.judul"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                :src="berita.thumbnail || fallbackImages[index % fallbackImages.length]"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-on-primary rounded-full text-caption font-bold uppercase shadow-sm"
                  >{{ berita.kategori }}</span
                >
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center gap-2 text-on-surface-variant font-caption mb-3">
                <span class="material-symbols-outlined text-[16px]">calendar_today</span>
                {{ formatDate(berita.tanggal) }}
              </div>
              <h3
                class="font-headline-md text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2"
              >
                {{ berita.judul }}
              </h3>
              <p class="text-on-surface-variant text-body-md line-clamp-3 mb-6">
                {{ berita.excerpt }}
              </p>
              <div class="mt-auto pt-4 border-t border-outline-variant/10">
                <router-link
                  :to="{ name: 'berita-detail', params: { id: berita.id } }"
                  class="text-primary font-bold flex items-center gap-1 group-hover:gap-3 transition-all duration-300"
                >
                  Baca Selengkapnya
                  <span class="material-symbols-outlined text-sm">chevron_right</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section class="py-24 bg-surface-container">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">Fasilitas Sekolah</h2>
          <p class="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            Sarana pendukung yang lengkap dan nyaman untuk menunjang proses pembelajaran yang
            optimal bagi seluruh siswa.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            v-for="fasilitas in fasilitasData"
            :key="fasilitas.title"
            class="bg-white p-6 rounded-2xl text-center border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
          >
            <span class="material-symbols-outlined text-primary text-4xl mb-4">{{
              fasilitas.icon
            }}</span>
            <h5 class="font-bold">{{ fasilitas.title }}</h5>
            <p class="text-caption text-on-surface-variant mt-2">{{ fasilitas.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { statistik } from '../data/statistik'
import { beritaList } from '../data/berita'
import imgMurojaah from '@/assets/images/Murojaah.webp'
import imgPanahan from '@/assets/images/Panahan.webp'
import imgGuru from '@/assets/images/Guru.webp'

// Fallback images for news
const fallbackImages = [imgMurojaah, imgPanahan, imgGuru]

// Data integrations
const latestNews = beritaList.slice(0, 3)

const fasilitasData = [
  { icon: 'ac_unit', title: 'Ruang Kelas AC', description: 'Dilengkapi proyektor & loker siswa' },
  { icon: 'mosque', title: 'Masjid', description: "Pusat ibadah dan kegiatan Qur'ani" },
  { icon: 'computer', title: 'Lab Komputer', description: 'Pembelajaran IT & Coding' },
  { icon: 'science', title: 'Lab IPA', description: 'Ruang eksperimen & praktik sains' },
  { icon: 'library_books', title: 'Perpustakaan', description: 'Koleksi buku lengkap & nyaman' },
  { icon: 'sports_soccer', title: 'Lapangan Olahraga', description: 'Area multiguna luar ruangan' },
  { icon: 'medical_services', title: 'UKS', description: 'Layanan kesehatan dasar sekolah' },
  { icon: 'restaurant', title: 'Kantin', description: 'Penyedia makanan sehat & bersih' },
]

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

// Stats counter logic
const statsSection = ref(null)
const countSiswa = ref(0)
const countGuru = ref(0)
const countAlumni = ref(0)
const countTahun = ref(0)

let observer = null

const animateValue = (refVar, start, end, duration) => {
  let current = start
  const range = end - start
  if (range === 0) {
    refVar.value = end
    return
  }
  const increment = end > start ? 1 : -1
  // Calculate a step time to ensure smooth animation (~60fps)
  const steps = Math.min(range, 60 * (duration / 1000))
  const stepTime = Math.max(16, Math.floor(duration / steps))
  const stepValue = Math.max(1, Math.floor(range / steps))

  const timer = setInterval(() => {
    current += stepValue * increment
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      refVar.value = end
      clearInterval(timer)
    } else {
      refVar.value = current
    }
  }, stepTime)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(countSiswa, 0, statistik.jumlahSiswa, 1500)
          animateValue(countGuru, 0, statistik.jumlahGuru, 1500)
          animateValue(countAlumni, 0, statistik.jumlahAlumni, 1500)
          const tahunMengabdi = new Date().getFullYear() - statistik.tahunBerdiri
          animateValue(countTahun, 0, tahunMengabdi, 1500)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})

onUnmounted(() => {
  if (observer && statsSection.value) {
    observer.unobserve(statsSection.value)
  }
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.hero-gradient {
  background: linear-gradient(
    to right,
    rgba(26, 28, 28, 0.8) 0%,
    rgba(26, 28, 28, 0.4) 40%,
    transparent 80%
  );
}
</style>
