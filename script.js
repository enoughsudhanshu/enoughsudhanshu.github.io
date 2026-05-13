console.log("Enough Sudhanshu Portfolio Loaded");

// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.querySelector('.loading-screen');
  const loadingText = loadingScreen ? loadingScreen.querySelector('.loading-text') : null;
  const loadingSteps = [
    'Initializing AI Infrastructure...',
    'Loading Deployment Systems...',
    'Connecting Cloud Architecture...',
    'Launching Experience...'
  ];

  if (loadingScreen) {
    let step = 0;
    const stepInterval = setInterval(() => {
      if (loadingText) {
        loadingText.textContent = loadingSteps[step] || loadingSteps[loadingSteps.length - 1];
      }
      step += 1;
      if (step >= loadingSteps.length) {
        clearInterval(stepInterval);
      }
    }, 700);

    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 3600);
  }
});

// Scroll Progress Bar
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
  document.body.appendChild(progressBar);

  const progressBarInner = progressBar.querySelector('.scroll-progress-bar');

  function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBarInner.style.width = scrollPercent + '%';
  }

  window.addEventListener('scroll', updateProgressBar);
  updateProgressBar();
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});

// Magnetic Buttons
document.addEventListener('DOMContentLoaded', function() {
  const magneticButtons = document.querySelectorAll('.btn');

  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', function() {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
});

// Dynamic Lighting
document.addEventListener('DOMContentLoaded', function() {
  const dynamicLight = document.createElement('div');
  dynamicLight.className = 'dynamic-light';
  document.body.appendChild(dynamicLight);

  document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    dynamicLight.style.setProperty('--mouse-x', x + '%');
    dynamicLight.style.setProperty('--mouse-y', y + '%');
  });
});

// Particle System
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.width = (Math.random() * 4 + 2) + 'px';
    particle.style.height = particle.style.width;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 15000);
  }

  // Create initial particles
  for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, Math.random() * 3000);
  }

  // Create new particles periodically
  setInterval(createParticle, 2000);
});

// Scroll animations with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const fadeElements = document.querySelectorAll('.card, .founder-image, .hero-panel, .stats-grid, .faq-grid, .bento-item');
  fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Add slide animations for specific sections
  const slideLeftElements = document.querySelectorAll('.hero-content');
  slideLeftElements.forEach(el => {
    el.classList.add('slide-in-left');
    observer.observe(el);
  });

  const slideRightElements = document.querySelectorAll('.hero-image');
  slideRightElements.forEach(el => {
    el.classList.add('slide-in-right');
    observer.observe(el);
  });
});

// Animated Stats Counter
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 20);
}

// Initialize animated counters when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const statNumbers = document.querySelectorAll('.stat-number');

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        statsObserver.unobserve(entry.target);
      }
    });
  });

  statNumbers.forEach(stat => {
    statsObserver.observe(stat);
  });
});

// Smooth parallax effect for background elements
document.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-orb, .floating-element');

  parallaxElements.forEach(element => {
    const rate = element.dataset.parallax || 0.5;
    element.style.transform = `translateY(${scrolled * rate}px)`;
  });
});

// Enhanced hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });
});