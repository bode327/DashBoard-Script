<script data-name="Mod Login" data-type="style">
/* ==========================================================================
   CUSTOM LOGIN - OPTIMIZED EDITION (GPU ACCELERATED)
   ========================================================================== */
const CONFIG = {
    colors: {
        bgStart: "#0f172a", 
        bgEnd: "#1e3a8a",
        cardGradient: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)", 
        primary: "#2563eb", 
        primaryHover: "#1d4ed8",
        dotColor: "rgba(255,255,255,0.3)", 
        dotActive: "#ffffff"
    },
    
    // Imagens e Logo
    images: {
        // Logo que aparece em cima do formulário de login (Fundo Branco)
        logoForm: "https://placehold.co/400x100/transparent/2563eb?text=YOUR+LOGO&font=montserrat",
    },
    
    // Slides do Carrossel
    slides: [
        {
            title: "ATENDIMENTO ÁGIL",
            subtitle: "Foco no Cliente",
            description: "Gerencie chamados com rapidez e eficiência total em uma única plataforma.",
            smallLogo: "https://cdn-icons-png.flaticon.com/512/3063/3063176.png", 
            // Imagem aleatória de tecnologia/escritório
            heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", 
            link: "#"
        },
        {
            title: "EXPERIÊNCIA UNIFICADA",
            subtitle: "Centralize tudo",
            description: "Conecte WhatsApp, Instagram, Facebook e E-mail em um só lugar.",
            smallLogo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "DESIGN RESPONSIVO",
            subtitle: "Acesse de qualquer lugar",
            description: "Acompanhe seus atendimentos pelo computador, tablet ou celular.",
            smallLogo: "https://cdn-icons-png.flaticon.com/512/2920/2920323.png",
            heroImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
            link: "#"
        }
    ],
    
    // Links do Rodapé
    footerLinks: [
        { text: "Sobre a Empresa", url: "#" },
        { text: "Política de Privacidade", url: "#" },
        { text: "Termos de Uso", url: "#" }
    ],
    
    // Configurações de Animação
    animations: {
        enableParticles: true,
        enableFloatingElements: true,
        enableButtonShimmer: true,
        enableInputFocusEffects: true,
        enableHover3D: true
    }
};

