<template>
  <main class="contact-page">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden min-h-[72vh] md:min-h-[85vh] flex items-center justify-center"
    >
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <img
          class="w-full h-full object-cover scale-105 brightness-[0.28]"
          src="@/assets/images/kontak/img-1.jpg"
          alt="Modern school building"
        />

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/65 to-slate-950/90"
        ></div>

        <!-- Decorative Blur -->
        <div class="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>

        <div class="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full"></div>
      </div>

      <!-- Content -->
      <div
        class="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center flex flex-col items-center"
      >
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-lg shadow-lg mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>

          <span class="text-white/90 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
            Contact Information
          </span>
        </div>

        <!-- Title -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          Hubungi Kami
        </h1>

        <!-- Description -->
        <p
          class="text-sm sm:text-base md:text-xl text-slate-200/90 leading-relaxed max-w-3xl mx-auto"
        >
          Kami siap membantu memberikan informasi yang Anda butuhkan mengenai SDIT Al Ittihaad.
          Silakan hubungi kami melalui berbagai saluran komunikasi yang tersedia.
        </p>
      </div>
    </section>
    <!-- Main Content -->
    <section class="py-20 md:py-24">
      <div class="max-w-screen-2xl mx-auto px-4 md:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10">
          <!-- Contact Form -->
          <div class="lg:col-span-7">
            <div
              class="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-lg p-6 md:p-10 lg:p-12 h-full"
            >
              <div class="mb-10">
                <h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-3">Kirim Pesan</h2>

                <p class="text-on-surface-variant leading-relaxed max-w-2xl">
                  Punya pertanyaan? Isi formulir di bawah ini dan tim kami akan segera membalas
                  pesan Anda.
                </p>
              </div>

              <form class="space-y-6" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Nama -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-on-surface-variant">
                      Nama Lengkap
                    </label>

                    <input
                      v-model="form.name"
                      class="w-full h-14 px-5 rounded-2xl border border-outline-variant/20 bg-surface text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      placeholder="Masukkan nama Anda"
                      type="text"
                      required
                    />
                  </div>

                  <!-- Email -->
                  <div class="space-y-2">
                    <label class="block text-sm font-semibold text-on-surface-variant">
                      Email
                    </label>

                    <input
                      v-model="form.email"
                      class="w-full h-14 px-5 rounded-2xl border border-outline-variant/20 bg-surface text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                      placeholder="contoh@email.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <!-- Subject -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-on-surface-variant">
                    Subjek
                  </label>

                  <input
                    v-model="form.subject"
                    class="w-full h-14 px-5 rounded-2xl border border-outline-variant/20 bg-surface text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    placeholder="Apa yang ingin Anda tanyakan?"
                    type="text"
                    required
                  />
                </div>

                <!-- Message -->
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-on-surface-variant"> Pesan </label>

                  <textarea
                    v-model="form.message"
                    class="w-full min-h-[180px] px-5 py-4 rounded-2xl border border-outline-variant/20 bg-surface text-on-surface resize-none focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    placeholder="Tuliskan pesan Anda secara detail..."
                    required
                  ></textarea>
                </div>

                <!-- Button -->
                <div class="pt-2">
                  <button
                    :disabled="isSubmitting"
                    :class="[
                      'inline-flex items-center justify-center px-8 md:px-10 h-14 rounded-2xl font-bold text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]',
                      isSuccess ? 'bg-secondary' : 'bg-primary hover:brightness-110',
                    ]"
                    type="submit"
                  >
                    {{ buttonText }}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Right Side -->
          <div class="lg:col-span-5">
            <div class="space-y-6">
              <!-- Address -->
              <div
                class="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 md:p-8 hover:shadow-xl transition-all duration-500"
              >
                <div class="flex items-start gap-5">
                  <div
                    class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <span class="material-symbols-outlined text-primary text-3xl">
                      location_on
                    </span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold mb-2 text-on-surface">Alamat Sekolah</h3>

                    <p class="text-on-surface-variant leading-relaxed">
                      Jl. Tebet Mas Indah 1, Tebet Barat, Jakarta Selatan, DKI Jakarta 12810
                    </p>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div
                class="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 md:p-8 hover:shadow-xl transition-all duration-500"
              >
                <div class="flex items-start gap-5">
                  <div
                    class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <span class="material-symbols-outlined text-primary text-3xl"> call </span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold mb-2 text-on-surface">Telepon & WhatsApp</h3>

                    <div class="space-y-1">
                      <p class="text-on-surface-variant">Kantor: (021) 835 4790</p>

                      <p class="text-primary font-semibold">WA: 08111 402 0004</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div
                class="bg-surface-container rounded-3xl border border-outline-variant/10 p-6 md:p-8 hover:shadow-xl transition-all duration-500"
              >
                <div class="flex items-start gap-5">
                  <div
                    class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <span class="material-symbols-outlined text-primary text-3xl"> mail </span>
                  </div>

                  <div>
                    <h3 class="text-xl font-bold mb-2 text-on-surface">Email Resmi</h3>

                    <p class="text-on-surface-variant break-all">info@sdit-alittihaad.sch.id</p>
                  </div>
                </div>
              </div>

              <!-- Social Card -->
              <div
                class="relative overflow-hidden rounded-3xl bg-primary-container text-on-primary-container p-8 md:p-10"
              >
                <div
                  class="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-white/10 blur-3xl"
                ></div>

                <div class="relative z-10">
                  <h3 class="text-white font-bold mb-3">Ikuti Media Sosial Kami</h3>

                  <p class="text-white leading-relaxed mb-8">
                    Dapatkan informasi terbaru mengenai kegiatan dan program sekolah.
                  </p>

                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <!-- Instagram -->
                      <a
                        href="https://www.instagram.com/sdit_alittihaadtebet"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:-translate-y-1"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                        >
                          <path
                            d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm8.95 1.35a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8z"
                          />
                        </svg>
                      </a>

                      <!-- Facebook -->
                      <a
                        href="https://www.facebook.com/sdit.alittihaadtebet"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current transition-transform duration-300 group-hover:scale-110"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transport & Location Section -->
    <section class="py-24 bg-surface-container-low">
      <div class="max-w-[1280px] mx-auto px-6 md:px-8">
        <!-- Header -->
        <div class="mb-14 text-center">
          <span
            class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Akses Transportasi
          </span>

          <h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Rute Transportasi Umum
          </h2>

          <p class="max-w-2xl mx-auto text-on-surface-variant leading-relaxed">
            SDIT Al Ittihaad sangat mudah diakses menggunakan moda transportasi umum seperti
            TransJakarta dan JakLingko.
          </p>
        </div>

        <!-- Transport Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <!-- TransJakarta -->
          <div
            class="bg-surface rounded-3xl border border-outline-variant/20 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div class="flex justify-between items-start mb-5">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary"> directions_bus </span>
                </div>

                <div>
                  <h3 class="font-bold text-lg text-on-surface">TransJakarta</h3>

                  <span
                    class="inline-block mt-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold"
                  >
                    KORIDOR 9
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-1 text-primary text-sm font-medium">
                <span class="material-symbols-outlined text-[16px]"> directions_walk </span>
                5 Menit
              </div>
            </div>

            <p class="text-on-surface-variant leading-relaxed mb-6">
              Turun di Halte Tebet BUMD. Lokasi sekolah berjarak sekitar 500 meter dari pintu keluar
              halte.
            </p>

            <a
              href="https://www.transjakarta.co.id/rute"
              target="_blank"
              class="w-full h-12 rounded-xl border border-primary text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
            >
              Cek Rute TransJakarta
              <span class="material-symbols-outlined text-[18px]"> open_in_new </span>
            </a>
          </div>

          <!-- JakLingko -->
          <div
            class="bg-surface rounded-3xl border border-outline-variant/20 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div class="flex justify-between items-start mb-5">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span class="material-symbols-outlined text-primary"> airport_shuttle </span>
                </div>

                <div>
                  <h3 class="font-bold text-lg text-on-surface">JakLingko</h3>

                  <span
                    class="inline-block mt-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold"
                  >
                    JAK-18
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-1 text-primary text-sm font-medium">
                <span class="material-symbols-outlined text-[16px]"> directions_walk </span>
                1 Menit
              </div>
            </div>

            <p class="text-on-surface-variant leading-relaxed mb-6">
              Rute Kalibata–Kuningan. Berhenti tepat di depan area SDIT Al Ittihaad Tebet.
            </p>

            <a
              href="https://transjakarta.co.id/produk-dan-layanan/jak-lingko/"
              target="_blank"
              class="w-full h-12 rounded-xl border border-primary text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
            >
              Cek Rute JakLingko
              <span class="material-symbols-outlined text-[18px]"> open_in_new </span>
            </a>
          </div>
        </div>

        <!-- Divider -->
        <div class="my-14 border-t border-outline-variant/20"></div>

        <!-- Map Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span
              class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            >
              Lokasi Sekolah
            </span>

            <h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-3">
              Kunjungi SDIT Al Ittihaad
            </h2>

            <p class="text-on-surface-variant max-w-2xl">
              Berlokasi di kawasan Tebet, Jakarta Selatan dan mudah diakses dari berbagai arah.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/FH79pSAQy7sWYpfK8"
            target="_blank"
            class="inline-flex items-center gap-2 text-primary font-semibold"
          >
            Buka Google Maps
            <span class="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
        <div
          class="relative overflow-hidden rounded-[32px] border border-outline-variant/20 shadow-2xl bg-white"
        >
          <iframe
            class="w-full h-[550px]"
            src="https://maps.google.com/maps?q=SDIT%20Al%20Ittihaad&t=m&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowfullscreen
          ></iframe>

          <!-- Floating Card -->
          <div
            class="absolute hidden md:block top-3 right-3 md:top-6 md:right-6 bg-white/35 backdrop-blur-md rounded-2xl md:rounded-3xl p-3 md:p-6 w-[220px] sm:w-[260px] md:max-w-sm shadow-xl border border-outline-variant/10"
          >
            <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div
                class="w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0"
              >
                <span class="material-symbols-outlined text-[18px] md:text-[24px]"> school </span>
              </div>

              <div class="min-w-0">
                <h3 class="font-bold text-sm md:text-base text-on-surface truncate">
                  SDIT Al Ittihaad
                </h3>

                <p class="text-[11px] md:text-sm text-on-surface-variant">Tebet, Jakarta Selatan</p>
              </div>
            </div>

            <p
              class="hidden sm:block text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3 md:mb-4"
            >
              Jl. Tebet Mas Indah 1, Tebet Barat, Jakarta Selatan.
            </p>

            <a
              href="https://maps.app.goo.gl/FH79pSAQy7sWYpfK8"
              target="_blank"
              class="inline-flex items-center gap-1 md:gap-2 text-primary font-semibold text-xs md:text-sm"
            >
              Petunjuk Arah
              <span class="material-symbols-outlined text-[16px]"> arrow_forward </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Micro-Section -->
    <section class="max-w-3xl mx-auto px-6 py-20">
      <h2 class="text-center text-[28px] font-headline-lg font-bold mb-12">
        Pertanyaan yang Sering Diajukan
      </h2>
      <div class="space-y-4">
        <details
          class="group bg-surface border border-outline-variant/30 rounded-xl overflow-hidden"
        >
          <summary
            class="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-primary font-headline-md"
          >
            Kapan jam operasional kantor TU?
            <span class="material-symbols-outlined transition-transform group-open:rotate-180"
              >expand_more</span
            >
          </summary>
          <div class="px-6 pb-6 text-on-surface-variant font-body-md">
            Kantor Tata Usaha kami melayani dari Senin hingga Jumat mulai pukul 07.30 hingga 15.30
            WIB.
          </div>
        </details>
        <details
          class="group bg-surface border border-outline-variant/30 rounded-xl overflow-hidden"
        >
          <summary
            class="flex justify-between items-center p-6 cursor-pointer list-none font-semibold text-primary font-headline-md"
          >
            Apakah bisa melakukan kunjungan langsung?
            <span class="material-symbols-outlined transition-transform group-open:rotate-180"
              >expand_more</span
            >
          </summary>
          <div class="px-6 pb-6 text-on-surface-variant font-body-md">
            Tentu, kami sangat menyambut kunjungan orang tua calon murid. Mohon hubungi WhatsApp
            kami terlebih dahulu untuk membuat janji temu agar tim humas kami dapat mendampingi
            Anda.
          </div>
        </details>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const buttonText = ref('Kirim Pesan Sekarang')

const submitForm = () => {
  isSubmitting.value = true
  buttonText.value = 'Mengirim...'

  setTimeout(() => {
    isSuccess.value = true
    buttonText.value = 'Pesan Terkirim!'
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    setTimeout(() => {
      isSuccess.value = false
      buttonText.value = 'Kirim Pesan Sekarang'
      isSubmitting.value = false
    }, 3000)
  }, 1500)
}
</script>

<style scoped>
.glass-effect {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.hero-gradient {
  background: linear-gradient(135deg, #006b5f 0%, #42a495 100%);
}
</style>
