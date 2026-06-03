# Al Ittihaad Website Design Rules

## Project Identity

Nama project: SDIT Al Ittihaad Website  
Framework: Vue 3 + Vite + TailwindCSS  
Style utama: Modern School Profile UI  
Konsep desain: Clean, soft, rounded, elegant, minimal Islamic education branding

---

# Design Rules

## 1. Layout Rules

Gunakan layout:

- `max-w-screen-2xl`
- `px-margin-mobile` untuk mobile
- `px-margin-desktop` untuk desktop
- `rounded-3xl` untuk card besar
- `rounded-2xl` untuk card kecil
- `gap-6` atau `gap-xl` antar section

Jangan:

- membuat layout sempit
- menggunakan container bootstrap
- membuat padding terlalu kecil
- membuat card kotak tajam

---

## 2. Bento Grid Rules

Gunakan pola bento:

- Featured card besar di kiri
- Secondary card kecil di kanan
- Tinggi card konsisten

Gunakan:

```html
grid grid-cols-1 md:grid-cols-12 gap-6
```

Featured card:

```html
md:col-span-7 md:row-span-2
```

Card biasa:

```html
md:col-span-5
```

Jangan:

- mengubah span card sembarangan
- membuat tinggi card tidak sejajar
- membuat ukuran gambar berbeda antar card

---

## 3. Card Design Rules

Semua card WAJIB:

- `rounded-3xl`
- `border border-outline-variant/10`
- `shadow-md` atau `shadow-lg`
- `overflow-hidden`
- `transition-all duration-500`
- `hover:shadow-xl`

Gunakan:

```html
bg-surface-container-lowest
```

Jangan:

- memakai warna mencolok
- memakai border tebal
- memakai shadow terlalu gelap
- memakai efek neon

---

## 4. Image Rules

Semua gambar:

```html
w-full h-full object-cover
```

Wrapper image:

```html
overflow-hidden
```

Hover image:

```html
transition-transform duration-700 group-hover:scale-110
```

Jangan:

- `object-contain`
- stretch image
- gambar blur
- aspect ratio tidak konsisten

---

## 5. Typography Rules

Heading:

```html
text-xl font-bold
```

Featured heading:

```html
text-3xl font-bold
```

Body text:

```html
text-on-surface-variant leading-relaxed
```

Gunakan font:

- Plus Jakarta Sans

Jangan:

- font serif
- font condensed
- font dekoratif

---

## 6. Color Rules

Primary:

```html
text-primary
bg-primary
```

Surface:

```html
bg-surface-container-lowest
bg-surface-container
```

Text:

```html
text-on-surface
text-on-surface-variant
```

Jangan:

- warna terlalu kontras
- gradient berlebihan
- warna neon
- pure black

---

## 7. Icon Rules

Gunakan:

```html
material-symbols-outlined
```

Wrapper icon:

```html
p-2 bg-primary/10 rounded-xl
```

Ukuran:

```html
text-primary
```

Jangan:

- icon random
- icon colorful
- icon 3D

---

## 8. Section Rules

Semua section:

```html
py-24
```

Heading section:

```html
text-center mb-16
```

Subtitle:

```html
text-on-surface-variant mt-4
```

---

## 9. Animation Rules

Gunakan animasi halus:

```html
transition-all duration-500
```

Hover:

```html
hover:-translate-y-1
hover:shadow-xl
```

Jangan:

- animasi bouncing
- animasi cepat
- efek glitch
- rotate berlebihan

---

## 10. Responsive Rules

Mobile:

```html
grid-cols-1
```

Desktop:

```html
md:grid-cols-12
```

Padding mobile:

```html
px-4
```

Padding desktop:

```html
md:px-10
```

Jangan:

- fixed width
- overflow horizontal
- font terlalu kecil di mobile

---

# UI Characteristics

## Tampilan yang harus dipertahankan

- clean
- modern
- akademik
- elegan
- soft shadow
- rounded UI
- airy spacing
- premium school profile

## Tampilan yang dilarang

- dashboard admin style
- cyberpunk
- glassmorphism berlebihan
- neumorphism
- brutalism
- dark gaming UI

---

# Component Standard

## Standard Card

```html
<div class="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-md border border-outline-variant/10 hover:shadow-xl transition-all duration-500">
```

---

## Standard Image

```html
<img
  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
```

---

## Standard Content

```html
<div class="p-6">
```

---

## Standard Icon

