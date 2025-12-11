const HigieneCuidados = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12" aria-labelledby="page-title">
        <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-secondary-600">Higiene e Cuidados Diários</span>
        </h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Os cuidados diários com seu recém-nascido são fundamentais para garantir seu bem-estar
            e saúde. Aqui você encontrará orientações práticas e seguras para o dia a dia.
          </p>
          <p className="font-semibold text-secondary-600">
            Cada momento de cuidado é também um momento de conexão e amor com seu bebê.
          </p>
        </div>
      </section>

      {/* Banho do Bebê */}
      <section className="mb-12" aria-labelledby="banho">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-secondary-50 to-pink-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🛁</span>
            <h2 id="banho" className="section-title mb-0">
              O Banho do Bebê
            </h2>
          </div>

          <div className="bg-secondary-100 border-l-4 border-secondary-600 p-4 rounded mb-6">
            <p className="font-bold text-secondary-900">
              O banho é um momento especial de cuidado e carinho!
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-secondary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preparação</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span>Prepare todos os itens antes de começar: toalha, fralda, roupinha, sabonete neutro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span>A <strong>temperatura ideal da água</strong> é entre 36°C e 37°C - teste com o cotovelo ou termômetro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span>O ambiente deve estar aquecido, sem correntes de ar</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-secondary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Durante o Banho</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span><strong>Segure firmemente</strong> o bebê, apoiando a cabeça e o pescoço</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span>Comece pelo rosto, depois cabeça e corpo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span>Use sabonete neutro e evite produtos perfumados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 text-xl mr-3 mt-1">✓</span>
                  <span>O banho não precisa ser demorado - <strong>5 a 10 minutos</strong> são suficientes</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-semibold text-red-800 mb-2">NUNCA deixe o bebê sozinho na banheira!</p>
              <p className="text-red-700">Mesmo por um segundo. Se precisar atender algo urgente, leve o bebê com você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coto Umbilical */}
      <section className="mb-12" aria-labelledby="coto">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🩹</span>
            <h2 id="coto" className="section-title mb-0">
              Cuidados com o Coto Umbilical
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            O coto umbilical geralmente cai entre <strong>7 a 15 dias</strong> após o nascimento.
            Até lá, os cuidados adequados são essenciais para evitar infecções.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Como Limpar</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3 mt-1">1</span>
                  <span>Lave bem as mãos antes de fazer a higiene</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3 mt-1">2</span>
                  <span>Use <strong>álcool 70%</strong> com cotonete ou gaze</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3 mt-1">3</span>
                  <span>Limpe a base do coto, onde ele se conecta à pele</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3 mt-1">4</span>
                  <span>Faça a higiene a cada troca de fralda e após o banho</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <p className="font-semibold text-green-900 mb-2">Dicas importantes:</p>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>Mantenha o coto <strong>seco e arejado</strong></li>
                <li>Dobre a fralda para baixo do umbigo para evitar abafamento</li>
                <li>Não cubra com faixas ou curativos</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
              <p className="font-semibold text-amber-900 mb-2">Procure o pediatra se notar:</p>
              <ul className="list-disc list-inside space-y-1 text-amber-800">
                <li>Vermelhidão ao redor do umbigo</li>
                <li>Secreção com mau cheiro ou pus</li>
                <li>Sangramento persistente</li>
                <li>Inchaço na região</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troca de Fraldas */}
      <section className="mb-12" aria-labelledby="fraldas">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">👶</span>
            <h2 id="fraldas" className="section-title mb-0">
              Troca de Fraldas
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nos primeiros dias, o bebê pode precisar de <strong>8 a 12 trocas de fralda por dia</strong>.
            Isso diminui gradualmente conforme ele cresce.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passo a Passo</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                  <span>Prepare tudo antes: fralda limpa, algodão ou lenço umedecido, pomada se necessário</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                  <span>Limpe sempre de frente para trás, especialmente em meninas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                  <span>Seque bem todas as dobrinhas antes de colocar a fralda limpa</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                  <span>Não aperte demais a fralda - deve caber dois dedos na cintura</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prevenção de Assaduras</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3 mt-1">✓</span>
                  <span>Troque a fralda assim que possível após sujá-la</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3 mt-1">✓</span>
                  <span>Deixe o bebê sem fralda por alguns minutos ao dia para arejar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3 mt-1">✓</span>
                  <span>Use pomada de barreira (óxido de zinco) em cada troca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 text-xl mr-3 mt-1">✓</span>
                  <span>Prefira água morna e algodão a lenços umedecidos perfumados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Amamentação */}
      <section className="mb-12" aria-labelledby="amamentacao">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🤱</span>
            <h2 id="amamentacao" className="section-title mb-0">
              Amamentação
            </h2>
          </div>

          <div className="bg-primary-100 border-l-4 border-primary-600 p-4 rounded mb-6">
            <p className="font-bold text-primary-900">
              O leite materno é o alimento mais completo para o bebê nos primeiros 6 meses de vida!
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dicas para uma boa amamentação</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3 mt-1">✓</span>
                  <span>Ofereça o peito em <strong>livre demanda</strong> - sempre que o bebê demonstrar fome</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3 mt-1">✓</span>
                  <span>A <strong>pega correta</strong> é essencial: boca bem aberta, lábio inferior virado para fora, queixo encostando no peito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3 mt-1">✓</span>
                  <span>Alterne os seios a cada mamada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 text-xl mr-3 mt-1">✓</span>
                  <span>Deixe o bebê esvaziar um seio antes de oferecer o outro</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sinais de que o bebê está mamando bem</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                  <span>6 a 8 fraldas molhadas por dia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                  <span>Ganho de peso adequado nas consultas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                  <span>Bebê satisfeito após as mamadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                  <span>Sono tranquilo entre as mamadas</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
              <p className="font-semibold text-amber-900 mb-2">Procure ajuda se:</p>
              <ul className="list-disc list-inside space-y-1 text-amber-800">
                <li>Sentir dor persistente durante a amamentação</li>
                <li>Notar fissuras ou rachaduras nos mamilos</li>
                <li>O bebê parecer sempre insatisfeito ou choroso</li>
                <li>Tiver dúvidas sobre a quantidade de leite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sono e Rotina */}
      <section className="mb-12" aria-labelledby="sono">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">😴</span>
            <h2 id="sono" className="section-title mb-0">
              Sono e Rotina
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Recém-nascidos dormem em média <strong>16 a 17 horas por dia</strong>, mas em ciclos curtos
            de 2 a 4 horas. Com o tempo, os períodos de sono vão se alongando.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-indigo-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Criando uma rotina</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 text-xl mr-3 mt-1">✓</span>
                  <span>Estabeleça horários regulares para banho e mamadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 text-xl mr-3 mt-1">✓</span>
                  <span>Diferencie o dia da noite: luz e interação durante o dia, ambiente calmo à noite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 text-xl mr-3 mt-1">✓</span>
                  <span>Crie rituais de sono: banho morno, música suave, ambiente escurecido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 text-xl mr-3 mt-1">✓</span>
                  <span>Coloque o bebê no berço sonolento, mas ainda acordado</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="font-semibold text-blue-900 mb-2">Lembre-se:</p>
              <p className="text-blue-800">
                Cada bebê tem seu próprio ritmo. A rotina vai se estabelecendo naturalmente com o tempo.
                Seja paciente consigo e com seu bebê durante esse período de adaptação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="text-center">
        <div className="card max-w-4xl mx-auto bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Você está fazendo um ótimo trabalho!
          </h2>
          <p className="text-xl leading-relaxed">
            Cada dia você aprende mais sobre seu bebê e ele sobre você.
            Confie em seus instintos e conte com o PROJETO ANINHAR para apoiá-lo nessa jornada!
          </p>
        </div>
      </section>
    </div>
  )
}

export default HigieneCuidados
