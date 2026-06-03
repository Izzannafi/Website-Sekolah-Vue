<template>
  <main class="pt-20 overflow-hidden bg-background">
    <!-- Hero Section -->
    <section
      id="hero"
      class="relative min-h-[720px] md:min-h-[820px] flex items-center overflow-hidden"
    >
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/spmb/img-1.jpg"
          alt="SDIT Al Ittihaad Campus"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30"
        ></div>

        <div
          class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
        ></div>
      </div>

      <!-- Decoration -->
      <div
        class="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl"
      ></div>

      <!-- Content -->
      <div
        class="relative z-10 w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <div class="max-w-3xl py-24 md:py-32">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8"
          >
            <span class="w-2 h-2 rounded-full bg-primary"></span>

            <span class="text-primary font-semibold text-sm md:text-base">
              Penerimaan Peserta Didik Baru (PPDB) 2026/2027
            </span>
          </div>

          <!-- Heading -->
          <h1
            class="text-[42px] leading-[50px] md:text-[72px] md:leading-[82px] font-bold tracking-tight text-on-surface mb-6"
          >
            Membentuk Generasi
            <span class="text-primary">Cerdas & Berakhlak Mulia</span>
          </h1>

          <!-- Description -->
          <p class="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mb-10">
            Bergabunglah bersama SDIT Al Ittihaad untuk pendidikan berkualitas yang mengintegrasikan
            nilai Islam dengan keunggulan akademik modern.
          </p>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              to="/pendaftaran"
              class="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-on-primary font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              Daftar Sekarang
            </router-link>
            <a
              :href="brosurUrl"
              download="Brosur_SDIT_Al_Ittihaad.pdf"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-on-surface font-semibold hover:bg-white/20 transition-all duration-500"
            >
              <span class="material-symbols-outlined text-[20px]"> download </span>
              Unduh Brosur
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Alur Pendaftaran -->
    <section id="alur" class="py-20 md:py-28 bg-surface-container-lowest">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Heading -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-[36px] md:text-[48px] font-bold text-on-surface mb-4">
            Alur Pendaftaran
          </h2>

          <p class="text-on-surface-variant text-lg leading-relaxed">
            Langkah mudah menjadi bagian dari keluarga besar SDIT Al Ittihaad.
          </p>
        </div>

        <!-- Steps -->
        <div class="relative">
          <!-- Desktop Line -->
          <div
            class="hidden lg:block absolute top-10 left-0 right-0 border-t border-dashed border-outline-variant"
          ></div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Step -->
            <div v-for="step in steps" :key="step.title" class="relative group">
              <div
                class="bg-surface-container rounded-3xl border border-outline-variant/10 p-8 h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div
                  class="relative z-10 w-20 h-20 rounded-3xl bg-primary text-on-primary flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-500"
                >
                  <span class="material-symbols-outlined text-[34px]">
                    {{ step.icon }}
                  </span>
                </div>

                <h3 class="text-2xl font-bold mb-3 text-on-surface">
                  {{ step.title }}
                </h3>

                <p class="text-on-surface-variant leading-relaxed">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rincian Biaya -->
    <section id="biaya" class="py-24 bg-surface">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Heading -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span
            class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4"
          >
            Informasi Biaya Pendidikan
          </span>

          <h2 class="text-[36px] md:text-[48px] font-bold text-on-surface mb-4">
            Rincian Biaya Masuk
          </h2>

          <p class="text-lg text-on-surface-variant leading-relaxed">
            Rincian biaya peserta didik baru Tahun Ajaran 2026/2027 berdasarkan brosur resmi
            <span class="whitespace-nowrap">SDIT Al-Ittihaad</span>.
          </p>
        </div>

        <!-- Summary Cards -->
        <div class="grid lg:grid-cols-3 gap-6 mb-10">
          <!-- Laki-laki -->
          <div class="rounded-[28px] bg-primary text-on-primary p-8 shadow-lg">
            <p class="text-on-primary/80 text-sm mb-2">Total Biaya Siswa</p>

            <h3 class="text-xl text-white font-semibold mb-4">Laki-laki</h3>

            <div class="text-4xl font-black">Rp 27.466.000</div>
          </div>

          <!-- Perempuan -->
          <div
            class="rounded-[28px] bg-primary-container text-on-primary-container p-8 shadow-lg border border-primary/10"
          >
            <p class="text-on-surface-variant text-white text-sm mb-2">Total Biaya Siswi</p>

            <h3 class="text-xl font-semibold text-white mb-4">Perempuan</h3>

            <div class="text-4xl font-black text-white">Rp 27.556.000</div>
          </div>

          <!-- Formulir -->
          <div
            class="rounded-[28px] bg-surface-container p-8 border border-outline-variant/20 shadow-lg"
          >
            <p class="text-on-surface-variant text-sm mb-2">Biaya Formulir</p>

            <h3 class="text-xl font-semibold text-on-surface mb-4">Pendaftaran</h3>

            <div class="text-4xl font-black text-primary">Rp 600.000</div>
          </div>
        </div>

        <!-- Table -->
        <div
          class="overflow-hidden rounded-[32px] bg-surface-container-lowest border border-outline-variant/15 shadow-xl"
        >
          <div class="overflow-x-auto">
            <table class="w-full min-w-[760px]">
              <thead>
                <tr class="bg-surface-container">
                  <th class="px-8 py-5 text-left font-bold text-on-surface">Item Biaya</th>

                  <th class="px-8 py-5 text-center font-bold text-on-surface">Laki-laki</th>

                  <th class="px-8 py-5 text-center font-bold text-on-surface">Perempuan</th>
                </tr>
              </thead>

              <tbody class="divide-y divide-outline-variant/10">
                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5 text-on-surface">Uang Pangkal</td>
                  <td class="px-8 py-5 text-center font-medium">Rp 19.000.000</td>
                  <td class="px-8 py-5 text-center font-medium">Rp 19.000.000</td>
                </tr>

                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5">Kegiatan</td>
                  <td class="px-8 py-5 text-center">Rp 3.370.000</td>
                  <td class="px-8 py-5 text-center">Rp 3.370.000</td>
                </tr>

                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5">Seragam</td>
                  <td class="px-8 py-5 text-center">Rp 1.250.000</td>
                  <td class="px-8 py-5 text-center">Rp 1.340.000</td>
                </tr>

                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5">Buku Pelajaran</td>
                  <td class="px-8 py-5 text-center">Rp 1.037.000</td>
                  <td class="px-8 py-5 text-center">Rp 1.037.000</td>
                </tr>

                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5">Perlengkapan</td>
                  <td class="px-8 py-5 text-center">Rp 874.000</td>
                  <td class="px-8 py-5 text-center">Rp 874.000</td>
                </tr>

                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5">SPP Bulan Juli</td>
                  <td class="px-8 py-5 text-center">Rp 1.300.000</td>
                  <td class="px-8 py-5 text-center">Rp 1.300.000</td>
                </tr>

                <tr class="hover:bg-primary/5 transition-colors">
                  <td class="px-8 py-5">Komite</td>
                  <td class="px-8 py-5 text-center">Rp 635.000</td>
                  <td class="px-8 py-5 text-center">Rp 635.000</td>
                </tr>
              </tbody>

              <tfoot>
                <tr class="bg-primary/8 border-t-2 border-primary/20">
                  <td class="px-8 py-6 font-bold text-primary text-lg">TOTAL BIAYA MASUK</td>

                  <td class="px-8 py-6 text-center font-extrabold text-primary text-xl">
                    Rp 27.466.000
                  </td>

                  <td class="px-8 py-6 text-center font-extrabold text-primary text-xl">
                    Rp 27.556.000
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- Information Cards -->
        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="rounded-3xl bg-primary/5 border border-primary/15 p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary"> local_offer </span>

              <h3 class="font-bold text-primary">Diskon Uang Pangkal 10%</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Berlaku bagi calon peserta didik yang melakukan pelunasan biaya masuk sebelum November
              2025.
            </p>
          </div>

          <div class="rounded-3xl bg-surface-container border border-outline-variant/15 p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="material-symbols-outlined text-primary"> info </span>

              <h3 class="font-bold text-on-surface">Informasi Tambahan</h3>
            </div>

            <p class="text-on-surface-variant leading-relaxed">
              Biaya dapat berubah sesuai kebijakan yayasan dan akan diinformasikan secara resmi
              kepada orang tua peserta didik.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="persyaratan" class="py-24 bg-surface-container-low">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span
            class="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4"
          >
            Syarat Pendaftaran
          </span>

          <h2 class="text-[36px] md:text-[48px] font-bold mb-4 text-on-surface">
            Persyaratan Calon Peserta Didik
          </h2>

          <p class="text-lg text-on-surface-variant leading-relaxed">
            Pastikan seluruh dokumen berikut telah disiapkan sebelum melakukan proses pendaftaran.
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8">
          <!-- Persyaratan -->
          <div class="lg:col-span-7">
            <div
              class="bg-surface-container rounded-[32px] border border-outline-variant/10 p-8 md:p-10 shadow-lg h-full"
            >
              <div class="grid md:grid-cols-2 gap-5">
                <div
                  v-for="doc in documents"
                  :key="doc.title"
                  class="group p-5 rounded-3xl bg-surface-container-lowest border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    <span class="material-symbols-outlined">
                      {{ doc.icon }}
                    </span>
                  </div>

                  <h3 class="font-bold text-lg mb-2 text-on-surface">
                    {{ doc.title }}
                  </h3>

                  <p class="text-sm text-on-surface-variant leading-relaxed">
                    {{ doc.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="lg:col-span-5">
            <div
              class="bg-surface-container rounded-[32px] border border-outline-variant/10 p-8 md:p-10 shadow-lg h-full"
            >
              <h2 class="text-[32px] font-bold mb-8 text-on-surface">Pertanyaan Umum</h2>

              <div class="space-y-4">
                <details
                  v-for="faq in faqs"
                  :key="faq.question"
                  class="group rounded-2xl border border-outline-variant/10 bg-surface-container-lowest overflow-hidden"
                >
                  <summary
                    class="flex items-center justify-between gap-4 cursor-pointer p-5 list-none font-semibold"
                  >
                    {{ faq.question }}

                    <span
                      class="material-symbols-outlined group-open:rotate-180 transition-transform"
                    >
                      expand_more
                    </span>
                  </summary>

                  <div class="px-5 pb-5 text-on-surface-variant leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </details>
              </div>

              <!-- Info Tambahan -->
              <div class="mt-8 rounded-3xl bg-primary text-on-primary p-6">
                <div class="flex items-center gap-3 mb-3">
                  <span class="material-symbols-outlined"> campaign </span>

                  <h3 class="font-bold text-white">Informasi Penting</h3>
                </div>

                <p class="leading-relaxed text-sm">
                  Pendaftaran Tahun Ajaran 2026/2027 mulai dibuka pada 4 Oktober 2025. Kuota peserta
                  didik terbatas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import brosurUrl from '@/assets/files/Brosur.pdf'

const steps = [
  {
    icon: 'person_add',
    title: 'Registrasi',
    description: 'Membuat akun pendaftaran pada portal SPMB Online.',
  },
  {
    icon: 'edit_note',
    title: 'Isi Data',
    description: 'Melengkapi formulir biodata calon siswa dan orang tua.',
  },
  {
    icon: 'payments',
    title: 'Pembayaran',
    description: 'Melakukan pembayaran biaya pendaftaran via Virtual Account.',
  },
  {
    icon: 'assignment_turned_in',
    title: 'Seleksi',
    description: 'Mengikuti tes observasi dan wawancara sesuai jadwal.',
  },
]

const biaya = [
  {
    name: 'Biaya Pendaftaran',
    price: 'Rp 600.000',
  },
  {
    name: 'Uang Pangkal (Gedung & Sarana)',
    price: 'Rp 19.000.000',
  },
  {
    name: 'Biaya Seragam (5 Set)',
    price: 'Rp 1.250.000',
  },
  {
    name: 'Biaya Buku Pelajaran',
    price: 'Rp 1.037.000',
  },
  {
    name: 'Biaya Perlengkapan Sekolah',
    price: 'Rp 874.000',
  },
  {
    name: 'Biaya Kegiatan',
    price: 'Rp 3.370.000',
  },
  {
    name: 'Biaya SPP Bulan Pertama',
    price: 'Rp 1.300.000',
  },
  {
    name: 'Komite Sekolah',
    price: 'Rp 635.000',
  },
]

const documents = [
  {
    title: 'Usia Minimal 6 Tahun',
    description: 'Calon peserta didik berusia minimal 6 tahun pada bulan Juli 2026.',
    icon: 'cake',
  },
  {
    title: 'Membeli Formulir',
    description: 'Melakukan pembelian formulir pendaftaran sebesar Rp 600.000.',
    icon: 'description',
  },
  {
    title: 'Fotokopi Rapor TK Terakhir',
    description: 'Melampirkan fotokopi rapor TK semester terakhir.',
    icon: 'menu_book',
  },
  {
    title: 'Fotokopi Akta Kelahiran',
    description: 'Fotokopi akta kelahiran calon peserta didik.',
    icon: 'badge',
  },
  {
    title: 'Fotokopi Kartu Keluarga',
    description: 'Fotokopi kartu keluarga yang masih berlaku.',
    icon: 'groups',
  },
  {
    title: 'Fotokopi KTP Orang Tua',
    description: 'Fotokopi KTP ayah dan ibu.',
    icon: 'contact_page',
  },
  {
    title: 'Pas Foto 3x4',
    description: 'Pas foto berwarna ukuran 3x4 sebanyak 2 lembar.',
    icon: 'photo_camera',
  },
]

const faqs = [
  {
    question: 'Kapan batas akhir pendaftaran Gelombang 1?',
    answer: 'Pendaftaran Gelombang 1 dibuka hingga 31 Maret 2025.',
  },
  {
    question: 'Apakah ada tes masuk untuk calon siswa?',
    answer: 'Ya, kami melakukan observasi kesiapan belajar dan wawancara singkat.',
  },
  {
    question: 'Apakah tersedia layanan antar-jemput sekolah?',
    answer: 'Tersedia layanan antar jemput untuk area radius 10km dari sekolah.',
  },
]
</script>

<style scoped>
details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}
</style>
