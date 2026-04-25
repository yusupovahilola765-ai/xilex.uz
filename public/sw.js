self.addEventListener('install', (event) => {
  console.log('SW installed');
});

self.addEventListener('fetch', (event) => {
  // Offline rejim uchun keshni shu yerda boshqarish mumkin
});
