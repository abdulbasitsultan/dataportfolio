(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  const setNav = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    header.classList.toggle('nav-open', open);
  };

  if (header && toggle && nav) {
    toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setNav(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setNav(false);
    });
  }

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const contactForm = document.querySelector('.contact-form');
  const formStatus = document.querySelector('.form-status');
  const isLocalPreview = ['127.0.0.1', 'localhost'].includes(window.location.hostname);

  if (contactForm && formStatus && isLocalPreview) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.textContent = 'Local preview only. On Netlify, this message will submit to your site forms.';
      contactForm.reset();
    });
  }
})();
