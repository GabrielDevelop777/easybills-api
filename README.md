<div align="center">
    
  # 💰 EasyBills API
  
  ### ⚡ O motor por trás do controle financeiro inteligente!
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
  [![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
  
  **API RESTful de alta performance para a plataforma EasyBills** 🚀
  
  [Documentação](#-endpoints-principais) • [Instalação](#️-instalação-rápida) • [Recursos](#-recursos-incríveis)
  
</div>

---

## 📖 Sobre o Projeto

Esta é a **API back-end** da aplicação **EasyBills** - sua solução completa para gestão financeira pessoal! 

Construída com foco em **performance**, **segurança** e **escalabilidade**, ela fornece todos os dados e lógicas necessárias para a interface do usuário ter uma experiência fluida e confiável.

> 💡 **Origem**: O projeto original, EasyBills, foi desenvolvido no DevClub com Rodolfo Mori. Esta API representa a **evolução e personalização** dessa base sólida!

---

## ✨ Recursos Incríveis

<table>
  <tr>
    <td align="center">🔐</td>
    <td><strong>Autenticação Segura</strong><br/>Verificação de tokens JWT (Firebase ID Tokens) para proteger todas as rotas sensíveis</td>
  </tr>
  <tr>
    <td align="center">📊</td>
    <td><strong>Gestão Completa de Transações</strong><br/>CRUD completo para criar, listar e deletar transações financeiras</td>
  </tr>
  <tr>
    <td align="center">📈</td>
    <td><strong>Sumários Inteligentes</strong><br/>Dados agregados otimizados: resumo mensal, históricos, gastos por categoria</td>
  </tr>
  <tr>
    <td align="center">🏷️</td>
    <td><strong>Categorias Personalizadas</strong><br/>Sistema de categorias globais para organizar suas finanças</td>
  </tr>
  <tr>
    <td align="center">✅</td>
    <td><strong>Validação Robusta</strong><br/>Validação de entrada em todas as rotas utilizando Zod</td>
  </tr>
  <tr>
    <td align="center">⚙️</td>
    <td><strong>Setup Automático</strong><br/>Criação automática de categorias padrão no primeiro boot</td>
  </tr>
</table>

---

## 🛠️ Stack Tecnológica

```text
💻 Linguagem      → TypeScript
🟢 Runtime        → Node.js
⚡ Framework      → Fastify (com @fastify/cors)
🔷 ORM            → Prisma
🍃 Database       → MongoDB
🔥 Auth           → Firebase Admin SDK
✔️ Validação      → Zod
📅 Datas          → Day.js
🔒 Env Vars       → Dotenv
```

---

## 🚦 Endpoints Principais

> **Base URL**: `/api`  
> 🔒 **Rotas Protegidas** requerem um `Bearer Token` válido no header `Authorization`

| Método | Endpoint | Descrição | Proteção |
|--------|----------|-----------|----------|
| `GET` | `/health` | Verifica o status da API | ❌ |
| `GET` | `/categories` | Retorna todas as categorias globais | 🔒 |
| `POST` | `/transactions` | Cria uma nova transação | 🔒 |
| `GET` | `/transactions` | Lista transações com filtros | 🔒 |
| `GET` | `/transactions/summary` | Resumo financeiro mensal | 🔒 |
| `GET` | `/transactions/historical` | Histórico de receitas/despesas | 🔒 |
| `DELETE` | `/transactions/:id` | Deleta uma transação específica | 🔒 |

---

## 🚀 Instalação Rápida

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v18 ou superior) - [Download](https://nodejs.org/)
- **Yarn** ou npm
- **MongoDB** (local ou cloud - recomendamos [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Conta Firebase** com projeto configurado - [Console Firebase](https://console.firebase.google.com/)

---

### ⚙️ Configuração

#### 1️⃣ Clone o repositório

```bash
git clone https://github.com/GabrielDevelop777/easybills-api.git
cd easybills-api
```

#### 2️⃣ Instale as dependências

```bash
yarn install
# ou
npm install
```

#### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env  # Se tiver um arquivo de exemplo
```

Edite o `.env` com suas credenciais:

```env
# 🗄️ Configurações do Banco de Dados
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/easybillsdb"

# 🚀 Configurações da Aplicação
NODE_ENV=dev
PORT=3001

# 🔥 Credenciais Firebase Admin SDK
FIREBASE_PROJECT_ID="seu-firebase-project-id"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@seu-projeto.iam.gserviceaccount.com"
```

<details>
<summary>🔍 <strong>Como obter as credenciais do Firebase?</strong></summary>

1. Acesse o [Console Firebase](https://console.firebase.google.com/)
2. Selecione seu projeto
3. Vá em **Configurações do Projeto** ⚙️
4. Clique em **Contas de serviço**
5. Clique em **Gerar nova chave privada**
6. Use os valores do arquivo JSON baixado no seu `.env`

⚠️ **Importante**: Mantenha o formato exato da `FIREBASE_PRIVATE_KEY`, incluindo `\n` para as quebras de linha!

</details>

#### 4️⃣ Sincronize o schema do Prisma

```bash
npx prisma generate
npx prisma db push
```

#### 5️⃣ Inicie o servidor

```bash
yarn dev
# ou
npm run dev
```

---

## 🎉 Pronto!

A API estará rodando em **`http://localhost:3001`** (ou na porta definida no `.env`)

Você pode testar os endpoints usando:
- 🔥 [Insomnia](https://insomnia.rest/)
- 📮 [Postman](https://www.postman.com/)
- ⚡ [Thunder Client](https://www.thunderclient.com/) (extensão VS Code)

---

## 📝 Scripts Disponíveis

```bash
yarn dev          # Inicia o servidor em modo desenvolvimento
yarn build        # Compila o projeto para produção
yarn start        # Inicia o servidor em modo produção
yarn prisma       # Acessa a CLI do Prisma
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 🙏 Agradecimentos

- **DevClub & Rodolfo Mori** - Pela inspiração e base do projeto EasyBills
- **Comunidade Open Source** - Por todas as ferramentas incríveis utilizadas

---

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GabrielDevelop777">
        <img src="https://github.com/GabrielDevelop777.png" width="100px;" alt="Gabriel Alexandre"/><br>
        <sub>
          <b>Gabriel Alexandre</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

Feito com ❤️ e muito ☕

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  
  ### ⭐ Se este projeto te ajudou, considere dar uma estrela!
  
  [![GitHub stars](https://img.shields.io/github/stars/GabrielDevelop777/easybills-api?style=social)](https://github.com/GabrielDevelop777/easybills-api/stargazers)
  
</div>