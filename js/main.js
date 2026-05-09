/* ===== tac-diaphragm.com - Main JavaScript ===== */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Language Switch =====
  const savedLang = localStorage.getItem('tac_lang');
  if (savedLang && typeof switchLang === 'function') {
    switchLang(savedLang);
  }

  // ===== Mobile Menu Toggle =====
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== Header scroll effect =====
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ===== Active nav link =====
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // ===== Scroll animation (fade-in) =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ===== Contact Form (if present) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById('formName');
      const email = document.getElementById('formEmail');
      const company = document.getElementById('formCompany');
      let valid = true;

      [name, email, company].forEach(field => {
        if (field && !field.value.trim()) {
          field.style.borderColor = '#e53e3e';
          valid = false;
        } else if (field) {
          field.style.borderColor = '';
        }
      });

      if (!valid) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      // Build mailto link
      const message = document.getElementById('formMessage');
      const sample = document.getElementById('formSample');

      let subject = encodeURIComponent('Inquiry from tac-diaphragm.com');
      let body = `Name: ${name.value}%0AEmail: ${email.value}%0ACompany: ${company.value}`;
      if (document.getElementById('formPhone')) {
        body += `%0APhone: ${document.getElementById('formPhone').value}`;
      }
      if (message && message.value) {
        body += `%0AMessage: ${message.value}`;
      }
      if (sample && sample.checked) {
        body += `%0A%0A[Technical sample requested]`;
      }

      // Open in Gmail (or default mail client)
      window.open(`mailto:johnsonloveusa@gmail.com?subject=${subject}&body=${body}`);

      // Show success
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '✓ ' + (document.documentElement.lang === 'zh' ? '已发送' : 'Sent');
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }

  // ===== Toast notification =====
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `toast ${type}`;
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
  window.showToast = showToast;

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
