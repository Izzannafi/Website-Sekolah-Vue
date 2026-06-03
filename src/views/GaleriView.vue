```vue
<template>
  <main class="pt-28 pb-20">
    <!-- Hero -->
    <section class="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 text-center">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6"
      >
        📸 Dokumentasi Kegiatan
      </div>

      <h1 class="text-4xl md:text-6xl font-bold text-on-surface leading-tight mb-6">
        Galeri SDIT Al Ittihaad
      </h1>

      <p class="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
        Dokumentasi kegiatan akademik, keagamaan, olahraga, dan berbagai program pengembangan
        karakter siswa.
      </p>
    </section>

    <!-- Filter -->
    <section class="max-w-7xl mx-auto px-4 md:px-8 mb-12">
      <div class="flex flex-wrap justify-center gap-3">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
            activeCategory === cat
              ? 'bg-primary text-white shadow-lg'
              : 'bg-surface-container text-on-surface hover:bg-primary/10',
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Gallery -->
    <section class="max-w-7xl mx-auto px-4 md:px-8">
      <transition-group
        name="gallery"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="item in filteredItems"
          :key="item.title"
          class="group relative overflow-hidden rounded-3xl shadow-lg bg-surface"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          ></div>

          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span
              class="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs mb-3"
            >
              {{ item.category }}
            </span>

            <h3 class="text-xl font-semibold text-white">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </transition-group>
    </section>

    <!-- CTA -->
    <section class="max-w-6xl mx-auto px-4 md:px-8 mt-24">
      <div
        class="bg-primary rounded-[32px] p-10 md:p-16 text-center text-white overflow-hidden relative shadow-xl"
      >
        <div class="absolute w-72 h-72 bg-white/10 rounded-full -top-24 -left-24"></div>

        <div class="absolute w-96 h-96 bg-white/10 rounded-full -bottom-40 -right-40"></div>

        <div class="relative z-10">
          <h2 class="text-3xl text-white md:text-5xl font-bold mb-5">Bergabung Bersama Kami</h2>

          <p class="max-w-2xl mx-auto text-white/90 text-lg leading-relaxed mb-8">
            Wujudkan pendidikan terbaik untuk putra-putri Anda melalui lingkungan belajar Islami
            yang modern dan berprestasi.
          </p>

          <router-link
            to="/spmb"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-2xl font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Daftar Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

import imgMuridKelas from '@/assets/images/murid-kelas.webp'
import imgMurojaah from '@/assets/images/Murojaah.webp'
import imgMasjid from '@/assets/images/fasilitas/img-6.webp'
import imgBasket from '@/assets/images/Basket.webp'
import imgFutsal from '@/assets/images/futsal.webp'
import imgTaekwondo from '@/assets/images/taekowondo.webp'
import imgPanahan from '@/assets/images/Panahan.webp'
import imgPentasSeni from '@/assets/images/Pentas-seni-11.webp'
import imgSetuBabakan from '@/assets/images/Setu-babakan.webp'

const categories = ['Semua', 'Akademik', 'Keagamaan', 'Olahraga', 'Kegiatan Sekolah']

const activeCategory = ref('Semua')

const galleryItems = [
  {
    category: 'Akademik',
    title: 'Belajar Kelompok Interaktif',
    image: imgMuridKelas,
  },
  {
    category: 'Keagamaan',
    title: 'Ibadah Harian Berjamaah',
    image: imgMasjid,
  },
  {
    category: 'Keagamaan',
    title: 'Hafalan Al-Quran',
    image: imgMurojaah,
  },
  {
    category: 'Olahraga',
    title: 'Latihan Basket Sekolah',
    image: imgBasket,
  },
  {
    category: 'Olahraga',
    title: 'Pertandingan Futsal',
    image: imgFutsal,
  },
  {
    category: 'Olahraga',
    title: 'Ekstrakurikuler Taekwondo',
    image: imgTaekwondo,
  },
  {
    category: 'Olahraga',
    title: 'Panahan Tradisional',
    image: imgPanahan,
  },
  {
    category: 'Kegiatan Sekolah',
    title: 'Pentas Seni Tahunan',
    image: imgPentasSeni,
  },
  {
    category: 'Kegiatan Sekolah',
    title: 'Kunjungan Setu Babakan',
    image: imgSetuBabakan,
  },
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') {
    return galleryItems
  }

  return galleryItems.filter((item) => item.category === activeCategory.value)
})
</script>

<style scoped>
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.4s ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.gallery-move {
  transition: transform 0.4s ease;
}
</style>
```
