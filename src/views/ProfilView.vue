<template>
  <main class="profile-page">
    <!-- Hero Section -->
    <section class="pt-32 pb-16 md:pt-40 md:pb-24 flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          alt="SDIT Al Ittihaad School Environment"
          class="w-full h-full object-cover opacity-40 blur-[1px]"
          src="@/assets/images/profil/img-1.webp"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background"
        ></div>
      </div>
      <div class="relative z-10 text-center px-margin-mobile max-w-4xl animate-on-scroll">
        <h1 class="font-headline-xl text-headline-xl text-on-surface mb-stack-md leading-tight">
          Membangun <span class="text-gradient">Generasi Qur'ani</span> yang Cerdas &amp;
          Berprestasi
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
          Selamat datang di SDIT Al Ittihaad, tempat di mana kami berkomitmen membentuk karakter
          islami melalui pendidikan berkualitas yang berlandaskan Al-Qur'an.
        </p>
      </div>
    </section>

    <!-- Sambutan Kepala Sekolah -->
    <section class="py-16 md:py-24 bg-surface overflow-hidden">
      <div class="px-6 md:px-8 max-w-5xl mx-auto animate-on-scroll">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <!-- Principal Photo Column -->
          <div class="lg:col-span-5 relative">
            <div class="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl -z-10"></div>
            <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-outline-variant/30">
              <img alt="Dra. Wardah - Kepala Sekolah" class="w-full h-full object-cover object-top" src="@/assets/images/profil/BuWardah.png" />
            </div>
          </div>
          <!-- Text Content Column -->
          <div class="lg:col-span-7 space-y-6 lg:pl-8">
            <div class="space-y-2">
              <h2 class="font-headline-lg text-headline-lg text-on-surface">Sambutan Kepala Sekolah</h2>
              <div class="w-24 h-1.5 bg-primary rounded-full"></div>
            </div>
            <div class="space-y-4">
              <p class="font-headline-md text-headline-md text-primary">Assalamu’alaikum Warahmatullahi Wabarakatuh.</p>
              <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Selamat datang di website SDIT Al Ittihaad, rumah belajar yang berkomitmen membangun generasi Qur’ani, cerdas, dan berakhlak mulia. Melalui sinergi pendidikan agama, ilmu pengetahuan, dan keterampilan, kami berupaya menghadirkan lingkungan belajar yang menyenangkan serta mempersiapkan peserta didik menjadi pribadi unggul di masa depan.
              </p>
              <p class="font-headline-md text-headline-md text-primary">Wassalamu’alaikum Warahmatullahi Wabarakatuh.</p>
            </div>
            <div class="pt-4">
              <div class="font-headline-md text-on-surface">Dra. Wardah</div>
              <div class="font-label-md text-primary uppercase tracking-widest mt-1">Kepala Sekolah</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visi & Misi Section -->
    <section class="py-16 md:py-24 px-6 md:px-8 max-w-5xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-on-scroll">
        <div class="space-y-8">
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Visi Kami</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed italic">
              "Terwujudnya peserta didik yang unggul dalam prestasi berdasarkan nilai-nilai Al
              Quran"
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <span class="material-symbols-outlined text-primary mb-4 text-4xl">auto_stories</span>
              <h4 class="font-headline-md text-headline-md text-on-surface mb-2">Qur'ani</h4>
              <p class="text-caption font-caption text-on-surface-variant">
                Menjadikan Al-Qur'an sebagai pedoman utama dalam pembentukan karakter.
              </p>
            </div>
            <div
              class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <span class="material-symbols-outlined text-primary mb-4 text-4xl"
                >military_tech</span
              >
              <h4 class="font-headline-md text-headline-md text-on-surface mb-2">Unggul</h4>
              <p class="text-caption font-caption text-on-surface-variant">
                Mencetak lulusan yang kompetitif dan berprestasi di berbagai bidang.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-primary-container/10 p-12 rounded-[2rem] border border-primary/20">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-8 text-center">Misi Kami</h2>
          <ul class="space-y-6">
            <li class="flex gap-4">
              <div
                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold"
              >
                1
              </div>
              <p class="text-body-md font-body-md text-on-surface-variant">
                Mengamalkan Al Qur’an dalam kehidupan.
              </p>
            </li>
            <li class="flex gap-4">
              <div
                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold"
              >
                2
              </div>
              <p class="text-body-md font-body-md text-on-surface-variant">
                Menanamkan sifat-sifat Rasul (Tabligh, Amanah, Fathonah, dan Shidiq) dalam kehidupan
                peserta didik.
              </p>
            </li>
            <li class="flex gap-4">
              <div
                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold"
              >
                3
              </div>
              <p class="text-body-md font-body-md text-on-surface-variant">
                Memotivasi peserta didik dalam mengenali potensi diri.
              </p>
            </li>
            <li class="flex gap-4">
              <div
                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold"
              >
                4
              </div>
              <p class="text-body-md font-body-md text-on-surface-variant">
                Melaksanakan pendidikan secara proporsional, efektif, kreatif, dan inovatif.
              </p>
            </li>
            <li class="flex gap-4">
              <div
                class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold"
              >
                5
              </div>
              <p class="text-body-md font-body-md text-on-surface-variant">
                Menumbuhkembangkan inovasi unggul dalam segala dimensi kehidupan.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tentang Kami (History/About) -->
    <section class="py-16 md:py-24 bg-surface-container-lowest">
      <div class="px-6 md:px-8 max-w-5xl mx-auto animate-on-scroll">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="rounded-3xl overflow-hidden shadow-xl">
            <img
              alt="Fasilitas Belajar SDIT Al Ittihaad"
              class="w-full h-auto"
              src="@/assets/images/profil/img-2.jpg"
            />
          </div>
          <div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface mb-6">
              Tentang SDIT Al Ittihaad
            </h2>
            <p class="text-body-lg text-on-surface-variant leading-relaxed mb-6">
              SDIT AL ITTIHAAD adalah sekolah dasar islam terpadu yang telah berpengalaman selama
              bertahun-tahun dalam menyelenggarakan pendidikan dasar yang memadukan kurikulum
              nasional dengan nilai-nilai keislaman yang kuat.
            </p>
            <p class="text-body-md text-on-surface-variant leading-relaxed">
              Kami percaya bahwa setiap anak memiliki potensi unik yang harus dikembangkan dalam
              lingkungan yang mendukung dan islami. Dengan staf pengajar yang kompeten dan fasilitas
              yang memadai, kami berkomitmen untuk membimbing putra-putri Anda menjadi pribadi yang
              berilmu dan berakhlak mulia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sejarah / Interactive Timeline -->
    <section class="py-16 md:py-24 px-6 md:px-8 max-w-5xl mx-auto overflow-hidden">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Perjalanan Kami</h2>
        <p class="text-on-surface-variant mt-4">
          Jejak langkah SDIT Al Ittihaad dalam mencerdaskan kehidupan bangsa.
        </p>
      </div>
      <div class="relative animate-on-scroll">
        <!-- Timeline Line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 timeline-line hidden md:block"
        ></div>
        <!-- Timeline Item 1 -->
        <div class="relative mb-16 md:mb-24">
          <div class="md:flex items-center justify-between w-full">
            <div class="md:w-5/12 text-right hidden md:block">
              <h3 class="font-headline-md text-primary">Berdiri</h3>
              <p class="text-on-surface-variant mt-2">
                Peletakan batu pertama dan awal mula dedikasi untuk pendidikan Islam Terpadu.
              </p>
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background hidden md:block"
            ></div>
            <div
              class="md:w-5/12 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30"
            >
              <span class="text-primary font-bold text-xl block mb-2 md:hidden"
                >Tahun Pendirian</span
              >
              <h4 class="font-headline-md mb-2 md:hidden">Awal Perjalanan</h4>
              <p class="md:hidden text-on-surface-variant mb-4">
                Peletakan batu pertama dan awal mula dedikasi untuk pendidikan Islam Terpadu.
              </p>
              <p class="text-body-md">
                Membangun fondasi kuat pendidikan yang mengintegrasikan nilai religius dan ilmu
                pengetahuan umum.
              </p>
            </div>
          </div>
        </div>
        <!-- Timeline Item 2 -->
        <div class="relative mb-16 md:mb-24">
          <div class="md:flex items-center justify-between w-full flex-row-reverse">
            <div class="md:w-5/12 text-left hidden md:block">
              <h3 class="font-headline-md text-primary">Akreditasi &amp; Perkembangan</h3>
              <p class="text-on-surface-variant mt-2">
                Meraih status terakreditasi dan mulai memperluas fasilitas sarana prasarana.
              </p>
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background hidden md:block"
            ></div>
            <div
              class="md:w-5/12 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30"
            >
              <span class="text-primary font-bold text-xl block mb-2 md:hidden"
                >Fase Pertumbuhan</span
              >
              <h4 class="font-headline-md mb-2 md:hidden">Standarisasi Kualitas</h4>
              <p class="md:hidden text-on-surface-variant">
                Penyempurnaan kurikulum dan peningkatan kualitas tenaga pendidik secara konsisten.
              </p>
              <p class="text-body-md hidden md:block">
                Penyempurnaan kurikulum dan peningkatan kualitas tenaga pendidik secara konsisten
                untuk melayani masyarakat lebih baik.
              </p>
            </div>
          </div>
        </div>
        <!-- Timeline Item 3 -->
        <div class="relative">
          <div class="md:flex items-center justify-between w-full">
            <div class="md:w-5/12 text-right hidden md:block">
              <h3 class="font-headline-md text-primary">Masa Kini</h3>
              <p class="text-on-surface-variant mt-2">
                Menjadi sekolah rujukan dengan segudang prestasi akademik dan non-akademik.
              </p>
            </div>
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background hidden md:block"
            ></div>
            <div
              class="md:w-5/12 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30"
            >
              <span class="text-primary font-bold text-xl block mb-2 md:hidden">Era Digital</span>
              <h4 class="font-headline-md mb-2 md:hidden">Modernisasi Qur'ani</h4>
              <p class="text-body-md">
                Menerapkan teknologi pendidikan modern tanpa meninggalkan nilai luhur Al-Qur'an
                sebagai pedoman utama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Organizational Chart Section -->
    <section class="py-16 md:py-24 bg-surface transition-all duration-700 overflow-x-auto">
      <div class="max-w-screen-2xl mx-auto px-6 md:px-8 min-w-[1200px]">
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Struktur Organisasi Sekolah</h2>
          <div class="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p class="text-on-surface-variant max-w-2xl mx-auto">Dedikasi tim manajemen dan staf pengajar kami dalam mewujudkan visi sekolah berkualitas.</p>
        </div>
        <div class="flex flex-col items-center">
          <!-- Level 1: Kepala Sekolah -->
          <div class="flex flex-col items-center z-10 animate-on-scroll">
            <div class="bg-surface-container-lowest border border-primary/20 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-72 text-center group border-b-4 border-b-primary">
              <div class="w-32 h-32 rounded-full mx-auto bg-surface-container-highest mb-4 overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                <img alt="Dra. Wardah" class="w-full h-full object-cover object-top" src="@/assets/images/profil/BuWardah.png" />
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface text-xl">Dra. Wardah</h3>
              <p class="text-primary font-label-md text-label-md uppercase tracking-wider mt-1">Kepala Sekolah</p>
            </div>
            <div class="org-tree-line-v h-12"></div>
          </div>
          <!-- Level 2: Komite -->
          <div class="flex flex-col items-center z-10 animate-on-scroll" style="transition-delay: 100ms;">
            <div class="bg-surface-container-lowest border border-primary/20 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-64 text-center group">
              <div class="w-20 h-20 rounded-full mx-auto bg-surface-container-highest mb-3 flex items-center justify-center ring-2 ring-primary/5">
                <span class="material-symbols-outlined text-primary text-4xl">groups</span>
              </div>
              <h4 class="font-label-md text-on-surface text-lg">Ari Sulastri</h4>
              <p class="text-on-surface-variant text-label-sm uppercase tracking-wide">Komite</p>
            </div>
            <div class="org-tree-line-v h-12"></div>
          </div>
          <!-- Horizontal Connecting Line for Level 3 -->
          <div class="w-full max-w-[1100px] relative animate-on-scroll" style="transition-delay: 200ms;">
            <div class="org-tree-line-h w-full absolute top-0 left-0"></div>
            <div class="grid grid-cols-4 gap-8 pt-0">
              <!-- Column 1: Kurikulum -->
              <div class="flex flex-col items-center pt-12 relative">
                <div class="org-tree-line-v h-12 absolute top-0"></div>
                <div class="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-center w-full group mb-8">
                  <div class="w-16 h-16 rounded-full mx-auto bg-surface-container-highest mb-3 flex items-center justify-center group-hover:ring-4 ring-primary/10 transition-all">
                    <span class="material-symbols-outlined text-primary/60 text-3xl">menu_book</span>
                  </div>
                  <h4 class="font-label-md text-on-surface text-base">Sarifah, S.Pd.I</h4>
                  <p class="text-primary text-xs font-bold mt-1">Waka Kurikulum</p>
                </div>
                <div class="org-tree-line-v h-8"></div>
                <div class="space-y-4 w-full px-2">
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Azhar, S.Kom</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Atika Zahra, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Sri Fuji A, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Eliza, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Elma Iriyanti, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Irma Fariha, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Hanifah, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Nur Falah Faisal, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                </div>
              </div>
              <!-- Column 2: Kesiswaan -->
              <div class="flex flex-col items-center pt-12 relative">
                <div class="org-tree-line-v h-12 absolute top-0"></div>
                <div class="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-center w-full group mb-8">
                  <div class="w-16 h-16 rounded-full mx-auto bg-surface-container-highest mb-3 flex items-center justify-center group-hover:ring-4 ring-primary/10 transition-all">
                    <span class="material-symbols-outlined text-primary/60 text-3xl">person_celebrate</span>
                  </div>
                  <h4 class="font-label-md text-on-surface text-base">Ahmad Faisal, S.Pd</h4>
                  <p class="text-primary text-xs font-bold mt-1">Waka Kesiswaan</p>
                </div>
                <div class="org-tree-line-v h-8"></div>
                <div class="space-y-4 w-full px-2">
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Alviah, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Siti Rosyidah, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Nani R, S.Ag, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Nur Afifah, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Siti Mutiah, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Junaidi, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Gustomi, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Siti Rahmah, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                </div>
              </div>
              <!-- Column 3: Keagamaan -->
              <div class="flex flex-col items-center pt-12 relative">
                <div class="org-tree-line-v h-12 absolute top-0"></div>
                <div class="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-center w-full group mb-8">
                  <div class="w-16 h-16 rounded-full mx-auto bg-surface-container-highest mb-3 flex items-center justify-center group-hover:ring-4 ring-primary/10 transition-all">
                    <span class="material-symbols-outlined text-primary/60 text-3xl">mosque</span>
                  </div>
                  <h4 class="font-label-md text-on-surface text-base">Ismail, S.Pd.I</h4>
                  <p class="text-primary text-xs font-bold mt-1">Waka Keagamaan</p>
                </div>
                <div class="org-tree-line-v h-8"></div>
                <div class="space-y-4 w-full px-2">
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Ahmad Syakir, S.H</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Hj. Noor Faridah, M.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Amiruddin, S.Ag</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Nadiyah, S.Sos</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">M. Baidowi</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                </div>
              </div>
              <!-- Column 4: Tata Usaha -->
              <div class="flex flex-col items-center pt-12 relative">
                <div class="org-tree-line-v h-12 absolute top-0"></div>
                <div class="bg-surface-container-lowest border border-outline-variant/30 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-center w-full group mb-8">
                  <div class="w-16 h-16 rounded-full mx-auto bg-surface-container-highest mb-3 flex items-center justify-center group-hover:ring-4 ring-primary/10 transition-all">
                    <span class="material-symbols-outlined text-primary/60 text-3xl">admin_panel_settings</span>
                  </div>
                  <h4 class="font-label-md text-on-surface text-base">Edni Rosliana, S.S</h4>
                  <p class="text-primary text-xs font-bold mt-1">Kepala Tata Usaha</p>
                </div>
                <div class="org-tree-line-v h-8"></div>
                <div class="space-y-4 w-full px-2">
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Abdullah, S.E</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Devi Nurdian, S.Pd</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Putri, S.I.Pust</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">M. Muslih</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">M. Yusuf</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">M. Amin</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Nurmala</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                  <div class="bg-surface-container-low p-3 rounded-lg text-center border border-outline-variant/20"><p class="text-on-surface font-label-md text-sm">Desi</p><p class="text-[10px] text-on-surface-variant uppercase">Anggota</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAB -->
    <button
      class="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center hover:bg-primary-container transition-all active:scale-95 z-[100] group"
    >
      <span class="material-symbols-outlined text-3xl">chat_bubble</span>
      <span
        class="absolute right-20 bg-white px-4 py-2 rounded-lg shadow-md text-primary font-label-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-outline-variant/20"
        >Tanya Admin</span
      >
    </button>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let observer = null

onMounted(() => {
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((el) => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8')
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    },
    { threshold: 0.1 },
  )

  elements.forEach((el) => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #006b5f 0%, #42a495 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.timeline-line {
  background: linear-gradient(to bottom, transparent, #006b5f 15%, #006b5f 85%, transparent);
}
.org-tree-line-v {
  width: 2px;
  background-color: rgba(0, 104, 95, 0.2);
  margin: 0 auto;
}
.org-tree-line-h {
  height: 2px;
  background-color: rgba(0, 104, 95, 0.2);
}
.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  width: 100%;
}
</style>
