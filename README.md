# Mentalista - Jogo de Adivinhação 🔮

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Este é um jogo de adivinhação, também conhecido como "Mentalista", desenvolvido como um dos desafios da **Imersão Dev da Alura**. O objetivo do jogo é simples: o jogador deve tentar adivinhar um número secreto gerado aleatoriamente pelo computador.

O projeto foi focado na aplicação de lógica de programação com JavaScript, utilizando laços de repetição e condicionais para criar a mecânica do jogo.

---

## ✨ Como Funciona o Jogo

1.  **Geração do Número Secreto**: Ao iniciar, o script gera um número inteiro aleatório entre 0 e 1000.
2.  **Palpite do Jogador**: O jogador insere um palpite através de um `prompt`.
3.  **Feedback Instantâneo**: O jogo informa se o palpite foi muito alto ou muito baixo em relação ao número secreto.
4.  **Tentativas**: O jogador pode continuar tentando até acertar o número.
5.  **Vitória**: Ao adivinhar o número correto, o jogo exibe uma mensagem de parabéns.

---

## 🛠️ Tecnologias e Conceitos Aplicados

-   **JavaScript**:
    -   **`Math.random()`**: Utilizado para gerar o número secreto de forma aleatória.
    -   **`parseInt()`**: Para garantir que a entrada do usuário seja tratada como um número inteiro.
    -   **Laço `while`**: Para manter o jogo em execução enquanto o jogador não acertar o número.
    -   **Condicionais (`if`/`else`)**: Para comparar o palpite com o número secreto e fornecer o feedback correto.
    -   **`alert()`**: Para exibir as mensagens de feedback e de vitória.

-   **HTML5**: Responsável pela estrutura da página onde o jogo é executado.

-   **CSS3**: Utilizado para a estilização visual, incluindo o fundo temático e a formatação do título.

---

## 🚀 Como Jogar

1.  Clone o repositório para a sua máquina.
2.  Abra o arquivo `index.html` no seu navegador.
3.  Digite seus palpites nos `prompts` que aparecerão na tela e tente adivinhar o número secreto!
