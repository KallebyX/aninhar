# Projeto Aninhar 🏠

> Apoio e orientação confiável para cuidados com recém-nascidos, baseados em evidências científicas.

## 📋 Sobre o Projeto

O Projeto Aninhar é fruto de um trabalho de Mestrado ligado ao Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana (UFN). Uma iniciativa desenvolvida por uma Pediatra e Mestranda, dedicada a transformar o conhecimento científico em apoio prático e acessível para famílias com recém-nascidos.

## 🚀 Tecnologias

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- Express Validator
- Helmet (Segurança)
- CORS
- Rate Limiting

### DevOps
- Docker
- Docker Compose
- Nginx

## 📦 Instalação e Uso

### Pré-requisitos
- Docker e Docker Compose instalados
- Node.js 20+ (para desenvolvimento local)

### Usando Docker (Recomendado)

1. Clone o repositório:
```bash
git clone <repository-url>
cd aninhar
```

2. Inicie os containers:
```bash
docker-compose up -d
```

3. Acesse a aplicação:
- Frontend: http://localhost
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

### Desenvolvimento Local

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## 🏗️ Estrutura do Projeto

```
aninhar/
├── frontend/              # Aplicação React
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   └── styles/       # Estilos globais
│   ├── Dockerfile
│   └── nginx.conf
├── backend/              # API Node.js
│   ├── src/
│   │   ├── routes/      # Rotas da API
│   │   ├── controllers/ # Controladores
│   │   └── middleware/  # Middlewares
│   └── Dockerfile
└── docker-compose.yml
```

## 🔒 Segurança

O projeto implementa diversas práticas de segurança:
- Helmet.js para headers de segurança HTTP
- Rate limiting para prevenir abuso
- Validação de entrada com express-validator
- CORS configurado adequadamente
- Containers executados como usuário não-root
- Health checks implementados

## 🌐 Recursos do Site

- **Página Inicial**: Apresentação do projeto e missão
- **Prevenção de Acidentes**: Dicas essenciais de segurança
- **Primeira Semana**: Guia de cuidados nos primeiros dias
- **Design Responsivo**: Adaptado para todos os dispositivos
- **Acessibilidade**: Seguindo padrões WCAG

## 📱 Responsividade

O site é 100% responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contribuindo

Este é um projeto acadêmico vinculado à Universidade Franciscana (UFN). Para contribuições, entre em contato com os responsáveis pelo projeto.

## 📄 Licença

Este projeto é parte de um trabalho de Mestrado da Universidade Franciscana (UFN).

## 📞 Contato

**Universidade Franciscana (UFN)**
Programa de Pós-Graduação em Saúde Materno Infantil
Santa Maria/RS

---

Desenvolvido com ❤️ para ajudar famílias no cuidado com seus recém-nascidos.