```html
<span class="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-xl">
```

---

# Spacing System

Gunakan:

- `gap-3`
- `gap-4`
- `gap-6`
- `p-6`
- `p-8`
- `mb-3`
- `mb-4`
- `mb-5`

Jangan:

- spacing random
- padding terlalu rapat
- margin terlalu besar

---

# Final Rule

Setiap redesign WAJIB:

- mempertahankan bento layout
- mempertahankan hierarchy visual
- mempertahankan spacing
- mempertahankan rounded style
- mempertahankan soft academic look
- mempertahankan responsive structure

Prioritas utama:

1. Konsistensi layout
2. Konsistensi spacing
3. Konsistensi warna
4. Konsistensi card
5. Konsistensi typography

---

# 11. Performance Optimization Rules

Tujuan utama:

- loading cepat
- responsive di semua device
- minim lag
- minim CLS
- skor Lighthouse tinggi
- hemat resource browser

Target performa:

- Lighthouse Performance minimal 90
- First Contentful Paint < 2s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

---

## 11.1 Image Optimization Rules

Gunakan:

```html
loading="lazy"
decoding="async"
```

Semua image wajib:

```html
class="w-full h-full object-cover"
```

Gunakan format:

- `.webp`
- `.avif`

Jangan:

- upload gambar > 300kb
- menggunakan PNG besar
- menggunakan gambar 4K
- memakai image tanpa compression

Ukuran rekomendasi:

- thumbnail: 400px
- hero image: 1200px
- card image: 600px

Gunakan:

```html
<img
  loading="lazy"
  decoding="async"
  class="w-full h-full object-cover"
/>
```

---

## 11.2 Animation Performance Rules

Gunakan hanya:

```html
transform
opacity
```

Hindari:

- animasi width
- animasi height
- animasi top/left
- blur berlebihan
- backdrop-filter berlebihan

Gunakan:

```html
transition-transform
transition-opacity
```

Jangan:

```html
transition-all
```

kecuali benar-benar diperlukan.

---

## 11.3 Responsive Performance Rules

Gunakan responsive:

```html
grid-cols-1
md:grid-cols-12
```

Gunakan ukuran fleksibel:

```html
w-full
max-w-screen-2xl
```

Jangan:

- fixed width px besar
- overflow horizontal
- element absolute berlebihan
- height fix yang merusak mobile

Gunakan:

```html
min-h
max-w
aspect-video
```

---

## 11.4 Tailwind Rules

Gunakan utility seperlunya.

Jangan:

- class duplicate
- nested terlalu dalam
- utility tidak dipakai
- custom CSS berlebihan

Gunakan:

```html
@apply
```

untuk component berulang.

---

## 11.5 Vue Performance Rules

Gunakan:

```js
defineAsyncComponent()
```

untuk section besar.

Gunakan lazy load page:

```js
const HomeView = () => import('@/views/HomeView.vue')
```

Jangan:

- import semua component sekaligus
- watcher berlebihan
- computed tidak dipakai
- render list besar tanpa key

Semua `v-for` wajib:

```html
:key="item.id"
```

---

## 11.6 CSS Rules

Gunakan:

- Tailwind utility
- scoped style seperlunya

Jangan:

- CSS global besar
- selector terlalu panjang
- !important berlebihan
- shadow berat
- blur besar

Batasi:

```css
backdrop-filter: blur(12px);
```

---

## 11.7 Font Optimization Rules

Gunakan maksimal:

- 1 family font
- 2 weight utama

Gunakan:

```html
display=swap
```

Contoh:

```html
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap
```

Jangan:

- import banyak font
- import italic tidak dipakai
- import semua weight

---

## 11.8 Component Reuse Rules

Semua card seragam WAJIB dibuat reusable component.

Contoh:

```html
<BaseCard />
<FacilityCard />
<ArticleCard />
```

Tujuan:

- kode lebih ringan
- maintain lebih mudah
- konsisten

---

## 11.9 Shadow Rules

Gunakan:

```html
shadow-md
shadow-lg
```

Jangan:

```html
shadow-2xl
```

secara berlebihan.

---

## 11.10 Mobile Optimization Rules

Target mobile:

- font tetap terbaca
- tap area nyaman
- tidak overflow
- gambar tetap proporsional

Gunakan:

```html
text-sm md:text-base
p-4 md:p-6
```

Jangan:

- text terlalu kecil
- card terlalu padat
- gap terlalu rapat

