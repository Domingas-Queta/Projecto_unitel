function mostrarConteudo(conteudoId) {
    // Oculta todos os conteúdos relacionados
    const conteudos = document.querySelectorAll('div[id^="conteudo"]');
    conteudos.forEach(conteudo => {
      conteudo.style.display = 'none';
    });
  
    // Mostra o conteúdo correspondente ao item do menu clicado
    const conteudoParaMostrar = document.getElementById(conteudoId);
    if (conteudoParaMostrar) {
      conteudoParaMostrar.style.display = 'block';
    }

  }
  
