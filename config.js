window.SITE = {
  nome: "Imersão A Chave para Prosperidade 2027",

  // Link oficial do checkout na Sympla. TODOS os botões "Garantir minha vaga" usam este link.
  // Enquanto estiver vazio, os botões levam ao WhatsApp da organização (com mensagem sobre o ingresso).
  sympla: "",

  whatsapp: {
    numero: "5519993513673", // só dígitos
    mensagem: "Olá! Gostaria de mais informações sobre a Imersão A Chave para Prosperidade 2027, que acontecerá no dia 12/12 em Campinas.",
    mensagemIngresso: "Olá! Quero garantir minha vaga na Imersão A Chave para Prosperidade 2027 (12/12, Campinas). Como faço a compra do ingresso de R$ 97?",
  },

  // Formulário de contato: DESLIGADO até a organização definir o e-mail de destino.
  // Para ativar: preencha o e-mail abaixo e peça a seção de contato (com aviso de privacidade).
  contato: {
    email: "",
    web3formsChave: "",
    assunto: "Novo contato pelo site da Imersão A Chave para Prosperidade 2027",
  },

  // Música de fundo: começa no 1º toque/clique do visitante (navegadores bloqueiam som automático).
  musica: {
    arquivo: "assets/audio/trilha.mp3",
    volume: 0.35, // 0 a 1
  },

  frames: {
    total: 180,
    desktop: "assets/frames/desktop/f_{n}.webp",
    mobile: "assets/frames/mobile/f_{n}.webp",
    // Celular: ponto do quadro que fica no centro da tela ao longo do vídeo (0 = esquerda, 1 = direita).
    // Pares [progresso, foco]; o valor é interpolado entre eles.
    focoCelular: [[0, 0.66], [0.2, 0.62], [0.35, 0.55], [0.5, 0.5], [1, 0.5]],
  },
};