---

## 11.11 Accessibility Rules

Semua image wajib:

```html
alt=""
```

Semua button wajib:

- hover state
- focus state
- accessible text

Gunakan contrast yang jelas.

---

## 11.12 SEO Rules

Semua page wajib:

- title unik
- meta description
- semantic HTML

Gunakan:

```html
<header>
<main>
<section>
<footer>
```

Jangan semua memakai:

```html
<div>
```

---

## 11.13 Lighthouse Rules

Sebelum deploy wajib cek:

- Lighthouse
- PageSpeed Insights

Target:

- Performance > 90
- Accessibility > 90
- Best Practices > 90
- SEO > 90

---

## 11.14 Production Rules

Sebelum production:

- compress image
- remove console.log
- remove unused CSS
- remove unused component
- lazy load image
- lazy load route
- minify asset

Gunakan:

```bash
npm run build
```

Cek hasil build:

- asset tidak terlalu besar
- chunk tidak berlebihan

---

## 11.15 Final Performance Priority

Prioritas utama:

1. Fast loading
2. Responsive layout
3. Smooth interaction
4. Clean hierarchy
5. Consistent spacing
6. Optimized image
7. Reusable component
8. Minimal re-render
9. Mobile first
10. Lighthouse optimization

````md
# Dark Mode Rules

## Dark Mode Identity

Tema dark mode WAJIB mengikuti karakter berikut:

- Academic premium UI
- Elegant dark surface
- Soft cyan accent
- Calm Islamic education atmosphere
- High readability
- Soft contrast
- Modern editorial school layout

Jangan:

- memakai dark gaming style
- memakai cyberpunk neon
- memakai warna ungu neon
- memakai gradient berlebihan
- memakai glassmorphism berat
- memakai hitam pekat full black

---

# Dark Mode Color System

## Background

Gunakan:

