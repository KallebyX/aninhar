# 🚀 Guia de Início Rápido - Projeto Aninhar

## Opção 1: Usando Docker (Recomendado) 🐳

### Pré-requisitos
- Docker instalado
- Docker Compose instalado

### Passos:

1. **Clone o repositório**
```bash
git clone <repository-url>
cd aninhar
```

2. **Execute o script de inicialização**
```bash
./start.sh
```

Ou manualmente:

```bash
docker-compose up -d --build
```

3. **Acesse a aplicação**
- 🌐 Frontend: http://localhost
- 🔌 Backend API: http://localhost:5000
- ❤️ Health Check: http://localhost:5000/health

### Comandos Úteis:

```bash
# Ver logs
docker-compose logs -f

# Ver logs apenas do frontend
docker-compose logs -f frontend

# Ver logs apenas do backend
docker-compose logs -f backend

# Parar os containers
docker-compose down

# Parar e remover volumes
docker-compose down -v

# Reconstruir os containers
docker-compose up -d --build
```

## Opção 2: Desenvolvimento Local 💻

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse: http://localhost:3000

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API disponível em: http://localhost:5000

## 🏗️ Estrutura de Pastas

```
aninhar/
├── frontend/              # React + TypeScript + Tailwind
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── styles/       # Estilos globais
│   │   ├── App.tsx       # Componente principal
│   │   └── main.tsx      # Entry point
│   └── Dockerfile
├── backend/              # Node.js + Express
│   ├── src/
│   │   ├── routes/      # Rotas da API
│   │   ├── controllers/ # Lógica de negócio
│   │   ├── middleware/  # Middlewares
│   │   └── server.js    # Entry point
│   └── Dockerfile
├── docker-compose.yml    # Orquestração Docker
└── start.sh             # Script de inicialização
```

## 🔍 Testando a Aplicação

### Testar o Backend

```bash
# Health check
curl http://localhost:5000/health

# Testar endpoint de informações
curl http://localhost:5000/api/info/home
```

### Testar o Frontend

Abra http://localhost no navegador e navegue pelas páginas:
- Página Inicial
- Prevenção de Acidentes
- Primeira Semana

## 🐛 Troubleshooting

### Porta já em uso

Se a porta 80 ou 5000 já estiver em uso:

```bash
# Verificar o que está usando a porta
sudo lsof -i :80
sudo lsof -i :5000

# Parar o serviço ou mudar a porta no docker-compose.yml
```

### Containers não iniciam

```bash
# Ver logs detalhados
docker-compose logs

# Remover tudo e começar do zero
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

### Erro de permissão no start.sh

```bash
chmod +x start.sh
```

## 📦 Deploy em Produção

### Usando Docker Compose

```bash
# No servidor
git clone <repository-url>
cd aninhar
docker-compose up -d --build
```

### Variáveis de Ambiente

Configure as seguintes variáveis no arquivo `backend/.env`:

```env
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://seudominio.com
```

### Nginx como Reverse Proxy

Se você já tem um Nginx no servidor, adicione esta configuração:

```nginx
server {
    listen 80;
    server_name seudominio.com;

    location / {
        proxy_pass http://localhost;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔐 Segurança

O projeto já vem com:
- ✅ Helmet.js (Headers de segurança)
- ✅ CORS configurado
- ✅ Rate Limiting
- ✅ Validação de entrada
- ✅ Health checks

## 📞 Suporte

Para problemas ou dúvidas, consulte:
- README.md
- Documentação do código
- Issues no repositório

---

**Desenvolvido com ❤️ para o Projeto Aninhar**
