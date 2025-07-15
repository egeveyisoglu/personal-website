const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statik dosyaları sunmak için public klasörünü kullan
app.use(express.static(path.join(__dirname, 'public')));

// Tüm URL'leri index.html'ye yönlendir
app.get(['/', '/about', '/education', '/experience', '/skills', '/certificates', '/projects', '/contact'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});