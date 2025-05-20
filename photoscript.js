const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

// Inicializa o primeiro slide como ativo
slides[currentSlide].classList.add('active');

function nextSlide() {
  // Remove a classe 'active' do slide atual
  slides[currentSlide].classList.remove('active');

  // Atualiza o índice
  currentSlide = (currentSlide + 1) % slides.length;

  // Adiciona a classe 'active' ao novo slide
  slides[currentSlide].classList.add('active');
}

// Troca de slide a cada 5 segundos
setInterval(nextSlide, 8000);
