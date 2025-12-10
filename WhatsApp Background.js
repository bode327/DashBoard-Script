<script data-name="WhatsApp Background Only" data-type="style">
(function () {
  // --- CONFIGURAÇÃO ---
  const allowedIds = ['1']; 
  const empresaId = window.location.pathname.split('/')[3];

  if (!allowedIds.includes(empresaId)) return;

  // IMAGENS OFICIAIS
  // Doodle Escuro (Para usar no Fundo Claro/Bege)
  const doodleForLight = "https://static.whatsapp.net/rsrc.php/v4/yl/r/gi_DckOUM5a.png";
  
  // Doodle Claro (Para usar no Fundo Escuro/Verde)
  const doodleForDark = "https://static.whatsapp.net/rsrc.php/v4/y_/r/TPtFe9SpDSX.png";

  document.addEventListener('DOMContentLoaded', function() {
    function aplicarFundo() {
      if (document.getElementById('wa-bg-only-v8')) return;
      const style = document.createElement('style');
      style.id = 'wa-bg-only-v8';
      style.innerHTML = `
        /* =========================================
           CONFIGURAÇÃO DO FUNDO
           ========================================= */
        :root {
            /* --- MODO CLARO --- */
            /* Bege oficial do WhatsApp */
            --wa-bg-color: #efeae2; 
            /* Usa o doodle escuro */
            --wa-bg-image: url('${doodleForLight}');
            /* Opacidade mais alta para aparecer no claro */
            --wa-opacity: 0.4; 
            /* Normal para o desenho preto aparecer sobre o bege */
            --wa-blend: normal; 
        }

        /* --- MODO ESCURO --- */
        .dark, .theme-dark, [data-theme="dark"] {
            /* Verde Petróleo Profundo (Dark Mode oficial) */
            --wa-bg-color: #0b141a; 
            /* Usa o doodle branco */
            --wa-bg-image: url('${doodleForDark}');
            /* Opacidade baixa para não brigar com o texto */
            --wa-opacity: 0.06;
            /* Overlay faz o branco se fundir suavemente com o verde */
            --wa-blend: overlay; 
        }
        
        /* Fallback para deteção do sistema */
        @media (prefers-color-scheme: dark) {
            :root:not(.light) {
                --wa-bg-color: #0b141a;
                --wa-bg-image: url('${doodleForDark}');
                --wa-opacity: 0.06;
                --wa-blend: overlay;
            }
        }

        /* =========================================
           APLICAÇÃO APENAS NA ÁREA DE CONVERSA
           ========================================= */
        
        /* 1. Alvo Principal: Painel de Conversa */
        .conversation-panel, 
        .messages-container, 
        .main-view, 
        div[class*="conversation-window"],
        /* Seletor específico do Chatwoot para a área central */
        section.flex.flex-col.flex-1.min-w-0 {
            background-color: var(--wa-bg-color) !important;
            background-image: var(--wa-bg-image) !important;
            background-repeat: repeat !important;
            background-size: 400px !important; /* Tamanho padrão */
            background-blend-mode: var(--wa-blend) !important;
        }
        
        /* 2. Remoção de fundos brancos/cinzas que bloqueiam o wallpaper */
        /* Remove o fundo branco padrão do Chatwoot APENAS na área de mensagens */
        .conversation-panel .bg-white,
        .messages-container .bg-white,
        .dark .conversation-panel .bg-slate-900 {
            background-color: transparent !important;
        }

        /* Opcional: Ajuste fino para garantir que a opacidade da imagem funcione via pseudo-elemento
           se o background-image direto ficar muito forte ou fraco. 
           Mas com as imagens oficiais, o método acima costuma ser suficiente.
        */
      `;
      document.head.appendChild(style);
    }
    
    aplicarFundo();
    const observer = new MutationObserver(aplicarFundo);
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
</script>
