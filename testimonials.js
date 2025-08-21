  const testimonials = [
    {
      quote: "Exceeded our expectations with innovative designs - Exceeded our expectations with innovative designs.",
      name: "Samantha",
      role: "CEO",
      img: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "Their creativity knows no bounds.",
      name: "Isabella",
      role: "Design Head",
      img: "https://i.pravatar.cc/150?img=22"
    },
    {
      quote: "Unmatched visual storytelling.",
      name: "Gabrielle",
      role: "CMO",
      img: "https://i.pravatar.cc/150?img=33"
    },
    {
      quote: "They always deliver beyond expectations.",
      name: "John",
      role: "CTO",
      img: "https://i.pravatar.cc/150?img=44"
    },
    {
      quote: "Game-changer for our brand's growth.",
      name: "Natalie",
      role: "Founder",
      img: "https://i.pravatar.cc/150?img=55"
    }
  ];

  function createCard({quote, name, role, img}) {
    return `
      <div class="testimonial-card">
        <div><i class="fa-solid fa-quote-left"></i></div>
        <div class="quote">${quote}</div>
        <div class="user">
          <img src="${img}" alt="${name}">
          <div class="user-info">
            <span>${name}</span>${role}
          </div>
        </div>
      </div>
    `;
  }

  function setupInfiniteScroll(containerId, direction = 'left') {
    const container = document.getElementById(containerId);
    const cardsHTML = testimonials.map(createCard).join('');
    container.innerHTML = cardsHTML + cardsHTML; 

    let scrollPos = 0;
    const speed = 0.5; 

    function animate() {
      scrollPos += (direction === 'left' ? speed : -speed);
      if (direction === 'left') {
        if (scrollPos >= container.scrollWidth / 2) scrollPos = 0;
      } else {
        if (scrollPos <= 0) scrollPos = container.scrollWidth / 2;
      }
      container.style.transform = `translateX(${-scrollPos}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }

  setupInfiniteScroll('track1', 'right');
  setupInfiniteScroll('track2', 'left');