// عامل الخدمة: يسمح بتثبيت المنصة كتطبيق فقط.
// لا يخزّن أي بيانات ولا يتدخل في طلبات الخادم (الحفظ والتقارير) إطلاقًا.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;          // كل ما سوى فتح الصفحة يمر مباشرة دون أي تدخل
  e.respondWith(fetch(e.request));
});
