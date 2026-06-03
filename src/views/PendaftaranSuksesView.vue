<template>
  <div class="bg-pattern min-h-screen flex flex-col font-body-md text-on-surface">
    <main
      class="flex-grow flex items-center justify-center pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-6xl w-full">
        <!-- Main Section -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
          <!-- Success Card -->
          <div
            class="xl:col-span-7 bg-surface-container-lowest rounded-3xl border border-outline-variant/20 shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            <!-- Background Shape -->
            <div
              class="absolute -top-20 -right-20 w-52 h-52 bg-primary/10 rounded-full blur-3xl"
            ></div>

            <div class="relative z-10 flex flex-col items-center text-center">
              <!-- Icon -->
              <div class="relative mb-8">
                <div class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <div
                    class="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping"
                  ></div>

                  <span
                    class="material-symbols-outlined text-primary text-[56px]"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                </div>
              </div>

              <!-- Heading -->
              <h1 class="text-3xl sm:text-4xl font-bold text-on-surface leading-tight mb-4">
                Pendaftaran Berhasil!
              </h1>

              <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-xl mb-8">
                Terima kasih telah mempercayakan pendidikan putra-putri Anda kepada SDIT Al
                Ittihaad. Data pendaftaran telah kami terima dengan nomor registrasi
                <span class="font-bold text-primary">#REG2024-0892</span>.
              </p>

              <!-- Button -->
              <button
                @click="handleDownload"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-6 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <span class="material-symbols-outlined">download</span>
                Download Bukti Pendaftaran
              </button>

              <!-- Info -->
              <div
                class="mt-6 flex items-start sm:items-center gap-2 text-sm text-outline text-center sm:text-left"
              >
                <span class="material-symbols-outlined text-[18px]">info</span>
                <span> Bukti pendaftaran juga telah dikirim ke email Anda. </span>
              </div>
            </div>
          </div>

          <!-- Side Cards -->
          <div class="xl:col-span-5 flex flex-col gap-6">
            <!-- Payment -->
            <div
              class="glass-card rounded-3xl border border-outline-variant/20 p-6 shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0"
                >
                  <span class="material-symbols-outlined text-on-secondary-container">
                    payments
                  </span>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-on-surface mb-2">Verifikasi Pembayaran</h3>

                  <p class="text-sm leading-relaxed text-on-surface-variant">
                    Silakan lakukan pembayaran biaya pendaftaran sebesar
                    <span class="font-semibold text-primary">Rp 350.000</span>
                    paling lambat 2x24 jam.
                  </p>
                </div>
              </div>
            </div>

            <!-- Observation -->
            <div
              class="glass-card rounded-3xl border border-outline-variant/20 p-6 shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-2xl bg-tertiary-container/20 flex items-center justify-center shrink-0"
                >
                  <span class="material-symbols-outlined text-tertiary"> event </span>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-on-surface mb-2">Jadwal Observasi</h3>

                  <p class="text-sm leading-relaxed text-on-surface-variant">
                    Jadwal observasi calon siswa akan ditentukan setelah pembayaran diverifikasi
                    oleh tim admin kami.
                  </p>
                </div>
              </div>
            </div>

            <!-- Support -->
            <div class="bg-primary/5 rounded-3xl border border-primary/20 p-6">
              <div class="mb-4">
                <p class="text-primary font-semibold">Butuh bantuan?</p>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@sdit-alittihaad.sch.id"
                  class="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span class="material-symbols-outlined text-[18px]"> mail </span>
                  Hubungi Admin
                </a>

                <a
                  href="https://wa.me/6281114020004"
                  class="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                  target="_blank"
                >
                  <span class="material-symbols-outlined text-[18px]"> call </span>
                  +62 811 1402 0004
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <!-- Image Card -->
          <div class="relative overflow-hidden rounded-3xl h-[260px] md:h-[320px] shadow-xl group">
            <img
              alt="Islamic School Building"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="@/assets/images/pendaftaransukses/img-1.jpg"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            ></div>

            <div class="absolute bottom-6 left-6 right-6 text-white">
              <p class="text-2xl font-bold mb-1">Membangun Generasi Qur'ani</p>

              <p class="text-sm text-white/80">Berkarakter & Berprestasi</p>
            </div>
          </div>

          <!-- Timeline -->
          <div
            class="bg-surface-container-lowest rounded-3xl border border-outline-variant/20 shadow-lg p-6 sm:p-8"
          >
            <h4 class="text-2xl font-bold text-on-surface mb-6">Apa yang terjadi selanjutnya?</h4>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <span class="font-bold text-primary">1</span>
                </div>

                <div>
                  <p class="font-semibold text-on-surface mb-1">Upload Bukti Pembayaran</p>

                  <p class="text-sm leading-relaxed text-on-surface-variant">
                    Unggah bukti transfer melalui dashboard pendaftaran.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <span class="font-bold text-primary">2</span>
                </div>

                <div>
                  <p class="font-semibold text-on-surface mb-1">Verifikasi Berkas</p>

                  <p class="text-sm leading-relaxed text-on-surface-variant">
                    Tim admin akan memproses verifikasi dalam 1 sampai 3 hari kerja.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                >
                  <span class="font-bold text-primary">3</span>
                </div>

                <div>
                  <p class="font-semibold text-on-surface mb-1">Jadwal Observasi</p>

                  <p class="text-sm leading-relaxed text-on-surface-variant">
                    Orang tua akan menerima jadwal wawancara dan observasi siswa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleDownload = () => {
  // Simulate download (could be generating a PDF in a real app)
  alert('Bukti pendaftaran sedang didownload...');
  // Redirect to home
  router.push('/')
}

onMounted(() => {
  // Animate checkmark on load
  const checkmark = document.querySelector('[data-icon="check_circle"]')
  if (checkmark) {
    checkmark.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
    checkmark.style.transform = 'scale(0.5)'
    checkmark.style.opacity = '0'

    setTimeout(() => {
      checkmark.style.transform = 'scale(1)'
      checkmark.style.opacity = '1'
    }, 300)
  }

  // Confetti effect simulation (simple circles)
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div')
    particle.className = 'fixed w-2 h-2 rounded-full opacity-40 pointer-events-none'
    particle.style.backgroundColor = i % 2 === 0 ? '#006a61' : '#ffb59a'
    particle.style.left = Math.random() * 100 + 'vw'
    particle.style.top = '-10px'
    particle.style.zIndex = '9999'
    document.body.appendChild(particle)

    const animation = particle.animate(
      [
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.6 },
        { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)`, opacity: 0 },
      ],
      {
        duration: 2000 + Math.random() * 3000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        delay: Math.random() * 1000,
      },
    )

    animation.onfinish = () => particle.remove()
  }
})
</script>

<style scoped>
.bg-pattern {
  background-color: #f7f9fb;
  background-image: radial-gradient(#bcc9c6 0.5px, transparent 0.5px);
  background-size: 24px 24px;
}
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}


</style>
