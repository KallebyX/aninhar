const PrimeirosPassos = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12" aria-labelledby="page-title">
        <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-primary-600">Primeiros Passos</span>
        </h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Após a alta hospitalar, os primeiros dias com o seu recém-nascido são emocionantes, mas também
            podem ser desafiadores. Como parte do processo de adaptação à vida fora do útero, é fundamental
            garantir que o bebê receba os cuidados médicos necessários, desde as vacinas até a reavaliação clínica.
          </p>
          <p className="font-semibold text-primary-600">
            Siga todas as recomendações do hospital e do pediatra. O acompanhamento nos primeiros dias de vida
            é essencial para garantir que o bebê se adapte bem à nova fase, sem que surjam complicações que
            possam ser evitadas com cuidados simples e precoces.
          </p>
        </div>
      </section>

      {/* First Vaccines */}
      <section className="mb-12" aria-labelledby="vaccines">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">💉</span>
            <h2 id="vaccines" className="section-title mb-0">
              As Primeiras Vacinas: Hepatite B e BCG
            </h2>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded mb-6">
            <p className="font-bold text-blue-900">
              A saúde do bebê começa com a prevenção!
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Durante a internação em hospitais SUS, normalmente o recém-nascido recebe as primeiras vacinas
            antes da alta hospitalar. Mas, caso não tenha recebido, a vacina contra Hepatite B e a vacina
            BCG são as primeiras vacinas a serem administradas e devem ser realizadas o quanto antes; as
            duas podem ser realizadas em seu posto de saúde de forma gratuita:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                Vacina contra Hepatite B
              </h3>
              <p className="text-gray-700 ml-11">
                Essa vacina é crucial para proteger o bebê contra a hepatite B, uma doença que pode afetar
                o fígado e causar complicações graves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                Vacina BCG (Bacilo de Calmette-Guérin)
              </h3>
              <p className="text-gray-700 ml-11">
                Essa vacina protege o bebê contra formas graves de tuberculose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screening Tests */}
      <section className="mb-12" aria-labelledby="screening">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🔬</span>
            <h2 id="screening" className="section-title mb-0">
              Testes de Triagem Neonatal
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Além das vacinas, os <strong>exames de triagens neonatais são fundamentais</strong> e devem ser
            realizados o quanto antes. Eles servem para identificar precocemente doenças raras, mas que podem
            causar danos irreversíveis à saúde do bebê se não forem tratadas rapidamente.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mb-6">
            <p className="font-semibold text-green-900 mb-2">Realizados Durante a Internação:</p>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li><strong>Teste do Olhinho:</strong> detecção de patologias oculares</li>
              <li><strong>Manobra de Ortolani:</strong> identificação de luxação congênita de quadril</li>
              <li><strong>Teste do Coraçãozinho:</strong> detecção precoce de doenças cardíacas</li>
            </ul>
          </div>

          <p className="text-lg font-semibold text-gray-900 mb-4">
            Exames a serem realizados após a alta hospitalar:
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🦶</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teste do Pezinho</h3>
                  <p className="text-gray-700 mb-2">
                    É realizado <strong>entre o 3º e o 5º dia de vida</strong> e serve para detectar doenças
                    como a fenilcetonúria, hipotireoidismo, fibrose cística e outras.
                  </p>
                  <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-pink-500">
                    📍 O teste é simples e rápido e deve ser coletado no <strong>posto de saúde</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-200">
              <div className="flex items-start">
                <span className="text-3xl mr-4">👂</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teste da Orelhinha</h3>
                  <p className="text-gray-700 mb-2">
                    Este teste avalia a audição do bebê e deve ser feito <strong>antes de completar 1 mês de vida</strong>.
                    Ele é fundamental para identificar precocemente possíveis problemas auditivos, o que facilita
                    o tratamento precoce.
                  </p>
                  <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-purple-500">
                    👨‍⚕️ Este exame é realizado por um profissional <strong>fonoaudiólogo</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
              <div className="flex items-start">
                <span className="text-3xl mr-4">👅</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teste da Linguinha</h3>
                  <p className="text-gray-700 mb-2">
                    É um exame para diagnosticar a <strong>anquiloglossia (língua presa)</strong> em recém-nascidos.
                  </p>
                  <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-blue-500">
                    👨‍⚕️ Também é realizado por um profissional <strong>fonoaudiólogo</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Pediatric Consultation */}
      <section className="mb-12" aria-labelledby="consultation">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">👨‍⚕️</span>
            <h2 id="consultation" className="section-title mb-0">
              Primeira Consulta Pediátrica
            </h2>
          </div>

          <div className="bg-amber-100 border-l-4 border-amber-600 p-4 rounded mb-6">
            <p className="font-bold text-amber-900 text-lg">
              É altamente recomendada uma consulta com o pediatra nos primeiros 7 dias de vida do bebê.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Esse acompanhamento inicial é crucial para garantir que o bebê esteja se desenvolvendo de maneira
            saudável e que esteja se alimentando adequadamente.
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-amber-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              O pediatra avaliará:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 text-xl mr-3 mt-1">✓</span>
                <span>O <strong>ganho de peso</strong> do bebê</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-xl mr-3 mt-1">✓</span>
                <span>A presença de <strong>icterícia</strong> (pele amarelada)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-xl mr-3 mt-1">✓</span>
                <span>O <strong>reflexo de sucção e alimentação</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-xl mr-3 mt-1">✓</span>
                <span>A avaliação das <strong>condições da pele e do cordão umbilical</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 text-xl mr-3 mt-1">✓</span>
                <span>O <strong>exame físico geral</strong>, incluindo a checagem de possíveis anomalias</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-lg">
            <p className="text-lg font-semibold mb-2">
              💡 Momento ideal para esclarecer dúvidas
            </p>
            <p className="text-white/90">
              Esta é a hora perfeita para os pais tirarem dúvidas sobre amamentação, cuidados com o bebê
              e quando se preocupar com possíveis sinais de alerta.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Checklist */}
      <section className="mb-12" aria-labelledby="checklist">
        <div className="card max-w-5xl mx-auto border-4 border-primary-200">
          <h2 id="checklist" className="section-title text-center text-primary-600 mb-6">
            📋 Checklist dos Primeiros Passos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                <input type="checkbox" className="mt-1 mr-3 w-5 h-5" aria-label="Vacina Hepatite B" />
                <span className="text-gray-800">Vacina Hepatite B</span>
              </div>
              <div className="flex items-start bg-blue-50 p-4 rounded-lg">
                <input type="checkbox" className="mt-1 mr-3 w-5 h-5" aria-label="Vacina BCG" />
                <span className="text-gray-800">Vacina BCG</span>
              </div>
              <div className="flex items-start bg-pink-50 p-4 rounded-lg">
                <input type="checkbox" className="mt-1 mr-3 w-5 h-5" aria-label="Teste do Pezinho (3-5 dias)" />
                <span className="text-gray-800">Teste do Pezinho (3-5 dias)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start bg-purple-50 p-4 rounded-lg">
                <input type="checkbox" className="mt-1 mr-3 w-5 h-5" aria-label="Teste da Orelhinha (até 1 mês)" />
                <span className="text-gray-800">Teste da Orelhinha (até 1 mês)</span>
              </div>
              <div className="flex items-start bg-cyan-50 p-4 rounded-lg">
                <input type="checkbox" className="mt-1 mr-3 w-5 h-5" aria-label="Teste da Linguinha" />
                <span className="text-gray-800">Teste da Linguinha</span>
              </div>
              <div className="flex items-start bg-amber-50 p-4 rounded-lg">
                <input type="checkbox" className="mt-1 mr-3 w-5 h-5" aria-label="Consulta Pediátrica (primeiros 7 dias)" />
                <span className="text-gray-800">Consulta Pediátrica (primeiros 7 dias)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="text-center">
        <div className="card max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Conte com o Projeto Aninhar!
          </h2>
          <p className="text-xl leading-relaxed">
            Estamos aqui para apoiar você em cada passo dessa jornada maravilhosa.
            Com os cuidados adequados nos primeiros dias, você garante o melhor começo de vida para seu bebê.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrimeirosPassos
