window.SITE = {
  nome: "Imersão A Chave para Prosperidade 2027",

  // Link oficial do checkout na Sympla. TODOS os botões "Garantir minha vaga" usam este link.
  // Enquanto estiver vazio, os botões levam ao WhatsApp da organização (com mensagem sobre o ingresso).
  sympla: "https://www.sympla.com.br/evento/imersao/3660256",

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
    arquivo: "assets/audio/refrao.mp3", // refrão ("virou a chave...") + ponte ("hoje eu sei que curar dá trabalho...") + refrão final, 68 s, em loop
    volume: 0.28, // 0 a 1 (o refrão é ~3 dB mais alto que a média da música inteira)
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