(function() {
    'use strict'; // Modo estrito para melhor performance JS

    // --- 1. PRELOAD DE IMAGENS (Evita delay no carrossel) ---
    const preloadImages = () => {
        CONFIG.slides.forEach(slide => {
            if(slide.heroImage) new Image().src = slide.heroImage;
            if(slide.smallLogo) new Image().src = slide.smallLogo;
        });
        if(CONFIG.images.logoForm) new Image().src = CONFIG.images.logoForm;
    };
    requestAnimationFrame(preloadImages);

    // --- 2. CONTROLE DE AMBIENTE ---
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('legacy') === 'true') return;

    const WRAPPER_ID = 'custom-login-wrapper';
    const STYLE_ID = 'custom-login-style';

    // Verificação otimizada de rota
    function isAuthRoute() {
        const path = window.location.pathname;
        return path === '/' || path.includes('/login') || path.includes('/auth');
    }

    function cleanupLoginInterface() {
        // Se não for página de auth, remove tudo para liberar memória
        if (!isAuthRoute() || document.cookie.includes('auth_token')) {
            const wrapper = document.getElementById(WRAPPER_ID);
            const style = document.getElementById(STYLE_ID);
            const app = document.getElementById('app');
            
            if (wrapper) wrapper.remove();
            if (style) style.remove();
            if (app) { 
                app.style.display = ''; 
                app.style.opacity = '1'; 
                app.style.visibility = 'visible'; 
            }
            document.body.style.background = '';
            document.body.style.overflow = '';
            return true; 
        }
        return false; 
    }
    
    // Check inicial e fallback lento
    if (cleanupLoginInterface()) return;
    
    // --- 3. CONSTRUÇÃO OTIMIZADA ---
    if (document.getElementById(WRAPPER_ID)) return;

    // Ícones SVG Otimizados (Minificados)
    const icons = {
        email: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E`,
        key: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'%3E%3C/path%3E%3C/svg%3E`
    };

    // --- 4. CSS OTIMIZADO (GPU LAYERS) ---
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.innerHTML = `
        /* OTIMIZAÇÕES GERAIS */
        .gpu-accelerated {
            transform: translate3d(0,0,0);
            backface-visibility: hidden;
            will-change: transform, opacity;
        }

        @keyframes floatParticle {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.3; }
            50% { transform: translate3d(var(--tx), var(--ty), 0) scale(0.9); opacity: 0.6; }
        }
        
        @keyframes floatElement {
            0% { transform: translate3d(0, 0, 0) rotate(0deg); }
            100% { transform: translate3d(0, -100vh, 0) rotate(360deg); }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
            from { transform: translate3d(0, 20px, 0); opacity: 0; }
            to { transform: translate3d(0, 0, 0); opacity: 1; }
        }

        body, html { 
            height: 100%; margin: 0; padding: 0; 
            font-family: 'Inter', system-ui, -apple-system, sans-serif; 
            overflow: hidden; 
        }
        
        body { 
            background: radial-gradient(circle at center, ${CONFIG.colors.bgEnd}, ${CONFIG.colors.bgStart});
            background-size: 200% 200%;
            animation: gradientShift 15s ease infinite;
        }
        
        #app { display: none !important; }

        #${WRAPPER_ID} {
            display: flex; align-items: center; justify-content: center;
            width: 90vw; height: 85vh; margin: 5vh auto 0; gap: 40px;
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* --- CARROSEL --- */
        .carousel-card {
            flex: 1; height: 100%; max-width: 900px;
            background: ${CONFIG.colors.cardGradient};
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
            border-radius: 24px; position: relative; overflow: hidden;
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
            display: flex; align-items: center;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform;
        }
        
        .carousel-card:hover { transform: translate3d(0, -5px, 0); }
        
        .slide { 
            position: absolute; inset: 0;
            display: flex; align-items: center; justify-content: space-between; 
            padding: 0 80px; box-sizing: border-box; 
            opacity: 0; 
            transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform: translate3d(50px, 0, 0) scale(0.98); 
            pointer-events: none; 
            will-change: transform, opacity;
        }
        
        .slide.active { 
            opacity: 1; transform: translate3d(0, 0, 0) scale(1); pointer-events: auto; 
        }
        
        .slide-text { width: 50%; color: white; z-index: 2; }
        .slide-text h1 { font-size: 2.8rem; font-weight: 800; margin: 0 0 15px 0; line-height: 1.1; text-transform: uppercase; }
        .slide-text p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 30px; line-height: 1.5; }
        
        .slide-btn { 
            display: inline-block; padding: 12px 30px; 
            border: 2px solid white; color: white; border-radius: 50px; 
            text-decoration: none; font-weight: 700; 
            transition: all 0.2s ease;
        }
        .slide-btn:hover { background: white; color: ${CONFIG.colors.primary}; transform: translate3d(0, -2px, 0); }
        
        .slide-img { width: 45%; display: flex; justify-content: center; z-index: 1; }
        .slide-img img { 
            width: 100%; max-width: 400px; height: 300px; object-fit: cover; 
            border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transition: transform 0.5s ease;
            will-change: transform;
        }
        .slide-img img:hover { transform: perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.02); }
        
        .nav-btn { 
            position: absolute; top: 50%; margin-top: -25px;
            background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); 
            cursor: pointer; width: 50px; height: 50px; border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; 
            transition: all 0.3s ease; z-index: 10; backdrop-filter: blur(10px);
        }
        .nav-btn:hover { background: rgba(255,255,255,0.3); transform: scale(1.1); }
        .nav-btn.prev { left: 20px; } 
        .nav-btn.next { right: 20px; }
        
        .dots-container { 
            position: absolute; bottom: 30px; width: 100%; 
            display: flex; justify-content: center; gap: 10px; z-index: 10; 
        }
        .dot { 
            width: 12px; height: 12px; border-radius: 50%; 
            background: ${CONFIG.colors.dotColor}; cursor: pointer; 
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        .dot.active { background: ${CONFIG.colors.dotActive}; width: 30px; border-radius: 15px; }

        /* --- LOGIN CARD --- */
        .login-card-wrapper { 
            width: 450px; height: 100%; background: white; padding: 0 50px; 
            border-radius: 24px; z-index: 20;
            display: flex; flex-direction: column; justify-content: center; align-items: center; 
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease;
            position: relative; overflow: hidden;
        }
        .login-card-wrapper:hover { transform: translate3d(0, -5px, 0); }
        .login-card-wrapper::before {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px;
            background: linear-gradient(90deg, ${CONFIG.colors.primary}, ${CONFIG.colors.primaryHover});
        }

        .login-logo { height: auto; max-height: 80px; margin-bottom: 40px; }
        
        #form-container { width: 100%; display: flex; flex-direction: column; align-items: center; }

        /* Inputs Otimizados */
        form input {
            background-color: #f3f4f6 !important; color: #111827 !important; 
            border: 2px solid #e5e7eb !important; border-radius: 50px !important;
            padding: 16px 20px 16px 55px !important; width: 100% !important; 
            margin-bottom: 20px !important; font-size: 1rem !important;
            transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s !important;
        }
        form input:focus {
            background-color: white !important; border-color: ${CONFIG.colors.primary} !important; 
            box-shadow: 0 0 0 3px ${CONFIG.colors.primary}33 !important;
            transform: translate3d(0, -2px, 0);
        }
        
        /* 2FA inputs */
        form input[maxlength="1"] {
            width: 3rem !important; height: 3rem !important; padding: 0 !important;
            border-radius: 12px !important; text-align: center !important; margin: 0 5px !important;
        }

        /* Botão */
        form button[type="submit"] { 
            background: ${CONFIG.colors.primary} !important;
            border-radius: 50px !important; height: 50px !important; width: 100% !important; 
            color: white !important; font-weight: bold !important; border: none !important; 
            cursor: pointer; box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.3); 
            transition: transform 0.2s, box-shadow 0.2s !important; 
            position: relative; overflow: hidden;
        }
        form button[type="submit"]:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.4);
        }
        /* Shimmer Effect no Botão (GPU) */
        ${CONFIG.animations.enableButtonShimmer ? `
        form button[type="submit"]::after {
            content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transform: translateX(-100%); transition: transform 0.6s ease;
        }
        form button[type="submit"]:hover::after { transform: translateX(100%); }
        ` : ''}

        /* Ícones e Textos */
        form input[name*="email"], form input[type="email"] { background-image: url("${icons.email}"); background-repeat: no-repeat; background-position: 20px center; }
        form input[type="password"] { background-image: url("${icons.key}"); background-repeat: no-repeat; background-position: 20px center; }
        
        .reset-password-container, .text-center { margin-top: 15px; text-align: center; }
        .reset-password-container a, .text-center a { color: ${CONFIG.colors.primary} !important; text-decoration: none; font-weight: 600; }
        
        /* Footer */
        .custom-footer { 
            position: fixed; bottom: 0; left: 0; width: 100%; 
            background: rgba(255,255,255,0.9); height: 50px; 
            display: flex; align-items: center; justify-content: center; gap: 40px; 
            backdrop-filter: blur(8px); z-index: 100;
        }
        .custom-footer a { color: #64748b; text-decoration: none; font-size: 13px; font-weight: 500; transition: color 0.2s; }
        .custom-footer a:hover { color: ${CONFIG.colors.primary}; }

        /* Mobile */
        @media (max-width: 1024px) {
            #${WRAPPER_ID} { flex-direction: column; height: 100vh; width: 100vw; margin: 0; gap: 0; }
            .carousel-card { display: none; }
            .login-card-wrapper { 
                width: 90%; max-width: 380px; height: auto !important; padding: 40px 30px; 
                margin-bottom: 60px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .custom-footer { background: transparent; position: absolute; bottom: 20px; pointer-events: none; flex-direction: column; gap: 10px; height: auto; }
            .custom-footer a { pointer-events: auto; color: rgba(255,255,255,0.8); text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
        }
    `;
    document.head.appendChild(style);

    // --- 5. EFEITOS VISUAIS OTIMIZADOS ---
    const frag = document.createDocumentFragment();

    // Partículas (Usando CSS Variables e Transform para performance)
    if (CONFIG.animations.enableParticles) {
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;`;
        
        for (let i = 0; i < 12; i++) {
            const p = document.createElement('div');
            const size = Math.random() * 100 + 50;
            const tx = Math.random() * 100 - 50; // Translate X destination
            const ty = Math.random() * 100 - 50; // Translate Y destination
            
            p.style.cssText = `
                position: absolute; width: ${size}px; height: ${size}px;
                background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%);
                border-radius: 50%; left: ${Math.random()*100}%; top: ${Math.random()*100}%;
                --tx: ${tx}px; --ty: ${ty}px;
                animation: floatParticle ${Math.random() * 20 + 10}s infinite ease-in-out alternate;
                will-change: transform;
            `;
            particleContainer.appendChild(p);
        }
        frag.appendChild(particleContainer);
    }

    // Elementos Flutuantes
    if (CONFIG.animations.enableFloatingElements) {
        const floatingContainer = document.createElement('div');
        floatingContainer.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;`;
        const symbols = ['✦', '•', '○', '□'];
        
        for (let i = 0; i < 6; i++) {
            const el = document.createElement('div');
            el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            el.style.cssText = `
                position: absolute; color: rgba(255,255,255,0.1);
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}%; top: 110vh;
                animation: floatElement ${Math.random() * 20 + 15}s infinite linear;
                animation-delay: -${Math.random() * 20}s; /* Começa já na tela */
                will-change: transform;
            `;
            floatingContainer.appendChild(el);
        }
        frag.appendChild(floatingContainer);
    }

    // HTML Structure
    const arrowSVG = d => `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="${d}"></polyline></svg>`;
    
    const slidesHTML = CONFIG.slides.map((s, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}" data-index="${i}">
            <div class="slide-text">
                ${s.smallLogo ? `<img src="${s.smallLogo}" style="height:40px;margin-bottom:25px;display:block;filter:brightness(0) invert(1);">` : ''}
                <h1>${s.title}</h1>
                <h3>${s.subtitle}</h3>
                <p>${s.description}</p>
                <a href="${s.link}" class="slide-btn">Saiba mais</a>
            </div>
            <div class="slide-img"><img src="${s.heroImage}" loading="eager"></div>
        </div>`).join('');
    
    const dotsHTML = CONFIG.slides.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');
    const footerLinksHTML = CONFIG.footerLinks.map(l => `<a href="${l.url}" target="_blank">${l.text}</a>`).join('');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div id="${WRAPPER_ID}">
            <div class="carousel-card">
                <div class="slides-container" style="width:100%;height:100%;position:relative;">${slidesHTML}</div>
                <button class="nav-btn prev">${arrowSVG('15 18 9 12 15 6')}</button>
                <button class="nav-btn next">${arrowSVG('9 18 15 12 9 6')}</button>
                <div class="dots-container">${dotsHTML}</div>
            </div>
            <div class="login-card-wrapper">
                <img src="${CONFIG.images.logoForm}" class="login-logo">
                <div id="form-container"></div>
            </div>
            <footer class="custom-footer">${footerLinksHTML}</footer>
        </div>`;
    
    frag.appendChild(wrapper);
    document.body.prepend(frag);

    // --- 6. LOGICA OTIMIZADA (MUTATION OBSERVER) ---
    // Substitui o setInterval pesado por um observador de eventos DOM
    const targetNode = document.getElementById('app');
    const myContainer = document.getElementById('form-container');
    
    const moveFormLogic = () => {
        const newForm = document.querySelector('#app form');
        if (newForm && !myContainer.contains(newForm)) {
            // Identifica o container pai correto para mover (Compatibilidade com diversos temas)
            let contentToMove = newForm.closest('.bg-white') || newForm.closest('.dark\\:bg-n-solid-2') || newForm.parentElement;
            
            // Segurança: Se pegou o container errado, pega só o form
            if (!contentToMove || contentToMove.id === 'app') contentToMove = newForm;

            // Transição Suave
            contentToMove.style.opacity = '0';
            contentToMove.style.transform = 'translate3d(0, 10px, 0)';
            
            myContainer.innerHTML = ''; // Limpa container
            
            if (contentToMove.tagName === 'FORM') {
                myContainer.appendChild(contentToMove);
            } else {
                // Move os filhos para preservar eventos
                while (contentToMove.firstChild) {
                    myContainer.appendChild(contentToMove.firstChild);
                }
            }

            // Reveal Animation
            requestAnimationFrame(() => {
                contentToMove.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                contentToMove.style.opacity = '1';
                contentToMove.style.transform = 'translate3d(0, 0, 0)';
            });

            // Feedback visual no Submit
            const btn = myContainer.querySelector('button[type="submit"]');
            if(btn) btn.onclick = function() {
                this.innerHTML = '<span style="display:inline-block;width:20px;height:20px;border:2px solid white;border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;"></span>';
                this.style.opacity = '0.8';
            };
        }
    };

    // Observer: Muito mais leve que setInterval
    if (targetNode) {
        const observer = new MutationObserver((mutations) => {
            for(let mutation of mutations) {
                if (mutation.addedNodes.length) moveFormLogic();
            }
        });
        observer.observe(targetNode, { childList: true, subtree: true });
        // Executa uma vez inicial
        moveFormLogic();
    } else {
        // Fallback apenas se MutationObserver falhar (raro)
        setInterval(moveFormLogic, 500);
    }

    // --- 7. CARROSSEL OTIMIZADO ---
    let currentIndex = 0;
    let autoPlayTimer;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    function showSlide(index) {
        if (index === currentIndex) return;
        
        // Loop lógica
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        // Batch DOM updates
        requestAnimationFrame(() => {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentIndex = index;
        });
    }

    // Debounce function para evitar cliques frenéticos
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const nextSlide = () => showSlide(currentIndex + 1);
    const prevSlide = () => showSlide(currentIndex - 1);
    
    // Controles
    document.querySelector('.nav-btn.next').addEventListener('click', debounce(nextSlide, 200));
    document.querySelector('.nav-btn.prev').addEventListener('click', debounce(prevSlide, 200));
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.index));
            resetAutoPlay();
        });
    });

    // AutoPlay Inteligente
    function startAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(nextSlide, 6000);
    }
    
    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    // Pausa quando o mouse está em cima
    const card = document.querySelector('.carousel-card');
    if (card) {
        card.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        card.addEventListener('mouseleave', startAutoPlay);
    }
    
    startAutoPlay();

    // --- 8. INPUT FOCUS FIX (2FA) ---
    document.addEventListener('input', (e) => {
        if (e.target.matches('input[maxlength="1"]') && e.target.value.length === 1) {
            const next = e.target.nextElementSibling;
            if (next?.tagName === 'INPUT') next.focus();
        }
    });

})();
</script>
