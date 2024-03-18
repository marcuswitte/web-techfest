// script.js

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    prevBtn.addEventListener('click', () => {
      moveGallery(-1);
    });
  
    nextBtn.addEventListener('click', () => {
      moveGallery(1);
    });
  
    let currentIndex = 0; // Variável para manter o controle do índice atual

    function moveGallery(direction) {
      const gallery = document.querySelector('.gallery');
      const galleryItems = document.querySelectorAll('.gallery-item');
    
      currentIndex += direction; // Incrementa ou decrementa o índice atual conforme a direção
    
      // Verifica se o índice está dentro dos limites da galeria
      if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
      } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
      }
    
      setActiveSlide(currentIndex);
    }
  
    function setActiveSlide(index) {
      const indicator = document.querySelectorAll('.gallery-indicator');
      const offsetX = -index * galleryItems[0].offsetWidth;
      gallery.style.transform = `translateX(${offsetX}px)`;
      indicator.forEach((el, i) => {
        el.classList.toggle('active', i === index);
      });
    }
  });
  