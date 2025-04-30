document.addEventListener('DOMContentLoaded', function() {
    // Botón volver arriba
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formStatus = document.getElementById('form-status');
            
            if (!name || !email || !message) {
                formStatus.textContent = 'Por favor, completa todos los campos.';
                formStatus.style.color = 'red';
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formStatus.textContent = 'Por favor, ingresa un email válido.';
                formStatus.style.color = 'red';
                return;
            }
            
            // Simulación de envío exitoso
            formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
            formStatus.style.color = 'green';
            contactForm.reset();
            
            // Limpiar mensaje después de 5 segundos
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
    
    // Efecto hover para las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});