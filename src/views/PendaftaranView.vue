<template>
  <main
    class="flex-grow pt-32 pb-24 px-4 md:px-margin-desktop max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-b from-surface to-surface-container-lowest min-h-screen"
  >
    <!-- Left Column: Form -->
    <div class="lg:col-span-8 space-y-8">
      <!-- Progress Stepper -->
      <div
        class="bg-surface-container-lowest p-4 md:p-6 rounded-xl border border-outline-variant shadow-sm overflow-x-auto"
      >
        <div class="flex items-center min-w-max gap-4 px-2">
          <template v-for="n in totalSteps" :key="n">
            <div class="step-item flex flex-col items-center gap-1">
              <div
                class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-label-md font-bold transition-all"
                :class="
                  currentStep >= n
                    ? 'bg-primary text-white border-primary'
                    : 'border-outline-variant text-on-surface-variant'
                "
              >
                <span v-if="currentStep > n" class="material-symbols-outlined text-[16px]"
                  >check</span
                >
                <span v-else>{{ n }}</span>
              </div>
              <span
                class="text-[10px] text-center whitespace-nowrap transition-colors"
                :class="currentStep >= n ? 'text-primary font-bold' : 'text-on-surface-variant'"
                >{{ stepNames[n - 1] }}</span
              >
            </div>
            <div
              v-if="n < totalSteps"
              class="h-px flex-grow min-w-[20px] transition-colors"
              :class="currentStep > n ? 'bg-primary' : 'bg-outline-variant'"
            ></div>
          </template>
        </div>
      </div>

      <!-- Registration Container -->
      <div
        class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-md p-6 md:p-8"
      >
        <form ref="formRef" @submit.prevent>
          <!-- Step 1: Data Calon Siswa -->
          <div v-show="currentStep === 1" class="animate-fade">
            <h2
              class="font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-2"
            >
              <span class="material-symbols-outlined">person</span> Data Calon Siswa
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">NISN</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="Nomor Induk Siswa Nasional"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">NIK *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="Nomor Induk Kependudukan"
                  required
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1 md:col-span-2">
                <label class="font-label-md text-on-surface">Nama Lengkap *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="Sesuai Akta Kelahiran"
                  required
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Nama Panggilan</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="Nama panggilan sehari-hari"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Jenis Kelamin *</label>
                <select
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  required
                >
                  <option value="">-- Pilih --</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Tempat Lahir *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="Contoh: Jakarta"
                  required
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Tanggal Lahir *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  required
                  type="date"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Agama *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  required
                  type="text"
                  value="Islam"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Status Keluarga *</label>
                <select
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  required
                >
                  <option value="">-- Pilih --</option>
                  <option value="kandung">Anak Kandung</option>
                  <option value="tiri">Anak Tiri</option>
                  <option value="angkat">Anak Angkat</option>
                </select>
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Anak ke *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  min="1"
                  required
                  type="number"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Jumlah Saudara *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  min="0"
                  required
                  type="number"
                />
              </div>
              <div class="flex flex-col gap-1 md:col-span-2">
                <label class="font-label-md text-on-surface">Alamat Rumah *</label>
                <textarea
                  class="p-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none h-24"
                  placeholder="Masukkan alamat lengkap domisili"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Step 2: Kesiswaan -->
          <div v-show="currentStep === 2" class="animate-fade">
            <h2 class="font-headline-md text-primary mb-2 flex items-center gap-2">
              <span class="material-symbols-outlined">badge</span> Data Kesiswaan
            </h2>
            <p class="text-label-sm text-on-surface-variant mb-6 italic">
              * Data Email &amp; No HP akan digunakan untuk informasi pendaftaran
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Email Orang Tua *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="nama@email.com"
                  required
                  type="email"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">HP Orang Tua *</label>
                <input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface input-focus-ring outline-none"
                  placeholder="08xxxxxxxxxx"
                  required
                  type="tel"
                />
              </div>
              <div class="md:col-span-2 mt-4">
                <h3 class="font-label-md text-primary mb-4">Unggah Berkas (Maks 2MB)</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    class="flex flex-col gap-1 p-4 border-2 border-dashed border-outline-variant rounded-lg items-center text-center transition-colors"
                    :class="{ 'bg-primary/5 border-primary': fileNames.foto }"
                  >
                    <span class="material-symbols-outlined text-outline">upload_file</span>
                    <span class="font-label-sm">Pas Photo Siswa *</span>
                    <input
                      accept=".jpg,.jpeg,.png"
                      class="hidden"
                      id="photo-input"
                      type="file"
                      @change="(e) => handleFileUpload(e, 'foto')"
                    />
                    <label
                      class="text-[11px] bg-surface-container px-3 py-1 rounded cursor-pointer hover:bg-outline-variant mt-2 transition-colors"
                      for="photo-input"
                    >
                      {{
                        fileNames.foto
                          ? fileNames.foto.substring(0, 15) +
                            (fileNames.foto.length > 15 ? '...' : '')
                          : 'Pilih File'
                      }}
                    </label>
                  </div>
                  <div
                    class="flex flex-col gap-1 p-4 border-2 border-dashed border-outline-variant rounded-lg items-center text-center transition-colors"
                    :class="{ 'bg-primary/5 border-primary': fileNames.raport }"
                  >
                    <span class="material-symbols-outlined text-outline">description</span>
                    <span class="font-label-sm">Raport (Maks 55MB) *</span>
                    <input
                      accept=".pdf"
                      class="hidden"
                      id="raport-input"
                      type="file"
                      @change="(e) => handleFileUpload(e, 'raport')"
                    />
                    <label
                      class="text-[11px] bg-surface-container px-3 py-1 rounded cursor-pointer hover:bg-outline-variant mt-2 transition-colors"
                      for="raport-input"
                    >
                      {{
                        fileNames.raport
                          ? fileNames.raport.substring(0, 15) +
                            (fileNames.raport.length > 15 ? '...' : '')
                          : 'Pilih File'
                      }}
                    </label>
                  </div>
                  <div
                    class="flex flex-col gap-1 p-4 border-2 border-dashed border-outline-variant rounded-lg items-center text-center transition-colors"
                    :class="{ 'bg-primary/5 border-primary': fileNames.kk }"
                  >
                    <span class="material-symbols-outlined text-outline">group</span>
                    <span class="font-label-sm">Kartu Keluarga *</span>
                    <input
                      accept=".jpg,.jpeg,.png"
                      class="hidden"
                      id="kk-input"
                      type="file"
                      @change="(e) => handleFileUpload(e, 'kk')"
                    />
                    <label
                      class="text-[11px] bg-surface-container px-3 py-1 rounded cursor-pointer hover:bg-outline-variant mt-2 transition-colors"
                      for="kk-input"
                    >
                      {{
                        fileNames.kk
                          ? fileNames.kk.substring(0, 15) + (fileNames.kk.length > 15 ? '...' : '')
                          : 'Pilih File'
                      }}
                    </label>
                  </div>
                  <div
                    class="flex flex-col gap-1 p-4 border-2 border-dashed border-outline-variant rounded-lg items-center text-center transition-colors"
                    :class="{ 'bg-primary/5 border-primary': fileNames.ktp }"
                  >
                    <span class="material-symbols-outlined text-outline">id_card</span>
                    <span class="font-label-sm">KTP Orang Tua *</span>
                    <input
                      accept=".jpg,.jpeg,.png"
                      class="hidden"
                      id="ktp-input"
                      type="file"
                      @change="(e) => handleFileUpload(e, 'ktp')"
                    />
                    <label
                      class="text-[11px] bg-surface-container px-3 py-1 rounded cursor-pointer hover:bg-outline-variant mt-2 transition-colors"
                      for="ktp-input"
                    >
                      {{
                        fileNames.ktp
                          ? fileNames.ktp.substring(0, 15) +
                            (fileNames.ktp.length > 15 ? '...' : '')
                          : 'Pilih File'
                      }}
                    </label>
                  </div>
                  <div
                    class="flex flex-col gap-1 p-4 border-2 border-dashed border-outline-variant rounded-lg items-center text-center transition-colors"
                    :class="{ 'bg-primary/5 border-primary': fileNames.akta }"
                  >
                    <span class="material-symbols-outlined text-outline">cake</span>
                    <span class="font-label-sm">Akta Kelahiran *</span>
                    <input
                      accept=".jpg,.jpeg,.png"
                      class="hidden"
                      id="akta-input"
                      type="file"
                      @change="(e) => handleFileUpload(e, 'akta')"
                    />
                    <label
                      class="text-[11px] bg-surface-container px-3 py-1 rounded cursor-pointer hover:bg-outline-variant mt-2 transition-colors"
                      for="akta-input"
                    >
                      {{
                        fileNames.akta
                          ? fileNames.akta.substring(0, 15) +
                            (fileNames.akta.length > 15 ? '...' : '')
                          : 'Pilih File'
                      }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Orang Tua -->
          <div v-show="currentStep === 3" class="animate-fade">
            <h2
              class="font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-2"
            >
              <span class="material-symbols-outlined">family_history</span> Data Orang Tua
            </h2>
            <div class="space-y-6">
              <!-- Ayah -->
              <div
                class="bg-surface-container-low p-4 md:p-6 rounded-xl border border-outline-variant"
              >
                <h3 class="font-label-md text-primary mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-[18px]">person</span> Ayah Kandung
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Nama Ayah *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                      type="text"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">TTL Ayah *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      placeholder="Tempat, Tgl Lahir"
                      required
                      type="text"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Pendidikan *</label>
                    <select
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                    >
                      <option value="">-- Pilih --</option>
                      <option>SD</option>
                      <option>SMP</option>
                      <option>SMA</option>
                      <option>D3</option>
                      <option>S1</option>
                      <option>S2</option>
                      <option>S3</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Penghasilan *</label>
                    <select
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                    >
                      <option value="">-- Pilih --</option>
                      <option>&lt; 1 jt</option>
                      <option>1 - 3 jt</option>
                      <option>3 - 5 jt</option>
                      <option>5 - 8 jt</option>
                      <option>8 - 10 jt</option>
                      <option>10 - 15 jt</option>
                      <option>&gt; 15 jt</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">No. HP Ayah *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                      type="tel"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Pekerjaan Ayah *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <!-- Ibu -->
              <div
                class="bg-surface-container-low p-4 md:p-6 rounded-xl border border-outline-variant"
              >
                <h3 class="font-label-md text-primary mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-[18px]">person_2</span> Ibu Kandung
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Nama Ibu *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                      type="text"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">TTL Ibu *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      placeholder="Tempat, Tgl Lahir"
                      required
                      type="text"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Pendidikan *</label>
                    <select
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                    >
                      <option value="">-- Pilih --</option>
                      <option>SD</option>
                      <option>SMP</option>
                      <option>SMA</option>
                      <option>D3</option>
                      <option>S1</option>
                      <option>S2</option>
                      <option>S3</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Penghasilan *</label>
                    <select
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                    >
                      <option value="">-- Pilih --</option>
                      <option>&lt; 1 jt</option>
                      <option>1 - 3 jt</option>
                      <option>3 - 5 jt</option>
                      <option>5 - 8 jt</option>
                      <option>8 - 10 jt</option>
                      <option>10 - 15 jt</option>
                      <option>&gt; 15 jt</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">No. HP Ibu *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                      type="tel"
                    />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="font-label-sm">Pekerjaan Ibu *</label
                    ><input
                      class="h-10 px-4 border border-outline rounded-lg bg-surface-container-lowest outline-none input-focus-ring"
                      required
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4: Wali -->
          <div v-show="currentStep === 4" class="animate-fade">
            <h2
              class="font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-2"
            >
              <span class="material-symbols-outlined">supervisor_account</span> Data Wali (Opsional)
            </h2>
            <p class="text-label-sm text-on-surface-variant mb-6">Kosongkan jika tidak ada wali.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="font-label-md">Nama Wali</label
                ><input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md">TTL Wali</label
                ><input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md">No. HP Wali</label
                ><input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                  type="tel"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md">Pendidikan</label>
                <select
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                >
                  <option value="">-- Pilih --</option>
                  <option>SD</option>
                  <option>SMP</option>
                  <option>SMA</option>
                  <option>S1</option>
                </select>
              </div>
              <div class="flex flex-col gap-1 md:col-span-2">
                <label class="font-label-md">Alamat Wali</label
                ><textarea
                  class="p-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring h-20"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Step 5: Sekolah -->
          <div v-show="currentStep === 5" class="animate-fade">
            <h2
              class="font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-2"
            >
              <span class="material-symbols-outlined">school</span> Data Sekolah Siswa
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Nama Sekolah Asal *</label
                ><input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                  placeholder="Contoh: TK Islam Al-Ittihaad"
                  required
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Alamat Sekolah *</label
                ><textarea
                  class="p-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring h-24"
                  placeholder="Alamat lengkap sekolah asal"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Step 6: Kesehatan -->
          <div v-show="currentStep === 6" class="animate-fade">
            <h2
              class="font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-2"
            >
              <span class="material-symbols-outlined">medical_services</span> Data Kesehatan Siswa
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label class="font-label-md text-on-surface">Golongan Darah</label>
                <select
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                >
                  <option value="">-- Pilih --</option>
                  <option>A</option>
                  <option>B</option>
                  <option>AB</option>
                  <option>O</option>
                </select>
              </div>
              <div class="flex flex-col gap-1 md:col-span-2">
                <label class="font-label-md text-on-surface">Penyakit yang Pernah Diderita</label
                ><textarea
                  class="p-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring h-24"
                  placeholder="Isi '-' jika tidak ada"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Step 7: Kegemaran -->
          <div v-show="currentStep === 7" class="animate-fade">
            <h2
              class="font-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant pb-2"
            >
              <span class="material-symbols-outlined">stars</span> Data Kegemaran Siswa
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label class="font-label-md">Kesenian</label
                ><input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                  placeholder="Hobi di bidang seni"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md">Olahraga</label
                ><input
                  class="h-11 px-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring"
                  placeholder="Hobi di bidang olahraga"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="font-label-md">Lain-Lain</label
                ><textarea
                  class="p-4 border border-outline rounded-lg bg-surface outline-none input-focus-ring h-20"
                  placeholder="Keterangan tambahan hobi"
                ></textarea>
              </div>
            </div>
            <div
              class="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 flex gap-4 items-start"
            >
              <input
                class="w-5 h-5 rounded border-outline text-primary focus:ring-primary mt-1"
                required
                type="checkbox"
              />
              <p class="text-label-sm text-on-surface">
                Saya menyatakan bahwa data yang saya isikan adalah benar dan sesuai dengan dokumen
                asli yang dapat dipertanggungjawabkan.
              </p>
            </div>
          </div>

          <!-- Form Navigation -->
          <div class="mt-8 flex justify-between pt-6 border-t border-outline-variant">
            <button
              @click="prevStep"
              class="px-6 h-11 rounded-lg border border-outline text-on-surface font-label-md hover:bg-surface-container-high transition-all flex items-center gap-2"
              :class="currentStep === 1 ? 'invisible' : ''"
              type="button"
            >
              <span class="material-symbols-outlined text-[20px]">arrow_back</span> Kembali
            </button>
            <button
              v-if="currentStep < totalSteps"
              @click="nextStep"
              class="px-8 h-11 rounded-lg bg-primary text-on-primary font-label-md hover:bg-primary-container shadow-md transition-all flex items-center gap-2"
              type="button"
            >
              <span>Lanjut ke Tahap {{ currentStep + 1 }}</span>
              <span class="material-symbols-outlined text-[20px]"> arrow_forward </span>
            </button>

            <button
              v-else
              @click="$router.push('/pendaftaran-sukses')"
              class="px-8 h-11 rounded-lg bg-primary text-on-primary font-label-md hover:bg-primary-container shadow-md transition-all flex items-center gap-2"
              type="button"
            >
              <span>Kirim Pendaftaran</span>
              <span class="material-symbols-outlined text-[20px]"> send </span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Right Column: Sidebar -->
    <aside class="lg:col-span-4 space-y-8">
      <!-- Checklist Card -->
      <div
        class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm sticky top-32"
      >
        <h3 class="font-headline-md text-primary mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined">checklist</span> Persiapan Pendaftaran
        </h3>
        <p class="text-body-md text-on-surface-variant mb-4">
          Pastikan Anda sudah menyiapkan berkas digital berikut:
        </p>
        <ul class="space-y-3">
          <li class="flex items-center gap-3 text-label-md text-on-surface">
            <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> Pas
            Foto Calon Siswa
          </li>
          <li class="flex items-center gap-3 text-label-md text-on-surface">
            <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
            Scan Raport (PDF)
          </li>
          <li class="flex items-center gap-3 text-label-md text-on-surface">
            <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
            Akta Kelahiran
          </li>
          <li class="flex items-center gap-3 text-label-md text-on-surface">
            <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span>
            Kartu Keluarga (KK)
          </li>
          <li class="flex items-center gap-3 text-label-md text-on-surface">
            <span class="material-symbols-outlined text-primary text-[20px]">check_circle</span> KTP
            Orang Tua
          </li>
        </ul>
        <div class="mt-6 pt-4 border-t border-outline-variant">
          <div class="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
            <span class="material-symbols-outlined text-[18px]">info</span>
            <span>Format: JPEG, JPG, PNG, PDF</span>
          </div>
          <div class="flex items-center gap-2 text-label-sm text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px]">data_usage</span>
            <span>Maksimal: 2 MB / 55 MB (Raport)</span>
          </div>
        </div>
      </div>

      <!-- Help Support -->
      <div
        class="bg-secondary-container p-4 rounded-xl border border-outline-variant flex items-center gap-4"
      >
        <div
          class="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary"
        >
          <span class="material-symbols-outlined">support_agent</span>
        </div>
        <div>
          <h4 class="font-label-md text-on-secondary-container">Bantuan Pendaftaran?</h4>
          <p class="text-label-sm text-on-secondary-container/80">Hubungi Admin: 08111 402 0004</p>
        </div>
      </div>
    </aside>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentStep = ref(1)
const totalSteps = 7

const stepNames = [
  'Calon Siswa',
  'Kesiswaan',
  'Orang Tua',
  'Wali',
  'Sekolah',
  'Kesehatan',
  'Kegemaran',
]

const fileNames = ref({
  foto: '',
  raport: '',
  kk: '',
  ktp: '',
  akta: '',
})

const handleFileUpload = (event, type) => {
  const file = event.target.files[0]
  if (file) {
    fileNames.value[type] = file.name
  }
}

const formRef = ref(null)

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    if (formRef.value && formRef.value.checkValidity()) {
      router.push('/pendaftaran-sukses')
    } else if (formRef.value) {
      formRef.value.reportValidity()
    }
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.animate-fade {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.input-focus-ring:focus {
  box-shadow: 0 0 0 3px rgba(0, 104, 95, 0.2);
  border-color: #00685f;
}
</style>
