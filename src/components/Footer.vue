<template>
  <footer
    class="bg-surface-container-highest border-t border-outline-variant/30 pt-16 pb-10 px-margin-mobile md:px-margin-desktop"
  >
    <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
      <!-- Brand Column -->
      <div class="md:col-span-4">
        <img alt="SDIT Al Ittihaad Logo" class="h-12 w-auto mb-6" src="@/assets/logo.svg" />
        <p class="text-on-surface-variant text-body-md mb-8 max-w-sm leading-relaxed">
          Berpengalaman lebih dari 18 tahun dalam membentuk karakter Qur'ani dan kecerdasan
          intelektual siswa di lingkungan yang inspiratif.
        </p>
        <div class="flex items-center gap-3">
          <!-- Instagram -->
          <a
            href="https://www.instagram.com/sdit_alittihaadtebet"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-12 h-12 rounded-2xl border border-outline-variant bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_rgba(0,107,95,0.2)]"
            aria-label="Instagram"
          >
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 8.001zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
              />
            </svg>
          </a>

          <!-- YouTube -->
          <a
            href="https://www.youtube.com/@sditalittihaadtebet"
            target="_blank"
            rel="noopener noreferrer"
            class="group w-12 h-12 rounded-2xl border border-outline-variant bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-all duration-300 hover:border-red-500 hover:bg-red-50 hover:text-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
            aria-label="YouTube"
          >
            <svg
              class="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              />
            </svg>
          </a>
        </div>
      </div>
      <!-- Quick Links -->
      <div class="md:col-span-2">
        <h5 class="text-on-surface font-bold mb-6 uppercase tracking-wider text-sm">Navigasi</h5>
        <ul class="space-y-4">
          <li>
            <router-link
              to="/profil"
              class="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              >Profil</router-link
            >
          </li>
          <li>
            <router-link
              to="/akademik"
              class="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              >Akademik</router-link
            >
          </li>
          <li>
            <router-link
              to="/fasilitas#"
              class="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              >Fasilitas</router-link
            >
          </li>
          <li>
            <router-link
              class="text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4"
              to="/spmb"
              >Pendaftaran</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Admission Links -->
      <div class="md:col-span-2">
        <h5 class="text-on-surface font-bold mb-6 uppercase tracking-wider text-sm">
          Informasi PPDB
        </h5>
        <ul class="space-y-4">
          <li>
            <router-link
              class="text-on-surface-variant hover:text-primary transition-colors hover:font-bold"
              :to="{ path: '/spmb', hash: '#alur' }"
              >Alur Pendaftaran</router-link
            >
          </li>
          <li>
            <router-link
              class="text-on-surface-variant hover:text-primary transition-colors hover:font-bold"
              :to="{ path: '/spmb', hash: '#biaya' }"
              >Biaya Pendidikan</router-link
            >
          </li>
          <li>
            <router-link
              class="text-on-surface-variant hover:text-primary transition-colors hover:font-bold"
              :to="{ path: '/spmb', hash: '#persyaratan' }"
              >Syarat Daftar</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Contact Info -->
      <div class="md:col-span-4">
        <h5 class="text-on-surface font-bold mb-6 uppercase tracking-wider text-sm">Kontak Kami</h5>

        <ul class="space-y-4 text-on-surface-variant">
          <li class="flex gap-3">
            <span class="material-symbols-outlined text-primary">location_on</span>
            <a
              href="https://maps.app.goo.gl/FH79pSAQy7sWYpfK8"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary transition-colors duration-300 hover:underline hover:font-bold"
            >
              Jl. Tebet Mas Indah 1, Tebet Barat, Jakarta Selatan, 12810
            </a>
          </li>

          <li class="flex gap-3">
            <span class="material-symbols-outlined text-primary">call</span>
            <a
              href="tel:+62218354790"
              class="hover:text-primary transition-colors duration-300 hover:underline hover:font-bold"
            >
              (021) 835 4790
            </a>
          </li>

          <li class="flex gap-3">
            <span class="material-symbols-outlined text-primary">chat</span>
            <a
              href="https://wa.me/6281114020004"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary transition-colors duration-300 hover:underline hover:font-bold"
            >
              WhatsApp: 08111 402 0004
            </a>
          </li>

          <li class="flex gap-3">
            <span class="material-symbols-outlined text-primary">mail</span>
            <a
              href="mailto:info@sdit-alittihaad.sch.id"
              class="hover:text-primary transition-colors duration-300 hover:underline hover:font-bold"
            >
              info@sdit-alittihaad.sch.id
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="max-w-container-max mx-auto pt-10 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6 text-caption"
    >
      <p class="text-on-surface-variant">
        © 2026 SDIT AL ITTIHAAD TEBET JAKARTA SELATAN. All Rights Reserved.
      </p>
      <div class="flex gap-6">
        <a class="text-on-surface-variant hover:text-primary" href="#">Kebijakan Privasi</a>
        <a class="text-on-surface-variant hover:text-primary" href="#">Syarat &amp; Ketentuan</a>
      </div>
    </div>
  </footer>
</template>
