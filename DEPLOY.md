# 🚀 Guia de Deploy - Projeto Aninhar

Este guia contém instruções detalhadas para fazer o deploy do Projeto Aninhar em diferentes ambientes.

## 📋 Pré-requisitos

- Servidor Linux (Ubuntu 20.04+ recomendado)
- Docker e Docker Compose instalados
- Acesso SSH ao servidor
- Domínio configurado (opcional, mas recomendado)
- Certificado SSL (Let's Encrypt recomendado)

## 🐳 Deploy com Docker (Método Recomendado)

### 1. Preparar o Servidor

```bash
# Atualizar o sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Adicionar usuário ao grupo docker
sudo usermod -aG docker $USER
```

### 2. Clonar o Repositório

```bash
cd /opt
sudo git clone <repository-url> aninhar
cd aninhar
```

### 3. Configurar Variáveis de Ambiente

```bash
# Copiar e editar o arquivo .env
sudo cp .env.example backend/.env
sudo nano backend/.env
```

Atualize as variáveis:
```env
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://seudominio.com
```

### 4. Iniciar a Aplicação

```bash
# Construir e iniciar os containers
sudo docker-compose up -d --build

# Verificar se os containers estão rodando
sudo docker-compose ps

# Ver logs
sudo docker-compose logs -f
```

### 5. Configurar Firewall

```bash
# Permitir tráfego HTTP e HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 🌐 Configurar Domínio e SSL

### Opção 1: Usando Nginx como Reverse Proxy (Recomendado)

#### 1. Instalar Nginx

```bash
sudo apt install nginx -y
```

#### 2. Configurar Nginx

```bash
sudo nano /etc/nginx/sites-available/aninhar
```

Adicione:
```nginx
server {
    listen 80;
    server_name seudominio.com www.seudominio.com;

    location / {
        proxy_pass http://localhost;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 3. Ativar o site

```bash
sudo ln -s /etc/nginx/sites-available/aninhar /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 4. Instalar SSL com Let's Encrypt

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado SSL
sudo certbot --nginx -d seudominio.com -d www.seudominio.com

# Verificar renovação automática
sudo certbot renew --dry-run
```

### Opção 2: Modificar docker-compose.yml para usar porta 443

Edite o docker-compose.yml:
```yaml
frontend:
  ports:
    - "80:80"
    - "443:443"
  volumes:
    - /etc/letsencrypt:/etc/letsencrypt:ro
```

## 🔄 Atualizações e Manutenção

### Atualizar a Aplicação

```bash
cd /opt/aninhar

# Puxar últimas alterações
sudo git pull origin main

# Reconstruir e reiniciar containers
sudo docker-compose down
sudo docker-compose up -d --build
```

### Backup

```bash
# Criar script de backup
sudo nano /opt/backup-aninhar.sh
```

Adicione:
```bash
#!/bin/bash
BACKUP_DIR="/backup/aninhar"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup do código
tar -czf $BACKUP_DIR/aninhar-$DATE.tar.gz /opt/aninhar

# Remover backups antigos (manter últimos 7 dias)
find $BACKUP_DIR -name "aninhar-*.tar.gz" -mtime +7 -delete

echo "Backup concluído: $BACKUP_DIR/aninhar-$DATE.tar.gz"
```

Tornar executável e adicionar ao cron:
```bash
sudo chmod +x /opt/backup-aninhar.sh
sudo crontab -e
```

Adicione:
```
0 2 * * * /opt/backup-aninhar.sh
```

## 📊 Monitoramento

### Ver Logs

```bash
# Todos os serviços
sudo docker-compose logs -f

# Apenas frontend
sudo docker-compose logs -f frontend

# Apenas backend
sudo docker-compose logs -f backend

# Últimas 100 linhas
sudo docker-compose logs --tail=100
```

### Health Checks

```bash
# Verificar saúde do backend
curl http://localhost:5000/health

# Verificar frontend
curl -I http://localhost
```

### Monitorar Recursos

```bash
# Ver uso de recursos dos containers
sudo docker stats

# Ver processos
sudo docker-compose top
```

## 🔐 Segurança em Produção

### 1. Atualizar Regularmente

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Atualizar dependências Node.js
cd frontend && npm audit fix
cd ../backend && npm audit fix
```

### 2. Configurar Rate Limiting no Nginx

Adicione no bloco http do nginx.conf:
```nginx
limit_req_zone $binary_remote_addr zone=aninhar:10m rate=10r/s;
limit_req zone=aninhar burst=20 nodelay;
```

### 3. Configurar Fail2Ban

```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
```

## 📱 Deploy em Cloud Providers

### AWS (EC2)

1. Criar instância EC2 (Ubuntu 20.04)
2. Configurar Security Group (portas 80, 443, 22)
3. Seguir passos acima para instalação

### Google Cloud Platform (Compute Engine)

1. Criar VM instance
2. Permitir tráfego HTTP/HTTPS
3. Seguir passos de instalação

### DigitalOcean

1. Criar Droplet
2. Adicionar domínio
3. Seguir passos de instalação

### Heroku

```bash
# Instalar Heroku CLI
curl https://cli-assets.heroku.com/install.sh | sh

# Login
heroku login

# Criar app
heroku create aninhar

# Fazer deploy
git push heroku main
```

## ⚠️ Troubleshooting

### Containers não iniciam

```bash
# Ver logs detalhados
sudo docker-compose logs

# Verificar portas em uso
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :5000

# Reiniciar Docker
sudo systemctl restart docker
```

### Erro de permissão

```bash
# Dar permissões corretas
sudo chown -R $USER:$USER /opt/aninhar
```

### Nginx não conecta ao backend

```bash
# Verificar se o backend está rodando
curl http://localhost:5000/health

# Testar configuração Nginx
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

## 📞 Suporte

Para problemas durante o deploy:
1. Verifique os logs: `docker-compose logs`
2. Verifique o status: `docker-compose ps`
3. Consulte a documentação
4. Abra uma issue no repositório

---

**Bom deploy! 🚀**
