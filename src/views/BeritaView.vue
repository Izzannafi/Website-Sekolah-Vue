<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 md:pt-40 md:pb-14">
    <!-- Breadcrumb -->
    <nav class="mb-8 flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
      <router-link to="/" class="hover:text-primary transition-colors"> Beranda </router-link>

      <span class="material-symbols-outlined text-[18px]"> chevron_right </span>

      <span class="font-medium text-primary truncate"> Berita & Artikel </span>
    </nav>

    <!-- Hero Featured -->
    <section class="mb-12">
      <div class="overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-sm">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Image -->
          <div class="relative h-[260px] sm:h-[320px] lg:h-full overflow-hidden">
            <img
              alt="Featured Article"
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              src="@/assets/images/Lapangan.webp"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent lg:hidden"
            ></div>
          </div>

          <!-- Content -->
          <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span
              class="mb-5 inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              Featured News
            </span>

            <h1
              class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-on-surface mb-5"
            >
              Smart Board: Solusi Cerdas Untuk Pembelajaran Interaktif di Sekolah
            </h1>

            <p class="text-on-surface-variant text-base leading-relaxed mb-6 line-clamp-3">
              Implementasi teknologi Smart Board di SDIT Al Ittihaad membawa pengalaman belajar ke
              tingkat baru. Memungkinkan interaksi dua arah antara guru dan murid secara digital
              yang lebih dinamis.
            </p>

            <div class="flex flex-wrap items-center gap-5 text-sm text-on-surface-variant mb-8">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]"> calendar_today </span>
                24 Nov 2023
              </div>

              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]"> person </span>
                Admin
              </div>
            </div>

            <router-link
              :to="{ name: 'berita-detail', params: { id: articles[0]?.id } }"
              class="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              Baca Selengkapnya

              <span class="material-symbols-outlined text-[20px]"> arrow_forward </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Category -->
    <section class="mb-10">
      <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all"
          :class="
            activeCategory === category
              ? 'bg-primary text-on-primary shadow-md'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-primary/10 hover:text-primary'
          "
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Content -->
    <section class="grid grid-cols-1 xl:grid-cols-12 gap-8">
      <!-- Article List -->
      <div class="xl:col-span-8">
        <div class="grid sm:grid-cols-2 gap-6">
          <article
            v-for="article in articles"
            :key="article.title"
            class="group overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <!-- Thumbnail -->
            <div class="relative overflow-hidden h-52">
              <img
                :src="article.image"
                :alt="article.title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <span
                class="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-sm"
              >
                {{ article.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3
                class="mb-3 text-lg font-semibold leading-snug text-on-surface line-clamp-2 group-hover:text-primary transition-colors"
              >
                {{ article.title }}
              </h3>

              <div class="mb-4 flex items-center gap-2 text-sm text-on-surface-variant">
                <span class="material-symbols-outlined text-[18px]"> calendar_today </span>

                {{ article.date }}
              </div>

              <p class="mb-5 text-sm leading-relaxed text-on-surface-variant line-clamp-2">
                {{ article.description }}
              </p>

              <router-link
                :to="{ name: 'berita-detail', params: { id: article.id } }"
                class="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
              >
                Baca Artikel

                <span class="material-symbols-outlined text-[18px]"> chevron_right </span>
              </router-link>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-outline hover:bg-surface-container-low transition-colors"
          >
            <span class="material-symbols-outlined"> chevron_left </span>
          </button>

          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-on-primary font-medium shadow-sm"
          >
            1
          </button>

          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors"
          >
            2
          </button>

          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-surface-container-low transition-colors"
          >
            3
          </button>

          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-outline hover:bg-surface-container-low transition-colors"
          >
            <span class="material-symbols-outlined"> chevron_right </span>
          </button>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="xl:col-span-4 space-y-6">
        <!-- Popular -->
        <div
          class="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm"
        >
          <h2 class="mb-6 flex items-center gap-2 text-lg font-semibold text-on-surface">
            <span
              class="material-symbols-outlined text-primary"
              style="font-variation-settings: 'FILL' 1"
            >
              trending_up
            </span>

            Berita Populer
          </h2>

          <div class="space-y-5">
            <div
              v-for="popular in popularNews"
              :key="popular.title"
              class="border-b border-outline-variant/20 pb-4 last:border-none last:pb-0"
            >
              <a href="#" class="group block">
                <p
                  class="mb-2 line-clamp-2 text-sm font-medium text-on-surface transition-colors group-hover:text-primary"
                >
                  {{ popular.title }}
                </p>

                <span class="text-xs text-on-surface-variant">
                  {{ popular.views }}
                </span>
              </a>
            </div>
          </div>
        </div>

        <!-- Categories -->
        <div
          class="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm"
        >
          <h2 class="mb-6 flex items-center gap-2 text-lg font-semibold text-on-surface">
            <span class="material-symbols-outlined text-primary"> category </span>

            Kategori
          </h2>

          <div class="space-y-3">
            <a
              v-for="item in sidebarCategories"
              :key="item.name"
              href="#"
              class="flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-white"
            >
              <span class="text-sm font-medium text-on-surface">
                {{ item.name }}
              </span>

              <span class="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {{ item.total }}
              </span>
            </a>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="relative overflow-hidden rounded-2xl bg-primary p-6 text-on-primary shadow-lg">
          <div class="relative z-10">
            <h3 class="mb-3 text-white font-semibold">Dapatkan Berita Terbaru</h3>

            <p class="mb-6 text-sm leading-relaxed text-white/90">
              Langganan newsletter untuk update kegiatan sekolah langsung ke email Anda.
            </p>

            <form class="space-y-3" @submit.prevent>
              <input
                type="email"
                placeholder="Alamat Email"
                class="w-full rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur-sm focus:border-white/40"
              />

              <button
                class="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-primary transition-all hover:opacity-90"
              >
                Berlangganan
              </button>
            </form>
          </div>

          <div class="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-white/10"></div>
        </div>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { beritaList } from '../data/berita'

const categories = ['Semua', 'Akademik', 'Kegiatan', 'Prestasi', 'Religi']
const activeCategory = ref('Semua')

const articles = beritaList.map((b) => ({
  id: b.id,
  title: b.judul,
  date: new Date(b.tanggal).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
  category: b.kategori,
  image: b.thumbnail,
  description: b.excerpt,
}))

const popularNews = [
  { title: 'PPDB 2024: Pendaftaran Siswa Baru Telah Dibuka!', views: '124 Kali Dilihat' },
  { title: 'Juara 1 Lomba Tahfidz Tingkat Kota Jakarta Selatan', views: '98 Kali Dilihat' },
  { title: 'Tips Mendampingi Anak Belajar di Rumah Secara Efektif', views: '76 Kali Dilihat' },
]

const sidebarCategories = [
  { name: 'Akademik', total: 12 },
  { name: 'Kegiatan', total: 25 },
  { name: 'Prestasi', total: 8 },
  { name: 'Religi', total: 15 },
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
