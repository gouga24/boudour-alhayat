// scripts.js

// مثال لتأثير عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// مثال لتأثير عند النقر على زر "ابدأ الآن"
document.querySelector('.hero-section a').addEventListener('click', function() {
    alert('مرحبا بك في أكاديمية بذور الحياة!');
});