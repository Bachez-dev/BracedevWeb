class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.attractors = [];

    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    // Create particles
    const particleCount = Math.min(150, Math.floor((this.canvas.width * this.canvas.height) / 8000));

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        life: Math.random() * 100 + 50
      });
    }

    // Create attractors for logo effect
    this.createLogoAttractors();
  }

  createLogoAttractors() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;

    // Create attractors in BRACEDEV pattern
    const letters = ['B', 'R', 'A', 'C', 'E', 'D', 'E', 'V'];
    const spacing = 40;
    const startX = centerX - (letters.length * spacing) / 2;

    letters.forEach((letter, i) => {
      this.attractors.push({
        x: startX + i * spacing,
        y: centerY - 50,
        strength: 0.3,
        radius: 30
      });
    });
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  updateParticles() {
    this.particles.forEach((particle, index) => {
      // Apply attractor forces
      this.attractors.forEach(attractor => {
        const dx = attractor.x - particle.x;
        const dy = attractor.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < attractor.radius) {
          const force = (attractor.radius - distance) / attractor.radius * attractor.strength;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }
      });

      // Mouse interaction
      const mouseDistance = Math.sqrt(
        Math.pow(this.mouse.x - particle.x, 2) +
        Math.pow(this.mouse.y - particle.y, 2)
      );

      if (mouseDistance < 100) {
        const force = (100 - mouseDistance) / 100;
        particle.vx += (particle.x - this.mouse.x) * force * 0.001;
        particle.vy += (particle.y - this.mouse.y) * force * 0.001;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Boundary collision
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
      }

      // Update life
      particle.life -= 0.1;
      if (particle.life <= 0) {
        particle.x = Math.random() * this.canvas.width;
        particle.y = Math.random() * this.canvas.height;
        particle.life = Math.random() * 100 + 50;
        particle.opacity = Math.random() * 0.4 + 0.1;
      }
    });
  }

  drawParticles() {
    this.particles.forEach(particle => {
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = '#000000';
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  drawConnections() {
    this.particles.forEach((particle, i) => {
      this.particles.slice(i + 1).forEach(otherParticle => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) +
          Math.pow(particle.y - otherParticle.y, 2)
        );

        if (distance < 80) {
          this.ctx.save();
          this.ctx.globalAlpha = (80 - distance) / 80 * 0.1;
          this.ctx.strokeStyle = '#000000';
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.stroke();
          this.ctx.restore();
        }
      });
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateParticles();
    this.drawConnections();
    this.drawParticles();

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle system
const canvas = document.getElementById('particleCanvas');
const particleSystem = new ParticleSystem(canvas);

function animateCounter() {
  const counter = document.getElementById('counter');
  let count = 0;
  const target = 100;
  const duration = 6000; // 6 seconds
  const increment = target / (duration / 50); // Update every 50ms

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    counter.textContent = Math.floor(count).toString().padStart(2, '0');
  }, 50);
}

// Preloader sequence
function startPreloader() {
  const preloader = document.getElementById("preloader");
  const companyName = document.getElementById("companyName");
  const mainContent = document.getElementById("mainContent");

  // Disable scrolling during preload
  document.body.style.overflow = "hidden";

  animateCounter(); // your counter animation

  setTimeout(() => {
    // Fade out preloader
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";

      // Show company name
      companyName.classList.add("show");

      // After 2s, fade in main content
      setTimeout(() => {
        companyName.style.display = "none";
        mainContent.classList.add("revealed");

        // Restore scrolling
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
      }, 2000);
    }, 1000); // matches fade-out
  }, 6000); // matches preloader duration
}

// Start the experience
window.addEventListener('load', startPreloader);

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
  const cursor = { x: e.clientX, y: e.clientY };

  // Update particle system mouse position
  particleSystem.mouse = cursor;
});