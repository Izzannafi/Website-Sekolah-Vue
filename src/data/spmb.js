export const spmbInfo = {
  tahunAjaran: '2026/2027',
  gelombang: 'Gelombang 1',
  status: 'Dibuka',
  kuota: 72,
  biayaPendaftaran: 'Rp 600.000',

  jadwal: [
    { kegiatan: 'Pendaftaran Online', mulai: '15 Januari 2025', selesai: '15 Maret 2025' },
    { kegiatan: 'Verifikasi Dokumen', mulai: '16 Maret 2025', selesai: '22 Maret 2025' },
    { kegiatan: 'Tes Observasi', mulai: '25 Maret 2025', selesai: '27 Maret 2025' },
    { kegiatan: 'Pengumuman Hasil', mulai: '1 April 2025', selesai: '1 April 2025' },
    { kegiatan: 'Daftar Ulang', mulai: '2 April 2025', selesai: '15 April 2025' },
  ],

  alurPendaftaran: [
    {
      step: 1,
      judul: 'Isi Formulir Online',
      deskripsi: 'Lengkapi data calon siswa dan orang tua/wali melalui formulir SPMB Online.',
      ikon: '📝',
    },
    {
      step: 2,
      judul: 'Unggah Dokumen',
      deskripsi: 'Upload dokumen persyaratan: akta kelahiran, KK, foto, dan rapor.',
      ikon: '📄',
    },
    {
      step: 3,
      judul: 'Tes Observasi',
      deskripsi: 'Calon siswa mengikuti tes observasi di sekolah sesuai jadwal.',
      ikon: '✏️',
    },
    {
      step: 4,
      judul: 'Pengumuman',
      deskripsi: 'Hasil seleksi diumumkan melalui website dan dapat dicek secara online.',
      ikon: '📢',
    },
  ],

  persyaratan: [
    'Usia minimal 6 tahun pada 1 Juli 2025',
    'Fotokopi Akta Kelahiran (2 lembar)',
    'Fotokopi Kartu Keluarga (2 lembar)',
    'Pas foto 3x4 berlatar merah (4 lembar)',
    'Fotokopi KTP Orang Tua/Wali (2 lembar)',
    'Surat Keterangan Sehat dari dokter',
    'Rapor TK/PAUD (jika ada)',
    'Bukti pembayaran biaya pendaftaran',
  ],
}

export const statusContoh = [
  { noPendaftaran: 'SPMB-2025-0001', nama: 'Ahmad Rizky', status: 'Diterima' },
  { noPendaftaran: 'SPMB-2025-0002', nama: 'Siti Aisyah', status: 'Menunggu' },
  { noPendaftaran: 'SPMB-2025-0003', nama: 'Muhammad Farhan', status: 'Ditolak' },
]
