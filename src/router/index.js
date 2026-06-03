// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import AkademikView from '../views/AkademikView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import SpmbView from '../views/SpmbView.vue'
import KontakView from '@/views/KontakView.vue'
import BeritaView from '../views/BeritaView.vue'
import BeritaDetailView from '../views/BeritaDetailViewDynamic.vue'
import PendaftaranView from '../views/PendaftaranView.vue'
import PendaftaranSuksesView from '../views/PendaftaranSuksesView.vue'
import GaleriView from '../views/GaleriView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView,
    },
    {
      path: '/akademik',
      name: 'akademik',
      component: AkademikView,
    },
    {
      path: '/fasilitas',
      name: 'fasilitas',
      component: FasilitasView,
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: GaleriView,
    },
    {
      path: '/spmb',
      name: 'spmb',
      component: SpmbView,
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: KontakView,
    },
    {
      path: '/berita',
      name: 'berita',
      component: BeritaView,
    },
    {
      path: '/berita/:id',
      name: 'berita-detail',
      component: BeritaDetailView,
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: PendaftaranView,
    },
    {
      path: '/pendaftaran-sukses',
      name: 'pendaftaran-sukses',
      component: PendaftaranSuksesView,
    },
  ],

  // Otomatis scroll ke atas setiap kali pindah halaman
  scrollBehavior(to, from, savedPosition) {
    // Jika pengguna menekan tombol Back/Forward browser
    if (savedPosition) {
      return savedPosition
    }

    // Jika ada hash (#section), scroll ke elemen tersebut
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Default: scroll ke paling atas
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