```html
bg-background
````

Hex:

```css
#0b1326
```

Jangan:

```css
#000000
```

---

## Surface Layer

Gunakan hirarki surface berikut:

```html
bg-surface
bg-surface-container-lowest
bg-surface-container-low
bg-surface-container
bg-surface-container-high
bg-surface-container-highest
```

Tujuan:

* memberi depth bertingkat
* membuat UI terasa premium
* menjaga keterbacaan

---

## Primary Color

Gunakan:

```html
bg-primary
text-primary
border-primary
```

Primary utama:

```css
#78d7c7
```

Karakter:

* soft cyan
* elegant
* modern academic
* tidak terlalu terang

Jangan:

* teal neon
* biru electric
* hijau terang
* gradient rainbow

---

## Text Rules

### Heading

Gunakan:

```html
text-on-surface
```

### Secondary Text

Gunakan:

```html
text-on-surface-variant
```

### White Text Overlay Hero

Gunakan:

```html
text-white
text-white/90
```

Jangan:

```html
text-gray-500
text-black
```

---

# Navbar Rules

Navbar WAJIB:

```html
sticky top-0 z-50
bg-surface
border-b border-outline-variant
```

Karakter navbar:

* tipis
* clean
* floating feel
* elegan
* tidak berat

Menu aktif:

```html
text-primary border-b-2 border-primary
```

Hover menu:

```html
hover:text-primary transition-colors
```

Jangan:

* navbar transparan penuh
* navbar blur berlebihan
* shadow besar
* menu terlalu terang

---

# Hero Section Rules

## Hero Container

Gunakan:

```html
relative overflow-hidden rounded-3xl
```

Tinggi hero:

```html
h-[500px]
```

---

## Hero Overlay

WAJIB gunakan overlay gradient:

```html
absolute inset-0
bg-gradient-to-t
from-background
via-background/50
to-transparent
```

Tujuan:

* menjaga readability
* memberi cinematic feel
* membuat gambar lebih elegan

---

## Hero Typography

Heading:

```html
text-4xl md:text-5xl font-bold
```

Body:

```html
text-on-surface-variant
```

Gunakan:

```html
max-w-3xl
```

---

# Card Dark Mode Rules

## Standard Card

Gunakan:

```html
bg-surface-container
border border-outline-variant
rounded-3xl
overflow-hidden
transition-all duration-500
```

Hover:

```html
hover:border-primary/40
hover:-translate-y-1
hover:shadow-xl
```

Jangan:

* border putih
* shadow hitam pekat
* glow neon
* efek blur berat

---

## Card Image Rules

Gunakan:

```html
h-56 overflow-hidden
```

Image:

```html
w-full h-full object-cover
```

Hover:

```html
group-hover:scale-105
transition-transform duration-700
```

---

# Sidebar Rules

Sidebar WAJIB:

```html
space-y-8
```

Sidebar card:

```html
bg-surface-container
border border-outline-variant
rounded-3xl
p-6
```

Judul sidebar:

```html
flex items-center gap-2
text-xl font-bold
```

Accent line:

```html
w-1.5 h-6 bg-primary rounded-full
```

---

# Search Input Rules

Gunakan:

```html
bg-surface-container-low
border border-outline-variant
rounded-full
```

Focus state:

```html
focus:border-primary
focus:ring-1
focus:ring-primary
```

Jangan:

* input putih terang
* shadow input besar
* border terlalu tebal

---

# Category Button Rules

## Active Button

Gunakan:

```html
bg-primary
text-on-primary
rounded-full
```

## Inactive Button

Gunakan:

```html
border border-outline
text-on-surface-variant
hover:bg-surface-container-high
```

Jangan:

* tombol glossy
* gradient button
* efek glow

---

# Footer Rules

Footer WAJIB:

```html
bg-surface-container-low
border-t border-outline-variant
```

Layout footer:

```html
grid grid-cols-1 md:grid-cols-3 gap-gutter
```

Social icon:

```html
w-10 h-10
rounded-full
bg-surface-container-highest
hover:text-primary
```

---

# Glass Card Rules

Glass card hanya boleh dipakai untuk:

* newsletter
* CTA section
* floating info

Gunakan:

```css
background: rgba(30, 41, 59, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(51, 65, 85, 0.5);
```

Jangan gunakan glass effect pada:

* seluruh layout
* navbar utama
* card artikel utama

---

# Border Rules

Gunakan:

```html
border-outline-variant
```

Opacity:

```html
border-outline-variant/30
border-outline-variant/50
```

Jangan:

* border putih terang
* border hitam pekat

---

# Animation Rules

Gunakan animasi:

```html
transition-all duration-300
transition-all duration-500
transition-transform duration-700
```

Hover:

```html
hover:-translate-y-1
hover:border-primary/40
```

Jangan:

* bounce
* rotate besar
* shake
* glitch
* parallax berat

---

# Typography Rules

Gunakan:

```html
font-family: 'Plus Jakarta Sans'
```

Heading:

```html
font-bold
tracking-tight
```

Body:

```html
leading-relaxed
```

Jangan:

* serif
* condensed
* decorative font

---

# Spacing Rules

Gunakan:

```html
gap-3
gap-4
gap-6
gap-8
p-6
p-8
px-margin-mobile
md:px-margin-desktop
```

Section:

```html
py-20
md:py-24
```

Jangan:

* padding terlalu kecil
* margin random
* layout rapat

---

# Responsive Rules

## Mobile

Gunakan:

```html
grid-cols-1
px-4
```

## Desktop

Gunakan:

```html
md:grid-cols-12
md:px-margin-desktop
```

Jangan:

* fixed width
* overflow horizontal
* font terlalu kecil

---

# Dark Mode Performance Rules

## Hindari Efek Berat

Jangan gunakan:

* backdrop blur besar di banyak element
* animation infinite
* shadow terlalu banyak
* filter blur besar
* parallax scroll
* video background

---

## Image Optimization

WAJIB:

```html
loading="lazy"
decoding="async"
```

Gunakan format:

* webp
* avif

Jangan:

* PNG besar
* JPG resolusi tinggi tanpa kompresi

---

## Animation Optimization

Gunakan hanya:

```html
transform
opacity
```

Hindari:

```html
width animation
height animation
box-shadow animation
```

---

## Tailwind Rules

Gunakan utility seperlunya.

Jangan:

* class duplicate
* nested wrapper berlebihan
* inline style berlebihan

---

## DOM Rules

Jangan:

* div terlalu banyak
* wrapper tidak perlu
* section kosong

Struktur harus:

* bersih
* ringan
* mudah maintain

---

# Final Visual Characteristics

Dark mode WAJIB terasa:

* modern
* premium
* akademik
* islami modern
* clean
* soft contrast
* elegant
* editorial
* high readability

Bukan:

* gaming UI
* cyberpunk
* neon UI
* hacker style
* dashboard admin
* brutalism

```
```
