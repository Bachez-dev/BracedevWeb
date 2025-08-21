    const wrapper = document.querySelector('.blog-wrapper');
    const dots = document.querySelectorAll('.dot');
    const leftBtn = document.querySelector('.arrow-btn.left');
    const rightBtn = document.querySelector('.arrow-btn.right');

    let currentIndex = 0;
    const cardWidth = 320; // card + gap

    function updateDots(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    leftBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        wrapper.scrollTo({ left: currentIndex * cardWidth * 3, behavior: 'smooth' });
        updateDots(currentIndex);
      }
    });

    rightBtn.addEventListener('click', () => {
      if (currentIndex < dots.length - 1) {
        currentIndex++;
        wrapper.scrollTo({ left: currentIndex * cardWidth * 3, behavior: 'smooth' });
        updateDots(currentIndex);
      }
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        wrapper.scrollTo({ left: currentIndex * cardWidth * 3, behavior: 'smooth' });
        updateDots(currentIndex);
      });
    });