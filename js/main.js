/* =========================================
   Karaoke Wanwan — main.js
   ========================================= */

// ── Lucide icons ──
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// ── Language selector ──
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Quick-nav active state on scroll ──
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks  = Array.from(document.querySelectorAll('.qnav-link[href^="#"]'));

const HEADER_H = 56 + 44; // header + qnav height

const activateNav = () => {
  const scrollY = window.scrollY + HEADER_H + 10;
  let current = sections[0].id;

  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY) current = sec.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', activateNav, { passive: true });
activateNav();

// ── Smooth-scroll for anchor links (fallback for older browsers) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_H + 4;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
