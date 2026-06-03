<!--eslint-disable vue/multi-word-component-names-->
<template>
  <div>
    <!-- Scroll To Top Button -->
    <transition name="fade-up">
      <button
        v-show="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 left-6 z-[60] w-14 h-14 rounded-full backdrop-blur-xl bg-white/20 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.18)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <span
          class="material-symbols-outlined text-3xl font-bold"
          :style="{ color: scrollTopArrowColor }"
        >
          keyboard_arrow_up
        </span>
      </button>
    </transition>

    <!-- Sticky Header -->
    <header
      :class="[
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-out',
        isScrolled ? 'px-2 md:px-8 pt-6' : 'px-0 pt-0',
      ]"
    >
      <!-- Navbar Container -->
      <div
        :class="[
          'transition-all duration-500 ease-out overflow-visible',
          isScrolled
            ? 'max-w-7xl mx-auto h-[72px] md:h-[84px] rounded-full backdrop-blur-xl bg-surface/75 border border-outline-variant/20 shadow-2xl'
            : 'w-full h-[84px] md:h-[96px] bg-surface/75 backdrop-blur-lg border-b border-outline-variant/20 shadow-sm',
        ]"
      >
        <nav
          :class="[
            'flex justify-between items-center transition-all duration-500 w-full max-w-[1280px] mx-auto h-full',
            isScrolled ? 'px-5 md:px-8' : 'px-margin-mobile md:px-margin-desktop',
          ]"
        >
          <!-- Logo -->
          <div class="flex items-center">
            <img
              alt="SDIT Al Ittihaad Logo"
              :class="[
                'w-auto transition-all duration-500',
                isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16',
              ]"
              src="@/assets/logo.svg"
            />
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-8">
            <router-link
              to="/"
              class="font-label-md text-label-md transition-colors"
              :class="
                $route.path === '/'
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              "
            >
              Beranda
            </router-link>

            <router-link
              to="/profil"
              class="font-label-md text-label-md transition-colors"
              :class="
                $route.path === '/profil'
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              "
            >
              Profil
            </router-link>

            <router-link
              to="/akademik"
              class="font-label-md text-label-md transition-colors"
              :class="
                $route.path === '/akademik'
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              "
            >
              Akademik
            </router-link>

            <router-link
              to="/fasilitas"
              class="font-label-md text-label-md transition-colors"
              :class="
                $route.path === '/fasilitas'
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              "
            >
              Fasilitas
            </router-link>

            <router-link
              to="/kontak"
              class="font-label-md text-label-md transition-colors"
              :class="
                $route.path === '/kontak'
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              "
            >
              Kontak
            </router-link>
          </div>

          <!-- Right Side -->
          <div class="flex items-center gap-4">
            <router-link
              class="hidden lg:block bg-primary text-on-primary px-6 py-2.5 rounded-md font-label-md text-label-md hover:bg-primary-container transition-all active:scale-95 shadow-md hover:shadow-lg"
              to="/spmb"
            >
              Pendaftaran
            </router-link>

            <button
              class="md:hidden flex items-center justify-center p-2 text-primary"
              @click="isMobileMenuOpen = !isMobileMenuOpen"
            >
              <span class="material-symbols-outlined">
                {{ isMobileMenuOpen ? 'close' : 'menu' }}
              </span>
            </button>
          </div>
        </nav>

        <!-- Mobile Menu -->
        <transition name="mobile-menu">
          <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full px-4 pt-3">
            <div
              class="overflow-visible rounded-3xl border border-white/10 bg-white/90 backdrop-blur-2xl shadow-2xl"
            >
              <div class="flex flex-col p-4">
                <router-link
                  to="/"
                  class="mobile-link"
                  :class="mobileActive('/')"
                  @click="closeMobileMenu"
                >
                  Beranda
                </router-link>

                <router-link
                  to="/profil"
                  class="mobile-link"
                  :class="mobileActive('/profil')"
                  @click="closeMobileMenu"
                >
                  Profil
                </router-link>

                <router-link
                  to="/akademik"
                  class="mobile-link"
                  :class="mobileActive('/akademik')"
                  @click="closeMobileMenu"
                >
                  Akademik
                </router-link>

                <router-link
                  to="/fasilitas"
                  class="mobile-link"
                  :class="mobileActive('/fasilitas')"
                  @click="closeMobileMenu"
                >
                  Fasilitas
                </router-link>

                <router-link
                  to="/kontak"
                  class="mobile-link"
                  :class="mobileActive('/kontak')"
                  @click="closeMobileMenu"
                >
                  Kontak
                </router-link>

                <div class="h-px bg-slate-200 my-3"></div>

                <router-link
                  to="/spmb"
                  class="w-full h-12 rounded-2xl bg-primary text-on-primary font-semibold flex items-center justify-center shadow-md hover:opacity-90 transition-all"
                  @click="closeMobileMenu"
                >
                  Pendaftaran
                </router-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const showScrollTop = ref(false)
const scrollTopArrowColor = ref('#22c55e')

let scrollTimeout = null

const handleScroll = () => {
  if (scrollTimeout) clearTimeout(scrollTimeout)

  scrollTimeout = setTimeout(() => {
    const scrollY = window.scrollY

    isScrolled.value = scrollY > 50
    showScrollTop.value = scrollY > 300
  }, 10)
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const mobileActive = (path) => {
  return route.path === path
    ? 'bg-primary/10 text-primary font-semibold'
    : 'text-on-surface-variant'
}

const handleResize = () => {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  handleScroll()

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  })

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)

  if (scrollTimeout) clearTimeout(scrollTimeout)
})
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.mobile-link {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.mobile-link:hover {
  background: rgb(241 245 249);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}
</style>
