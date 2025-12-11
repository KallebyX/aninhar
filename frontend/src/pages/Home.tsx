import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16" aria-labelledby="hero-title">
        <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Seja Bem-vindo(a) ao<br />
          <span className="text-primary-600">PROJETO ANINHAR!</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          A chegada de um recém-nascido transforma vidas. É um momento de alegria imensa,
          mas também repleto de dúvidas e inseguranças, especialmente após a alta da maternidade.
        </p>
      </section>

      {/* Introduction */}
      <section className="card max-w-5xl mx-auto mb-12" aria-labelledby="intro-title">
        <h2 id="intro-title" className="section-title text-center mb-8">
          Em quem podemos confiar?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Em meio a um volume gigantesco de informações dispersas na internet, muitos pais e mães se perguntam:
          em quem podemos confiar? O <strong>PROJETO ANINHAR</strong> nasceu para ser o seu porto seguro, como um colo.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-16" aria-labelledby="about-title">
        <div className="card max-w-5xl mx-auto">
          <h2 id="about-title" className="section-title text-primary-600">
            Quem Somos e Nossa Missão
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Este projeto é fruto de um trabalho de Mestrado, ligado ao <strong>Programa de Pós-Graduação
              em Saúde Materno Infantil da Universidade Franciscana (UFN)</strong>, uma iniciativa desenvolvida
              por uma Pediatra e Mestranda, dedicada a transformar o conhecimento científico em apoio prático
              e acessível.
            </p>
            <p>
              Embora seja uma ferramenta gratuita disponível para famílias de todo o Brasil, temos um vínculo
              especial com a <strong>Maternidade Santa Isabel do Hospital Casa de Saúde</strong>, localizado em
              Santa Maria/RS, de onde nasce a inspiração e o desejo de facilitar a transição dos pais para casa
              com seu bebê.
            </p>
            <p className="font-semibold text-primary-600 text-xl">
              Nossa missão é clara: simplificar a jornada de cuidados com seu recém-nascido.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="mb-16" aria-labelledby="commitment-title">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 id="commitment-title" className="section-title text-primary-600">
            Nosso Compromisso com Você
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Acreditamos que <strong>a informação certa, no momento certo</strong>, tem o poder de tornar a
              maternidade e a paternidade mais leves. Por isso, oferecemos um conteúdo seguro, claro e
              integralmente baseado em evidências científicas.
            </p>
            <p>
              Aqui, você terá orientações confiáveis para os cuidados diários, garantindo que suas decisões
              sejam informadas e livres de mitos. Queremos que, ao utilizar o PROJETO ANINHAR, você se sinta:
            </p>
            <ul className="list-none space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span><strong>Apto(a) e seguro(a)</strong> para cuidar do seu bebê com confiança</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span><strong>Acolhido(a)</strong>, sabendo que tem uma fonte de apoio em quem contar</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span><strong>Mais leve</strong> para poder desfrutar e curtir esse momento tão especial da sua vida
                com seu filho, minimizando qualquer estresse ou ansiedade</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Themes Section - Main Navigation by Themes */}
      <section className="mb-16" aria-labelledby="themes-title">
        <div className="max-w-5xl mx-auto">
          <h2 id="themes-title" className="section-title text-primary-600 text-center mb-8">
            Explore por Temas
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Navegue pelo conteúdo organizado por temas para encontrar as informações que você precisa:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primeiros Passos */}
            <Link
              to="/primeiros-passos"
              className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 hover:border-primary-400"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <span className="text-4xl">👶</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Primeiros Passos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tudo que você precisa saber nos primeiros dias: vacinas, testes de triagem,
                  primeira consulta e os cuidados essenciais para seu recém-nascido.
                </p>
                <div className="mt-4 text-primary-600 font-semibold group-hover:text-primary-700">
                  Acessar →
                </div>
              </div>
            </Link>

            {/* Higiene e Cuidados Diários */}
            <Link
              to="/higiene-cuidados"
              className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-secondary-50 to-white border-2 border-secondary-200 hover:border-secondary-400"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                  <span className="text-4xl">🛁</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-600 mb-3">Higiene e Cuidados Diários</h3>
                <p className="text-gray-700 leading-relaxed">
                  Orientações sobre banho, troca de fraldas, cuidados com o coto umbilical,
                  amamentação e a rotina diária do bebê.
                </p>
                <div className="mt-4 text-secondary-600 font-semibold group-hover:text-secondary-700">
                  Acessar →
                </div>
              </div>
            </Link>

            {/* Prevenções */}
            <Link
              to="/prevencoes"
              className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 hover:border-primary-400"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-3">Prevenções</h3>
                <p className="text-gray-700 leading-relaxed">
                  Guia completo de segurança: prevenção de acidentes domésticos,
                  sono seguro, quedas e cuidados essenciais para proteger seu bebê.
                </p>
                <div className="mt-4 text-primary-600 font-semibold group-hover:text-primary-700">
                  Acessar →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="mb-16" aria-labelledby="resources-title">
        <div className="card max-w-5xl mx-auto">
          <h2 id="resources-title" className="section-title text-primary-600">
            O que Você Encontrará Aqui
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            O site é um espaço de apoio completo e em constante crescimento, com recursos desenhados para
            responder às suas necessidades:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-primary-200 hover:border-primary-400 transition-colors">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dicas e Textos</h3>
              <p className="text-gray-700">
                Conteúdo didático sobre as dúvidas mais comuns da fase neonatal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-secondary-200 hover:border-secondary-400 transition-colors">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vídeos Práticos</h3>
              <p className="text-gray-700">
                Guias visuais para o dia a dia de cuidados com seu bebê.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-primary-200 hover:border-primary-400 transition-colors">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Área de Dúvidas</h3>
              <p className="text-gray-700">
                Um canal dedicado onde você poderá retirar suas perguntas e buscar o amparo necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16">
        <div className="card max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conte com o PROJETO ANINHAR
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Para transformar incertezas em confiança, tornando seus primeiros dias como pais
            uma experiência mais tranquila e feliz.
          </p>
          <p className="text-lg opacity-90">
            Escolha um tema acima e comece sua jornada de aprendizado!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
