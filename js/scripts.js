const header = document.getElementById('main-header');

// Efeito de encolher o header ao scrollar 
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Efeito de revelação gradual das seções (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Remove a classe ao subir apenas se estiver fora da visão superior
            if (entry.boundingClientRect.top > 0) {
                entry.target.classList.remove('active');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

// Função para copiar email para o clipboard
function copyEmail() {
    const email = "mariotoda098@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const t = document.getElementById("toast");
        t.className = "show";
        setTimeout(() => {
            t.className = "";
        }, 3000);
    });
}
