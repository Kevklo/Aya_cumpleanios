
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // El 10% del elemento debe ser visible antes de que la animación se active
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          if (entry.target.classList.contains('section_soky') || 
              entry.target.classList.contains('section_prro') || 
              entry.target.classList.contains('section_tsu')) {
            entry.target.classList.add('fade-in');
          } else if (entry.target.classList.contains('transicion_tsu') || 
                     entry.target.classList.contains('transicion_prro') || 
                     entry.target.classList.contains('section_kunklo') ||
                     entry.target.classList.contains('transicion_raza') || 
                     entry.target.classList.contains('transicion_yuki') || 
                     entry.target.classList.contains('transicion_soky') || 
                     entry.target.classList.contains('transicion_rivo')) {
            entry.target.classList.add('slide-in');
          }
          observer.unobserve(entry.target); // Deja de observar el elemento una vez que se ha animado
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.hidden');
    elementsToAnimate.forEach(element => observer.observe(element));
  });
