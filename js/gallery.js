document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  const fullscreenContainer = document.getElementById('fullscreen-container');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  const imageArray = Array.from(galleryImages).map(img => img.src);
  let currentIndex = 0;

  function openFullscreen(index) {
    currentIndex = index;
    fullscreenImage.src = imageArray[currentIndex];
    fullscreenContainer.style.display = 'flex';
  }

  function closeFullscreen() {
    fullscreenContainer.style.display = 'none';
    fullscreenImage.src = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    fullscreenImage.src = imageArray[currentIndex];
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    fullscreenImage.src = imageArray[currentIndex];
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openFullscreen(index));
  });

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFullscreen();
    } else if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });

  fullscreenContainer.addEventListener('click', (e) => {
    if (e.target === fullscreenContainer) {
      closeFullscreen();
    }
  });
});
