
  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.exp-item, .proj-card').forEach(el => observer.observe(el));

  // Stagger proj cards
  document.querySelectorAll('.proj-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  // make whole project card clickable (delegates to the small live/github link inside)
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => {
      const link = card.querySelector('.proj-live');
      if (link && link.href) {
        window.open(link.href, '_blank');
      }
    });
  });

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--accent3)';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }

  // Active nav highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });
