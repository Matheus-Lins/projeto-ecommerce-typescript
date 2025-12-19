# 💻 Projeto E-commerce PC_CORE

Este é um sistema de gerenciamento de inventário para um e-commerce de hardware e software, desenvolvido durante o bootcamp da **Generation Brasil**. O projeto é uma aplicação de console que simula um CRUD (Create, Read, Update, Delete) robusto, organizado e escalável.

## 👩‍💻Tecnologias Utilizadas
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Runtime:** [Node.js](https://nodejs.org/)
* **Bibliotecas:** `readline-sync` para interação via terminal
* **Ferramentas:** Git para versionamento e VS Code como IDE

## 🛠️ Diferenciais Técnicos (Engenharia de Software)
O grande destaque deste projeto é a aplicação de padrões de design e conceitos avançados de Programação Orientada a Objetos (POO):

* **Padrão Repository:** Utilização de uma interface (`ProdutoRepository`) para definir o contrato de métodos, separando a especificação da implementação da lógica.
* **Arquitetura Organizada:** Divisão clara de responsabilidades entre pastas: `model` (entidades), `controller` (lógica de negócio) e `repository` (contratos).
* **Abstração e Herança:** A classe `Produto` é definida como **abstração**, servindo de base para as classes especializadas `Hardware` e `TipoProduto`.
* **Encapsulamento:** Uso rigoroso de modificadores de acesso (`private`) e métodos `get`/`set` para proteção e validação dos dados das entidades.
* **Lógica de CRUD Avançada:** Implementação de busca por ID em arrays, tratamento de erros para itens não encontrados e geração dinâmica de IDs.

## 📋 Funcionalidades
1. **Cadastrar Produto:** Permite inserir novos itens (Hardware ou Software) com validação de categoria.
2. **Listar todos os Produtos:** Exibe todos os dados formatados, incluindo preços com tratamento decimal.
3. **Consultar por ID:** Busca rápida de um produto específico no repositório.
4. **Atualizar Dados:** Permite modificar nome, preço e estoque de itens existentes de forma segura.
5. **Remover Produto:** Exclusão de itens do inventário através do ID.

## 📂 Estrutura de Pastas
```text
├── src
│   ├── controller
│   │   └── ProdutoController.ts  # Lógica de negócio e métodos CRUD
│   ├── model
│   │   ├── Hardware.ts           # Subclasse especializada em Hardware
│   │   ├── Produto.ts            # Classe Abstrata base
│   │   └── TipoProduto.ts        # Subclasse especializada por categoria
│   └── repository
│       └── ProdutoRepository.ts  # Interface de contrato do sistema
├── menu.ts                       # Ponto de entrada (Interface de usuário)
└── tsconfig.json                 # Configurações do compilador TypeScript