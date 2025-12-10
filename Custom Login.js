<script>
/* ==========================================================================
   CUSTOM LOGIN - OPEN SOURCE EDITION
   ========================================================================== */
const CONFIG = {
    // Cores do Tema (Azul Genérico)
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
            title: "OMNICHANNEL",
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

/* ==========================================================================
   LÓGICA E ESTILOS COM ANIMAÇÕES
   ========================================================================== */
(function() {
    
    // --- 1. MODO LEGADO ---
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('legacy') === 'true') return;

    const WRAPPER_ID = 'custom-login-wrapper';
    const STYLE_ID = 'custom-login-style';

    // --- 2. PROTEÇÃO DE DASHBOARD ---
    function cleanupLoginInterface() {
        const wrapper = document.getElementById(WRAPPER_ID);
        const style = document.getElementById(STYLE_ID);
        const app = document.getElementById('app');
        
        const isAuthPage = window.location.href.includes('/login') || 
                           window.location.href.includes('/auth') || 
                           (window.location.pathname === '/' && !document.cookie.includes('auth_token'));

        if (!isAuthPage) {
            if (wrapper) wrapper.remove();
            if (style) style.remove();
            if (app) { app.style.display = ''; app.style.opacity = '1'; app.style.visibility = 'visible'; }
            document.body.style.background = ''; document.body.style.height = ''; document.body.style.overflow = '';
            return true; 
        }
        return false; 
    }
    
    if (cleanupLoginInterface()) return;
    setInterval(cleanupLoginInterface, 1000);

    // --- 3. INÍCIO DA MONTAGEM ---
    if (document.getElementById(WRAPPER_ID)) return;

    // Ícones SVG Inline
    const icons = {
        email: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'%3E%3C/path%3E%3Cpolyline points='22,6 12,13 2,6'%3E%3C/polyline%3E%3C/svg%3E`,
        key: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'%3E%3C/path%3E%3C/svg%3E`
    };

    // --- 4. PARTÍCULAS FLUTUANTES (BACKGROUND) ---
    function createFloatingParticles() {
        if (!CONFIG.animations.enableParticles) return;
        
        const particleContainer = document.createElement('div');
        particleContainer.id = 'floating-particles';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        document.body.appendChild(particleContainer);
        
        // Criar partículas
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%);
                border-radius: 50%;
                filter: blur(20px);
                animation: floatParticle ${Math.random() * 20 + 10}s infinite ease-in-out;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            // Posição aleatória
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            particleContainer.appendChild(particle);
        }
    }

    // --- 5. ELEMENTOS FLUTUANTES (DECORATIVOS) ---
    function createFloatingElements() {
        if (!CONFIG.animations.enableFloatingElements) return;
        
        const floatingContainer = document.createElement('div');
        floatingContainer.id = 'floating-elements';
        floatingContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        document.body.appendChild(floatingContainer);
        
        const symbols = ['✦', '•', '○', '□', '◇', '☆'];
        
        for (let i = 0; i < 8; i++) {
            const element = document.createElement('div');
            element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            element.style.cssText = `
                position: absolute;
                color: rgba(255,255,255,0.1);
                font-size: ${Math.random() * 20 + 10}px;
                animation: floatElement ${Math.random() * 25 + 15}s infinite linear;
                animation-delay: ${Math.random() * 5}s;
                user-select: none;
            `;
            
            element.style.left = `${Math.random() * 100}%`;
            element.style.top = `${Math.random() * 100}%`;
            
            floatingContainer.appendChild(element);
        }
    }

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.innerHTML = `
        /* --- ANIMAÇÕES KEYFRAMES --- */
        @keyframes floatParticle {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.1); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.9); }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.05); }
        }
        
        @keyframes floatElement {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
        }
        
        @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        
        @keyframes slideInLeft {
            from { transform: translateX(-30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
            from { transform: translateX(30px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        /* --- ESTILOS GERAIS --- */
        body, html { 
            height: 100%; 
            margin: 0; 
            padding: 0; 
            font-family: 'Inter', sans-serif; 
            overflow: hidden; 
        }
        
        body { 
            background: radial-gradient(circle at center, ${CONFIG.colors.bgEnd}, ${CONFIG.colors.bgStart});
            background-size: 200% 200%;
            animation: gradientShift 15s ease infinite;
        }
        
        #app { display: none !important; }

        /* --- LAYOUT GERAL --- */
        #${WRAPPER_ID} {
            display: flex; 
            align-items: center; 
            justify-content: center;
            width: 90vw; 
            height: 85vh; 
            margin: 5vh auto 0; 
            gap: 40px;
            animation: fadeInUp 0.8s ease-out;
        }

        /* --- CARROSSEL (ESQUERDA) --- */
        .carousel-card {
            flex: 1; 
            height: 100%; 
            max-width: 900px;
            background: ${CONFIG.colors.cardGradient};
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
            border-radius: 24px; 
            position: relative; 
            overflow: hidden;
            box-shadow: 
                0 30px 60px -12px rgba(0, 0, 0, 0.5),
                0 0 60px rgba(59, 130, 246, 0.3);
            display: flex; 
            align-items: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .carousel-card:hover {
            transform: translateY(-5px);
            box-shadow: 
                0 40px 80px -20px rgba(0, 0, 0, 0.6),
                0 0 80px rgba(59, 130, 246, 0.4);
        }
        
        .slides-container { width: 100%; height: 100%; position: relative; }
        
        .slide { 
            position: absolute; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            padding: 0 80px; 
            box-sizing: border-box; 
            opacity: 0; 
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); 
            transform: translateX(100px) scale(0.95); 
            pointer-events: none; 
        }
        
        .slide.active { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
            pointer-events: auto; 
        }
        
        .slide.leaving { 
            transform: translateX(-100px) scale(0.95); 
            opacity: 0; 
        }
        
        .slide-text { 
            width: 50%; 
            color: white; 
            z-index: 2; 
            animation: slideInLeft 0.8s ease-out 0.3s both;
        }
        
        .slide-text h1 { 
            font-size: 2.8rem; 
            font-weight: 800; 
            margin: 0 0 15px 0; 
            line-height: 1.1; 
            text-transform: uppercase; 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .slide-text h3 { 
            font-size: 1.4rem; 
            font-weight: 600; 
            margin-bottom: 20px; 
            opacity: 0.9; 
        }
        
        .slide-text p { 
            font-size: 1.1rem; 
            opacity: 0.9; 
            margin-bottom: 30px; 
            line-height: 1.5; 
        }
        
        .slide-btn { 
            display: inline-block; 
            padding: 12px 30px; 
            border: 2px solid white; 
            color: white; 
            border-radius: 50px; 
            text-decoration: none; 
            font-weight: 700; 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .slide-btn:hover { 
            background: white; 
            color: ${CONFIG.colors.primary}; 
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        .slide-btn:active {
            transform: translateY(0);
        }
        
        .slide-img { 
            width: 45%; 
            display: flex; 
            justify-content: center; 
            z-index: 1; 
            animation: slideInRight 0.8s ease-out 0.5s both;
        }
        
        .slide-img img { 
            width: 100%; 
            max-width: 400px; 
            height: 300px; 
            object-fit: cover; 
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            transition: transform 0.5s ease;
        }
        
        .slide-img img:hover {
            transform: ${CONFIG.animations.enableHover3D ? 'perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.05)' : 'scale(1.05)'};
        }
        
        .small-logo { 
            height: 40px; 
            margin-bottom: 25px; 
            display: block; 
            filter: brightness(0) invert(1);
            animation: bounce 2s infinite;
        } 
        
        .nav-btn { 
            position: absolute; 
            top: 50%; 
            transform: translateY(-50%); 
            background: rgba(255,255,255,0.1); 
            border: none; 
            cursor: pointer; 
            width: 50px; 
            height: 50px; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
            z-index: 10; 
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .nav-btn:hover { 
            background: rgba(255,255,255,0.3); 
            transform: translateY(-50%) scale(1.1);
            box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }
        
        .nav-btn.prev { left: 20px; } 
        .nav-btn.next { right: 20px; }
        
        .dots-container { 
            position: absolute; 
            bottom: 30px; 
            width: 100%; 
            display: flex; 
            justify-content: center; 
            gap: 10px; 
            z-index: 10; 
        }
        
        .dot { 
            width: 12px; 
            height: 12px; 
            border-radius: 50%; 
            background: ${CONFIG.colors.dotColor}; 
            cursor: pointer; 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        
        .dot.active { 
            background: ${CONFIG.colors.dotActive}; 
            width: 30px; 
            border-radius: 15px; 
            box-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        
        .dot:hover {
            transform: scale(1.3);
        }

        /* --- LOGIN CARD (DIREITA) --- */
        .login-card-wrapper { 
            width: 450px; 
            height: 100%; 
            background: white; 
            padding: 0 50px; 
            border-radius: 24px; 
            box-shadow: 
                0 30px 60px -12px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255,255,255,0.5); 
            z-index: 20;
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .login-card-wrapper:hover {
            transform: translateY(-5px);
            box-shadow: 
                0 40px 80px -20px rgba(0, 0, 0, 0.6),
                inset 0 1px 0 rgba(255,255,255,0.5);
        }
        
        .login-card-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, ${CONFIG.colors.primary}, ${CONFIG.colors.primaryHover});
        }
        
        .login-logo { 
            height: auto; 
            max-height: 80px; 
            margin-bottom: 40px; 
            display: block; 
            margin-left: auto; 
            margin-right: auto;
            animation: pulse 3s infinite;
        }
        
        #form-container { 
            width: 100%; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            animation: slideUp 0.6s ease-out 0.2s both;
        }
        
        #form-container > * { width: 100%; }

        /* --- ESTILIZAÇÃO DOS INPUTS COM ANIMAÇÕES --- */
        form input:not([maxlength="1"]) {
            background-color: #f3f4f6 !important; 
            color: #111827 !important; 
            border: 2px solid #e5e7eb !important; 
            border-radius: 50px !important;
            padding: 16px 20px 16px 55px !important; 
            width: 100% !important; 
            box-sizing: border-box !important;
            margin-bottom: 20px !important; 
            background-repeat: no-repeat !important;
            background-position: 20px center !important; 
            font-size: 1rem !important; 
            font-weight: 500 !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        form input:not([maxlength="1"]):focus {
            background-color: white !important; 
            border-color: ${CONFIG.colors.primary} !important; 
            box-shadow: 
                0 0 0 3px ${CONFIG.colors.primary}33,
                0 4px 20px rgba(37, 99, 235, 0.1) !important;
            transform: translateY(-2px);
        }
        
        ${CONFIG.animations.enableInputFocusEffects ? `
        form input:not([maxlength="1"]):focus {
            animation: pulse 1.5s infinite;
        }
        ` : ''}

        /* 2FA Inputs (Código de 6 dígitos) */
        form input[maxlength="1"] {
            width: 3rem !important; 
            height: 3rem !important; 
            border-radius: 12px !important;
            text-align: center !important; 
            padding: 0 !important; 
            margin: 0 8px !important;
            background-color: #f3f4f6 !important; 
            border: 2px solid #e5e7eb !important;
            font-size: 1.2rem !important; 
            font-weight: bold !important; 
            color: #111827 !important;
            display: inline-block !important;
            transition: all 0.3s ease;
        }
        
        form input[maxlength="1"]:focus { 
            border-color: ${CONFIG.colors.primary} !important; 
            background-color: white !important; 
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
        }
        
        form input[maxlength="1"]:invalid {
            animation: shake 0.5s;
            border-color: #ef4444 !important;
        }

        /* Ícones nos Inputs */
        form input[name*="email"], form input[type="email"] { background-image: url("${icons.email}") !important; }
        form input[type="password"] { background-image: url("${icons.key}") !important; }
        form input::placeholder { color: #6b7280 !important; opacity: 1 !important; }

        /* Botão Entrar com Efeito Shimmer */
        form button[type="submit"] { 
            background: ${CONFIG.animations.enableButtonShimmer ? 
                `linear-gradient(90deg, ${CONFIG.colors.primary}, ${CONFIG.colors.primaryHover}, ${CONFIG.colors.primary})` : 
                CONFIG.colors.primary} !important; 
            background-size: ${CONFIG.animations.enableButtonShimmer ? '200% auto' : '100%'} !important;
            border-radius: 50px !important; 
            height: 50px !important; 
            width: 100% !important; 
            color: white !important; 
            font-weight: bold !important; 
            border: none !important; 
            cursor: pointer; 
            box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.3); 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
            margin-top: 10px; 
            position: relative;
            overflow: hidden;
        }
        
        ${CONFIG.animations.enableButtonShimmer ? `
        form button[type="submit"]:hover {
            background-position: right center;
            animation: shimmer 2s infinite linear;
            transform: translateY(-3px);
            box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.4);
        }
        ` : `
        form button[type="submit"]:hover {
            filter: brightness(1.1);
            transform: translateY(-3px);
            box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.4);
        }
        `}
        
        form button[type="submit"]:active {
            transform: translateY(0);
            box-shadow: 0 5px 15px -5px rgba(37, 99, 235, 0.3);
        }
        
        form button[type="submit"]::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
        }
        
        form button[type="submit"]:hover::after {
            transform: translateX(100%);
        }
        
        form label { display: none !important; }
        
        /* Links e Ajustes de Texto */
        .reset-password-container, .text-center { 
            margin-top: 15px; 
            text-align: center; 
            animation: fadeInUp 0.6s ease-out 0.4s both;
        }
        
        .reset-password-container a, .text-center a { 
            color: ${CONFIG.colors.primary} !important; 
            text-decoration: none; 
            font-weight: 600; 
            transition: all 0.3s ease;
            position: relative;
        }
        
        .reset-password-container a:hover, .text-center a:hover { 
            color: ${CONFIG.colors.primaryHover} !important;
            text-decoration: underline;
        }
        
        .reset-password-container a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: ${CONFIG.colors.primary};
            transition: width 0.3s ease;
        }
        
        .reset-password-container a:hover::after {
            width: 100%;
        }
        
        #form-container h2 { 
            font-size: 1.5rem !important; 
            font-weight: 700 !important; 
            color: #111827 !important; 
            margin-bottom: 10px !important; 
            text-align: center; 
            animation: fadeInUp 0.6s ease-out 0.1s both;
        }
        
        #form-container p { 
            text-align: center !important; 
            color: #6b7280 !important; 
            margin-bottom: 20px !important; 
            animation: fadeInUp 0.6s ease-out 0.2s both;
        }
        
        .separator { 
            margin: 15px 0; 
            color: #999; 
            font-size: 0.8rem; 
            text-transform: uppercase; 
            text-align: center; 
            display: block;
            animation: fadeInUp 0.6s ease-out 0.3s both;
        }
        
        #form-container a.button, #form-container button.button { 
            border-radius: 50px !important; 
            transition: all 0.3s ease !important;
        }
        
        #form-container a.button:hover, #form-container button.button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* --- FOOTER DESKTOP --- */
        .custom-footer { 
            position: fixed; 
            bottom: 0; 
            left: 0; 
            width: 100%; 
            background: rgba(255,255,255,0.95); 
            height: 50px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 40px; 
            box-shadow: 0 -5px 20px rgba(0,0,0,0.05); 
            z-index: 100; 
            backdrop-filter: blur(10px);
            animation: slideUp 0.6s ease-out 0.6s both;
        }
        
        .custom-footer a { 
            color: #64748b; 
            text-decoration: none; 
            font-size: 13px; 
            font-weight: 500; 
            padding: 5px 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .custom-footer a:hover { 
            color: ${CONFIG.colors.primary}; 
            background: rgba(37, 99, 235, 0.1);
            transform: translateY(-2px);
        }

        /* --- LOADING SPINNER (PARA BOTÃO) --- */
        .btn-loading {
            position: relative;
            color: transparent !important;
        }
        
        .btn-loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid white;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* --- MOBILE RESPONSIVE --- */
        @media (max-width: 1024px) {
            #${WRAPPER_ID} { 
                flex-direction: column; 
                height: 100vh; 
                width: 100vw; 
                margin: 0; 
                padding: 0; 
                justify-content: center; 
                gap: 0; 
            }
            
            .carousel-card { display: none; }
            
            .login-card-wrapper { 
                width: 90%; 
                max-width: 380px; 
                height: auto !important; 
                min-height: auto; 
                padding: 40px 30px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.2); 
                margin-bottom: 60px; 
                background: white !important; 
                animation: slideUp 0.6s ease-out;
            }
            
            /* Footer Transparente no Mobile */
            .custom-footer { 
                position: absolute; 
                bottom: 20px; 
                width: 100%; 
                background: transparent !important; 
                box-shadow: none !important; 
                border: none !important;
                height: auto; 
                flex-direction: column; 
                gap: 8px; 
                pointer-events: none; 
                animation: fadeInUp 0.6s ease-out 0.8s both;
            }
            
            .custom-footer a { 
                color: rgba(255,255,255,0.7) !important; 
                font-size: 12px; 
                text-align: center; 
                pointer-events: auto;
                text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            }
            
            /* Desabilitar algumas animações no mobile para performance */
            .carousel-card:hover {
                transform: none;
            }
            
            .login-card-wrapper:hover {
                transform: none;
            }
        }
    `;
    document.head.appendChild(style);

    // --- 6. CRIAR ELEMENTOS ANIMADOS ---
    createFloatingParticles();
    createFloatingElements();

    // HTML Construction
    const arrowLeftSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
    const arrowRightSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

    let slidesHTML = CONFIG.slides.map((s, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}" data-index="${i}">
            <div class="slide-text">
                ${s.smallLogo ? `<img src="${s.smallLogo}" class="small-logo">` : ''}
                <h1>${s.title}</h1>
                <h3>${s.subtitle}</h3>
                <p>${s.description}</p>
                <a href="${s.link}" class="slide-btn">Saiba mais</a>
            </div>
            <div class="slide-img"><img src="${s.heroImage}"></div>
        </div>`).join('');
    
    let dotsHTML = CONFIG.slides.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');
    let footerLinksHTML = CONFIG.footerLinks.map(l => `<a href="${l.url}" target="_blank">${l.text}</a>`).join('');

    const wrapperHTML = `
        <div id="${WRAPPER_ID}">
            <div class="carousel-card">
                <div class="slides-container">${slidesHTML}</div>
                <button class="nav-btn prev">${arrowLeftSVG}</button>
                <button class="nav-btn next">${arrowRightSVG}</button>
                <div class="dots-container">${dotsHTML}</div>
            </div>
            <div class="login-card-wrapper">
                <img src="${CONFIG.images.logoForm}" class="login-logo">
                <div id="form-container"></div>
            </div>
            <footer class="custom-footer">${footerLinksHTML}</footer>
        </div>`;

    document.body.insertAdjacentHTML('afterbegin', wrapperHTML);

    // --- 7. MONITORAMENTO INTELIGENTE DE CONTEÚDO ---
    const checkForm = setInterval(() => {
        const myContainer = document.getElementById('form-container');
        if (!myContainer) return;

        let contentToMove = null;
        const newForm = document.querySelector('#app form');
        
        if (newForm && !myContainer.contains(newForm)) {
            const parentCard = newForm.closest('.bg-white') || newForm.closest('.dark\\:bg-n-solid-2');
            
            if (parentCard && parentCard.closest('#app')) {
                contentToMove = parentCard;
            } else {
                const parent = newForm.parentElement;
                if (parent && parent.children.length > 1 && parent.closest('#app')) {
                    contentToMove = parent;
                } else {
                    contentToMove = newForm;
                }
            }
        }

        if (contentToMove) {
            myContainer.innerHTML = ''; 
            if (contentToMove.tagName === 'FORM') {
                // Adicionar efeito de transição
                contentToMove.style.opacity = '0';
                contentToMove.style.transform = 'translateY(20px)';
                myContainer.appendChild(contentToMove);
                
                // Animar entrada
                setTimeout(() => {
                    contentToMove.style.transition = 'all 0.6s ease-out';
                    contentToMove.style.opacity = '1';
                    contentToMove.style.transform = 'translateY(0)';
                }, 50);
            } else {
                while (contentToMove.firstChild) {
                    myContainer.appendChild(contentToMove.firstChild);
                }
            }
            
            // Adicionar eventos de clique animados aos botões
            setTimeout(() => {
                const submitBtn = myContainer.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.addEventListener('click', function(e) {
                        if (!this.classList.contains('btn-loading')) {
                            this.classList.add('btn-loading');
                            
                            // Simular tempo de loading e remover classe
                            setTimeout(() => {
                                this.classList.remove('btn-loading');
                            }, 2000);
                        }
                    });
                }
            }, 100);
        }
    }, 200);

    // --- 8. LÓGICA DO CARROSSEL COM ANIMAÇÕES MELHORADAS ---
    let currentIndex = 0;
    let isAnimating = false;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    function showSlide(index, direction = 'next') {
        if (isAnimating) return;
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        isAnimating = true;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];
        
        // Animação de saída
        currentSlide.classList.add('leaving');
        
        setTimeout(() => {
            currentSlide.classList.remove('active', 'leaving');
            nextSlide.classList.add('active');
            
            // Atualizar dots
            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');
            
            currentIndex = index;
            isAnimating = false;
        }, 500);
    }
    
    // Event Listeners com feedback tátil
    document.querySelector('.nav-btn.next').addEventListener('click', (e) => {
        showSlide(currentIndex + 1, 'next');
        e.target.style.transform = 'translateY(-50%) scale(0.9)';
        setTimeout(() => {
            e.target.style.transform = 'translateY(-50%) scale(1)';
        }, 150);
    });
    
    document.querySelector('.nav-btn.prev').addEventListener('click', (e) => {
        showSlide(currentIndex - 1, 'prev');
        e.target.style.transform = 'translateY(-50%) scale(0.9)';
        setTimeout(() => {
            e.target.style.transform = 'translateY(-50%) scale(1)';
        }, 150);
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            if (index !== currentIndex) {
                showSlide(index);
                e.target.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    e.target.style.transform = 'scale(1.3)';
                }, 150);
            }
        });
    });
    
    // Auto-play com pausa ao hover
    let autoPlayInterval = setInterval(() => {
        if (!document.querySelector('.carousel-card:hover')) {
            showSlide(currentIndex + 1);
        }
    }, 6000);

    // Pausar auto-play ao interagir
    const carouselCard = document.querySelector('.carousel-card');
    carouselCard.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    carouselCard.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 6000);
    });

    // --- 9. EFEITOS DE DIGITAÇÃO PARA INPUTS 2FA ---
    document.addEventListener('input', function(e) {
        if (e.target.matches('input[maxlength="1"]')) {
            // Mover foco para próximo input
            if (e.target.value.length === 1) {
                const next = e.target.nextElementSibling;
                if (next && next.tagName === 'INPUT' && next.maxLength === 1) {
                    next.focus();
                }
            }
            
            // Adicionar efeito visual
            e.target.style.animation = 'none';
            setTimeout(() => {
                e.target.style.animation = 'pulse 0.3s';
            }, 10);
        }
    });

    // --- 10. EFEITO DE CARREGAMENTO SUAVE ---
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.8s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

})();
</script>
