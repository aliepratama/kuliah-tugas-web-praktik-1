<img src="https://i.ibb.co/VDdmzd5/ODcy-MEY5-Mk-Mt-REQy-Mi00-RDU3-LUI3-MEIt-NTZDNz-JFNUVGREMw.png" width="150" height="150"/>

# Tugas Membuat Web Tampilan Sederhana berbasis Flask

Nama: Muhammad Ali Pratama Putra

NIM: 5220411416

Mata Kuliah: Pemrograman Web Praktik

-------------------------------------------------

### List of Contents

<a href="#a-pendahuluan">A. Pendahuluan</a>

<a href="#b-pembahasan">B. Pembahasan</a>

<a href="#c-implementasi">C. Implementasi</a>

-------------------------------------------------

### A. Pendahuluan

Pada projek ini, saya membuat tampilan website portofolio saya sendiri. Saya juga membangun web dengan konsep RWD (Responsive Web Design) dengan tema yang simpel. Sebelum saya implementasi, saya melakukan perancangan prototype di aplikasi Figma, berikut saya lampirkan file figma dalam projek ini.

<a href="https://www.figma.com/file/Mbh2kumlnZbfrTJotSIqst/Portofolio-Sederhana?type=design&node-id=0%3A1&mode=design&t=uW1Aa42DbtnZ0zVO-1" target="_blank">Link Prototype Figma Web</a>

<img src="https://i.ibb.co/ypsgpYh/Screenshot-from-2023-10-19-07-32-24.png"/>



Untuk menjalankan projek ini, Anda dapat melakukan langkah-langkah berikut:

1. Membuat Virtual Environment

   ```
   virtualenv venv
   venv\Scripts\activate
   ```
2. Instalasi package requirement

   ```
   pip install -r requirements.txt
   ```
3. Menjalankan server

   ```
   flask run
   ```
4. Buka browser dan akses http://127.0.0.1:5000/
### B. Pembahasan
Karena pembahasan materi mengenai flask masih di tahap pengenalan, 
saya membuat projek ini hanya berfokus pada tampilan statis.
Bahasa yang saya gunakan hanya terdiri dari html, css, dan js tanpa
menggunakan framework atau library apapun. Saya menggunakan template
engine Jinja2 untuk mempermudah proses pemecahan komponen layout web saya.
Berikut adalah struktur folder dari projek ini.

```
- app
| - static
| | - css
| | | - style.css
| | - images
| | | - banyak file png
| | - js
| | | - index.js
| - templates
| | - partials
| | | - footer.html
| | | - header.html
| | | - main.html
| | | - navbar.html
| | - index.html
| | - layout.html
| - app.py
- .flaskenv
- .gitignore
- requirements.txt
- README.md
```
### C. Implementasi

Berikut adalah tampilan web yang saya buat.

1. Tampilan desktop

   <img src="https://i.ibb.co/zHXMdjn/Desktop.png"/>

2. Tampilan tablet

    <img src="https://i.ibb.co/1Txhb36/Tablet.png"/>
   
3.Tampilan mobile
    <img src="https://i.ibb.co/jDTT6HM/Mobile.png"/>