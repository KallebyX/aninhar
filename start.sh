#!/bin/bash

echo "🏠 Projeto Aninhar - Inicializando..."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não está instalado. Por favor, instale o Docker primeiro."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose não está instalado. Por favor, instale o Docker Compose primeiro."
    exit 1
fi

echo "✅ Docker e Docker Compose encontrados"
echo ""

# Stop existing containers
echo "🛑 Parando containers existentes..."
docker-compose down

# Build and start containers
echo "🔨 Construindo e iniciando containers..."
docker-compose up -d --build

# Wait for services to be healthy
echo ""
echo "⏳ Aguardando serviços iniciarem..."
sleep 10

# Check backend health
echo ""
echo "🔍 Verificando saúde dos serviços..."
if curl -f http://localhost:5000/health &> /dev/null; then
    echo "✅ Backend: OK"
else
    echo "⚠️  Backend: Aguardando inicialização..."
fi

if curl -f http://localhost/ &> /dev/null; then
    echo "✅ Frontend: OK"
else
    echo "⚠️  Frontend: Aguardando inicialização..."
fi

echo ""
echo "🎉 Projeto Aninhar iniciado com sucesso!"
echo ""
echo "📝 Acesse:"
echo "   Frontend: http://localhost"
echo "   Backend API: http://localhost:5000"
echo "   Health Check: http://localhost:5000/health"
echo ""
echo "📊 Para ver os logs:"
echo "   docker-compose logs -f"
echo ""
echo "🛑 Para parar:"
echo "   docker-compose down"
