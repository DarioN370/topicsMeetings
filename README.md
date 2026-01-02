# 📝 Lista de Pautas para Reuniões

![Print do Projeto](assets/imgs/Captura de tela 2026-01-02 190911.png)

Um projeto minimalista e funcional para organização de pautas de reuniões, desenvolvido para facilitar o fluxo de trabalho e garantir que nenhum tópico seja esquecido.

## 🚀 Funcionalidades

- **Adição Dinâmica**: Adicione novos itens à lista instantaneamente.
- **Remoção de Itens**: Cada pauta possui seu próprio botão para ser removida após discutida.
- **Feedback Temporário**: Mensagens de sucesso ou erro aparecem para orientar o usuário e desaparecem automaticamente após 2 segundos para manter a interface limpa.
- **Interface Clean**: Design moderno em tons de branco, cinza e cinza escuro, otimizado para não cansar a vista em monitores IPS.
- **Responsividade**: Preparado para ser visualizado tanto no monitor principal quanto em dispositivos móveis via Live Server.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do projeto.
- **CSS3**: Estilização personalizada com foco em UX/UI minimalista.
- **JavaScript (Vanilla)**: Lógica para manipulação do DOM, timers (`setTimeout`) e eventos.

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── css/
│   │   └── style.css      # Estilização (Branco/Cinza/Cinza Escuro)
│   ├── imgs/
│   │   └── favIcon.png    # Ícone da aba do navegador
│   └── js/
│       └── script.js     # Lógica principal (Adição/Remoção/Timers)
├── index.html             # Estrutura principal
├── boasVindas.js          # Script de saudação inicial
└── .gitignore             # Arquivos ignorados no repositório
