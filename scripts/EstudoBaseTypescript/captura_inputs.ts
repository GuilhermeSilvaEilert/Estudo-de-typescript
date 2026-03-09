import * as readline from 'readline';

// Cria uma interface para leitura do input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para capturar o input do usuário
const perguntar = (pergunta: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
};

// Exemplo de uso
(async () => {
  try {
    const nome = await perguntar('Qual é o seu nome? ');
    console.log(`Olá, ${nome}!`);
  } catch (error) {
    console.error('Erro ao capturar o input:', error);
  } finally {
    rl.close(); // Fecha a interface após o uso
  }
})();