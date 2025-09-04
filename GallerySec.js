    let xPos = 0;
    const total = 10;
    const ring = document.querySelector("#ring");
    const images = document.querySelectorAll(".img");

    // Parameters for curve
    const radius = 800; // controls how curved the arc is
    const angleStep = 360 / total;

    // Arrange items initially
    gsap.set(images, {
      rotationY: (i) => i * -angleStep,
      transformOrigin: `50% 50% ${radius}px`,
      backfaceVisibility: "hidden"
    });

    // Keep track of "scroll" position
    let scrollOffset = 0;

    function updatePositions() {
      images.forEach((img, i) => {
        let angle = (i * -angleStep) + scrollOffset;
        gsap.set(img, {
          rotationY: angle,
          transformOrigin: `50% 50% ${radius}px`
        });
      });
    }

    // Initial position
    updatePositions();

    Draggable.create(dragger, {
      type: "x",
      inertia: true,
      onDragStart: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
      },
      onDrag: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        const delta = Math.round(e.clientX) - xPos;

        // move images left/right
        scrollOffset += delta * 0.2; // adjust 0.2 for speed
        updatePositions();

        xPos = Math.round(e.clientX);
      },
      onDragEnd: () => {
        gsap.set(dragger, { x: 0, y: 0 });
      }
    });