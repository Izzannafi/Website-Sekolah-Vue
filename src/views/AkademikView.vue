<template>
  <main class="max-w-5xl mx-auto px-6 md:px-8 page-akademik">
    <!-- Hero Section - Academic Focus -->
    <section
      class="pt-32 pb-16 md:pt-40 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-gutter items-center"
    >
      <div class="space-y-6 order-2 lg:order-1">
        <span
          class="inline-block px-4 py-1.5 bg-secondary-container/80 backdrop-blur-sm text-on-secondary-container rounded-full text-label-md font-label-md shadow-sm"
          >Excellence in Learning</span
        >
        <h1
          class="text-headline-lg-mobile md:text-headline-xl font-headline-xl text-on-surface leading-tight"
        >
          Kurikulum Berbasis Karakter &amp; Prestasi
        </h1>
        <p class="text-body-md md:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
          Mengintegrasikan Kurikulum Nasional dengan Kurikulum Sekolah Terpadu untuk membentuk
          generasi yang unggul dalam prestasi berdasarkan nilai-nilai Al-Qur'an.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            class="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 md:px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            href="#kurikulum"
          >
            Lihat Kurikulum
          </a>
          <a
            href="https://wa.me/6281114020004"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-outline-variant text-on-surface-variant font-bold bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_0_1px_rgba(0,107,95,0.3),0_0_24px_rgba(0,107,95,0.25)] hover:ring-4 hover:ring-primary/10 hover:-translate-y-1"
          >
            <span class="material-symbols-outlined">chat</span>
            Tanya Akademik
          </a>
        </div>
      </div>
      <div class="relative group order-1 lg:order-2">
        <div
          class="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-all duration-500"
        ></div>
        <img
          alt="Modern Classroom"
          class="relative rounded-3xl w-full h-[450px] object-cover shadow-xl"
          src="@/assets/images/kelas-1-300x200.webp"
        />
      </div>
    </section>

    <!-- Bento Grid: Featured Curriculum -->
    <section id="kurikulum" class="py-16 md:py-24">
      <div class="text-center mb-16">
        <h2 class="text-headline-lg font-headline-lg text-on-surface mb-4">Pilar Kurikulum Kami</h2>
        <p class="text-body-md text-on-surface-variant">
          Metodologi pendidikan yang seimbang antara ilmu pengetahuan dan nilai spiritual.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Large Card: Kurikulum Nasional -->
        <div
          class="md:col-span-8 glass-card rounded-2xl p-10 flex flex-col justify-between hover:translate-y-[-4px] transition-all group overflow-hidden relative"
        >
          <div class="relative z-10">
            <div
              class="w-14 h-14 bg-primary-fixed-dim rounded-xl flex items-center justify-center text-on-primary-fixed-variant mb-6"
            >
              <span class="material-symbols-outlined text-4xl" data-icon="menu_book"
                >menu_book</span
              >
            </div>
            <h3 class="text-headline-md font-headline-md mb-4">Kurikulum Nasional</h3>
            <p class="text-body-md text-on-surface-variant mb-6 max-w-md">
              Standar pendidikan nasional yang komprehensif untuk penguasaan akademik dasar dan
              pengembangan kompetensi siswa.
            </p>
            <div class="grid grid-cols-2 gap-y-3 list-none">
              <li class="flex items-center gap-3 text-on-surface text-label-md font-label-md">
                <span
                  class="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                  style="font-variation-settings: 'FILL' 1"
                  >check_circle</span
                >
                PAI
              </li>
              <li class="flex items-center gap-3 text-on-surface text-label-md font-label-md">
                <span
                  class="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                  style="font-variation-settings: 'FILL' 1"
                  >check_circle</span
                >
                Bahasa Indonesia
              </li>
              <li class="flex items-center gap-3 text-on-surface text-label-md font-label-md">
                <span
                  class="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                  style="font-variation-settings: 'FILL' 1"
                  >check_circle</span
                >
                Pendidikan Pancasila
              </li>
              <li class="flex items-center gap-3 text-on-surface text-label-md font-label-md">
                <span
                  class="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                  style="font-variation-settings: 'FILL' 1"
                  >check_circle</span
                >
                Matematika
              </li>
              <li class="flex items-center gap-3 text-on-surface text-label-md font-label-md">
                <span
                  class="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                  style="font-variation-settings: 'FILL' 1"
                  >check_circle</span
                >
                IPAS
              </li>
              <li class="flex items-center gap-3 text-on-surface text-label-md font-label-md">
                <span
                  class="material-symbols-outlined text-primary"
                  data-icon="check_circle"
                  style="font-variation-settings: 'FILL' 1"
                  >check_circle</span
                >
                Bahasa Inggris
              </li>
            </div>
          </div>
          <div
            class="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <span
              class="material-symbols-outlined text-[200px] absolute -right-10 -top-10"
              data-icon="history_edu"
              >history_edu</span
            >
          </div>
        </div>
        <!-- Small Card 1: Kurikulum Sekolah Terpadu -->
        <div
          class="md:col-span-4 bg-primary-container/10 border border-primary-container/20 rounded-2xl p-8 hover:translate-y-[-4px] transition-all"
        >
          <div
            class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary mb-6 shadow-sm"
          >
            <span class="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
          </div>
          <h3 class="text-headline-md font-headline-md mb-3">Sekolah Terpadu</h3>
          <p class="text-body-md text-on-surface-variant mb-4">
            Program unggulan berbasis keagamaan.
          </p>
          <ul class="space-y-2 list-none">
            <li class="flex items-center gap-2 text-label-md">
              <span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Tahfiz
            </li>
            <li class="flex items-center gap-2 text-label-md">
              <span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Tilawati
            </li>
            <li class="flex items-center gap-2 text-label-md">
              <span class="w-1.5 h-1.5 bg-primary rounded-full"></span> Hadist
            </li>
          </ul>
        </div>
        <!-- Small Card 2: Muatan Lokal -->
        <div
          class="md:col-span-4 bg-tertiary-container/10 border border-tertiary-container/20 rounded-2xl p-8 hover:translate-y-[-4px] transition-all"
        >
          <div
            class="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-tertiary mb-6 shadow-sm"
          >
            <span class="material-symbols-outlined" data-icon="terminal">terminal</span>
          </div>
          <h3 class="text-headline-md font-headline-md mb-3">Muatan Lokal</h3>
          <p class="text-body-md text-on-surface-variant mb-4">
            Keterampilan khusus sesuai kebutuhan zaman.
          </p>
          <ul class="space-y-2 list-none">
            <li class="flex items-center gap-2 text-label-md">
              <span class="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Komputer/Koding (KA)
            </li>
            <li class="flex items-center gap-2 text-label-md">
              <span class="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Bahasa Arab
            </li>
            <li class="flex items-center gap-2 text-label-md">
              <span class="w-1.5 h-1.5 bg-tertiary rounded-full"></span> PLBJ
            </li>
          </ul>
        </div>
        <!-- Medium Card: Extracurricular -->
        <div
          class="md:col-span-8 glass-card rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center hover:translate-y-[-4px] transition-all"
        >
          <img
            alt="Extracurricular Activity"
            class="w-full md:w-64 h-48 rounded-xl object-cover shadow-md"
            src="@/assets/images/futsal.webp"
          />
          <div>
            <h3 class="text-headline-md font-headline-md mb-3">Ekstrakurikuler Unggulan</h3>
            <p class="text-body-md text-on-surface-variant mb-4">
              Wadah pengembangan minat dan bakat siswa di luar jam akademik formal.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-surface-container rounded-full text-caption">Futsal</span>
              <span class="px-3 py-1 bg-surface-container rounded-full text-caption"
                >Taekwondo</span
              >
              <span class="px-3 py-1 bg-surface-container rounded-full text-caption">Robotic</span>
              <span class="px-3 py-1 bg-surface-container rounded-full text-caption">Coding</span>
              <span class="px-3 py-1 bg-surface-container rounded-full text-caption">Hadroh</span>
              <span class="px-3 py-1 bg-surface-container rounded-full text-caption"
                >English One</span
              >
            </div>
            <a class="text-primary font-label-md flex items-center gap-1 group" href="#"
              >Lihat Semua 14 Cabang
              <span
                class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                data-icon="arrow_forward"
                >arrow_forward</span
              ></a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Extracurricular Spotlight -->
    <section
      class="py-20 bg-surface-container-low rounded-[40px] px-margin-mobile md:px-16 overflow-hidden relative"
    >
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div class="space-y-3">
          <h2 class="text-headline-lg font-headline-lg text-on-surface">Program Ekstrakurikuler</h2>
          <p class="text-body-md text-on-surface-variant max-w-lg">
            Membangun karakter dan keterampilan melalui aktivitas pilihan.
          </p>
        </div>
        <div class="flex gap-2">
          <button
            class="p-3 rounded-full bg-white border border-outline-variant text-on-surface hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            class="p-3 rounded-full bg-white border border-outline-variant text-on-surface hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-sm border border-transparent hover:border-primary/20 transition-all"
        >
          <img
            alt="Taekwondo"
            class="w-full h-48 object-cover"
            src="@/assets/images/taekowondo.webp"
          />
          <div class="p-6">
            <h4 class="text-body-lg font-bold text-on-surface mb-2">Taekwondo</h4>
            <p class="text-caption text-on-surface-variant">
              Melatih kedisiplinan, pertahanan diri, dan kesehatan fisik siswa.
            </p>
          </div>
        </div>
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-sm border border-transparent hover:border-primary/20 transition-all"
        >
          <div class="w-full h-48 bg-primary-container/20 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-6xl">robot_2</span>
          </div>
          <div class="p-6">
            <h4 class="text-body-lg font-bold text-on-surface mb-2">Robotic &amp; Coding</h4>
            <p class="text-caption text-on-surface-variant">
              Mempersiapkan siswa dengan keterampilan teknologi masa depan.
            </p>
          </div>
        </div>
        <div
          class="bg-white rounded-2xl overflow-hidden shadow-sm border border-transparent hover:border-primary/20 transition-all"
        >
          <div class="w-full h-48 bg-tertiary-container/20 flex items-center justify-center">
            <span class="material-symbols-outlined text-tertiary text-6xl">translate</span>
          </div>
          <div class="p-6">
            <h4 class="text-body-lg font-bold text-on-surface mb-2">
              English One &amp; Japanese Club
            </h4>
            <p class="text-caption text-on-surface-variant">
              Pengembangan kemampuan bahasa asing melalui percakapan dan budaya.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap gap-3 justify-center">
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Futsal</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Computer</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Vocal</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Math Club</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Painting</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Science Club</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Archery</span
        >
        <span class="px-4 py-2 bg-white rounded-lg text-label-md border border-outline-variant/30"
          >Basketball</span
        >
      </div>
    </section>

    <!-- Admission CTA -->
    <section
      class="mb-24 mt-16 relative rounded-[32px] overflow-hidden bg-primary p-8 md:p-12 lg:p-20 text-center shadow-xl"
    >
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div
          class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"
        ></div>
      </div>
      <div class="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 class="text-headline-lg font-headline-lg text-white">
          Siap Menjadi Bagian dari SDIT AL-ITTIHAAD?
        </h2>
        <p class="text-body-lg text-primary-fixed">
          Pendaftaran tahun ajaran baru 2026/2027 telah dibuka berdasarkan misi kami mencetak
          generasi unggul.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <router-link
            to="/spmb"
            class="bg-white text-primary px-8 py-3.5 rounded-lg font-label-md hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center"
          >
            Daftar Sekarang
          </router-link>
          <a
            :href="brosurUrl"
            download="Brosur_SDIT_Al_Ittihaad.pdf"
            class="bg-primary-container text-white border border-white/20 px-8 py-3.5 rounded-lg font-label-md hover:bg-primary-container/80 flex items-center gap-2 transition-all"
          >
            <span class="material-symbols-outlined">download</span>
            Unduh Brosur
          </a>
        </div>
      </div>
    </section>

    <!-- FAB -->
    <a
      href="https://wa.me/6281114020004"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-8 right-8 z-[100] group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      id="fab-inquiry"
      ref="fabInquiry"
      aria-label="Tanya Admissions"
    >
      <span class="material-symbols-outlined text-2xl"> chat </span>

      <span
        class="absolute right-full mr-4 px-4 py-2 rounded-xl bg-surface text-on-surface font-semibold shadow-lg border border-outline-variant/10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap"
      >
        Tanya Admissions
      </span>
    </a>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fabInquiry = ref(null)

onMounted(() => {
  if (fabInquiry.value) {
    fabInquiry.value.style.transform = 'translateY(100px)'
    setTimeout(() => {
      fabInquiry.value.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      fabInquiry.value.style.transform = 'translateY(0)'
    }, 500)
  }
})
</script>

<style scoped>
.text-glow {
  text-shadow: 0 0 20px rgba(0, 107, 95, 0.2);
}
</style>
