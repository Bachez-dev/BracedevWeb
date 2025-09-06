gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('load', () => {
      const cardsTrack = document.getElementById('cardsTrack');
      const cards = gsap.utils.toArray('.card');
      const countStack = document.getElementById('countStack');
      const numberEls = countStack.querySelectorAll('h1');
      const railFill = document.getElementById('railFill');
      const teamSection = document.getElementById('teamSection');

      // compute sizes (card width + gap)
      function compute() {
        const cardRect = cards[0].getBoundingClientRect();
        const gap = parseFloat(getComputedStyle(cardsTrack).gap) || 36;
        const step = Math.round(cardRect.width + gap);
        const numberHeight = numberEls[0].offsetHeight || 160;
        const totalTravel = step * (cards.length - 1);
        return { step, numberHeight, totalTravel };
      }

      let { step, numberHeight, totalTravel } = compute();

      // Recompute on resize
      window.addEventListener('resize', () => {
        ({ step, numberHeight, totalTravel } = compute());
        ScrollTrigger.refresh();
      });

      // Create ScrollTrigger that pins while we scroll through the cards
      ScrollTrigger.create({
        trigger: teamSection,
        start: 'top top',
        end: () => `+=${totalTravel}`, // pin until we've travelled across all cards
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: self => {
          // raw progress across (0 .. cards.length-1)
          const raw = self.progress * (cards.length - 1);

          // move cards horizontally (set for immediate frame-perfect positioning)
          gsap.set(cardsTrack, { x: -raw * step });

          // move stacked numbers vertically so the active number is visible
          gsap.set(countStack, { y: -raw * numberHeight });

          // highlight nearest active index
          const active = Math.round(raw);
          cards.forEach((c, i) => c.classList.toggle('active', i === active));
          numberEls.forEach((n, i) => n.classList.toggle('active', i === active));

          // fill rail progress between top/bottom of rail based on section progress
          gsap.set(railFill, { height: `${self.progress * 100}%` });
        }
      });

      // Optional: set initial states (safety)
      cards.forEach((c, i) => c.classList.toggle('active', i === 0));
      numberEls.forEach((n, i) => n.classList.toggle('active', i === 0));
    });