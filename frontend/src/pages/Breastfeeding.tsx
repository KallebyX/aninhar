const Breastfeeding = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12" aria-labelledby="page-title">
        <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Alimentação do Bebê:<br />
          <span className="text-primary-600">Amamentação</span>
        </h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            A amamentação é um dos momentos mais especiais entre mãe e bebê. Além de nutrir,
            ela fortalece o vínculo afetivo e traz inúmeros benefícios para a saúde de ambos.
          </p>
          <p className="font-semibold text-primary-600">
            Aqui você encontrará informações baseadas em evidências científicas para ajudá-la
            nessa jornada tão importante.
          </p>
        </div>
      </section>

      {/* Why Breastfeeding is Important */}
      <section className="mb-12" aria-labelledby="importance">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🤱</span>
            <h2 id="importance" className="section-title mb-0">
              1.1) Por que Amamentar é Tão Importante?
            </h2>
          </div>

          <div className="bg-pink-100 border-l-4 border-pink-600 p-4 rounded mb-6">
            <p className="font-bold text-pink-900">
              O leite materno é o alimento mais completo para o bebê nos primeiros meses de vida!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🛡️</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Proteção Imunológica</h3>
                  <p className="text-gray-700 text-sm">
                    O bebê recebe anticorpos da mãe, recebendo proteção de diarreias e infecções,
                    principalmente respiratórias, e também diminui o risco de doenças crônicas futuras,
                    como obesidade e diabetes tipo 2.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💪</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Menos Doenças</h3>
                  <p className="text-gray-700 text-sm">
                    A criança amamentada adoece menos, reduzindo o uso de medicamentos e internação hospitalar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🧒</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Desenvolvimento Completo</h3>
                  <p className="text-gray-700 text-sm">
                    Colabora para o desenvolvimento do bebê: físico e emocional. É também um excelente
                    exercício para o desenvolvimento da face da criança.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🗣️</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fala e Respiração</h3>
                  <p className="text-gray-700 text-sm">
                    Importante para o desenvolvimento da fala e ter uma boa respiração.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3">💕</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Vínculo Mãe-Bebê</h3>
                  <p className="text-gray-700 text-sm">
                    Fortalece o vínculo mãe-bebê, criando uma conexão única e especial.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
              <div className="flex items-start">
                <span className="text-2xl mr-3">👩</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Benefícios para a Mãe</h3>
                  <p className="text-gray-700 text-sm">
                    Reduz as chances de câncer de mama, ovário e útero na mãe.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-pink-200 md:col-span-2">
              <div className="flex items-start">
                <span className="text-2xl mr-3">✨</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Natural e Acessível</h3>
                  <p className="text-gray-700 text-sm">
                    É natural, acessível, produzido sem necessidade de preparo - sempre pronto e na temperatura ideal!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breastfeeding Positions */}
      <section className="mb-12" aria-labelledby="positions">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">👶</span>
            <h2 id="positions" className="section-title mb-0">
              1.2) Posições para Amamentar
            </h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Existem várias posições para amamentar. O mais importante é que você e o bebê estejam
            confortáveis. Experimente diferentes posições até encontrar a que funciona melhor para vocês.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                Posição Tradicional
              </h3>
              <p className="text-gray-700">
                De frente, <strong>barriga com barriga</strong>, com o bebê voltado para você.
                É a posição mais comum e confortável para muitas mães.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                Posição Cavaleiro
              </h3>
              <p className="text-gray-700">
                Bebê <strong>sentado com as pernas abertas sobre sua coxa</strong>.
                Boa para bebês com refluxo ou que engasgam facilmente.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                Posição Invertida
              </h3>
              <p className="text-gray-700">
                A <strong>cabeça do bebê deve ser apoiada com as mãos</strong> e as perninhas
                colocadas por baixo da sua axila. Útil para mães que fizeram cesárea.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-2 border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                Posição Deitada
              </h3>
              <p className="text-gray-700">
                Mãe e bebê deitados de lado, frente a frente. Ideal para <strong>mamadas noturnas</strong>
                ou quando a mãe precisa descansar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Know if Baby is Feeding Well */}
      <section className="mb-12" aria-labelledby="feeding-well">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">✅</span>
            <h2 id="feeding-well" className="section-title mb-0">
              1.3) Como Saber se o Bebê Está Mamando Bem?
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Mamar em livre demanda</strong> (8 ou mais vezes por dia)
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Ganhar peso de forma adequada</strong>
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <p className="text-gray-700">
                  <strong>Urinar várias vezes ao dia</strong> com urina clara e fazer cocô pastoso
                  e amarelado após as mamadas
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <span className="text-green-600 text-xl mr-3">✓</span>
                <p className="text-gray-700">
                  O bebê <strong>demonstra estar satisfeito</strong> após mamar e dorme tranquilo
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-start">
                <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                <p className="text-gray-700">
                  <strong>Choro frequente não significa</strong>, por si só, que o leite é insuficiente.
                  Bebês choram por diversos motivos!
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3">👨‍⚕️</span>
                <p className="text-gray-700">
                  <strong>Consultas regulares com o pediatra</strong> ajudam a acompanhar esse processo
                  e tirar dúvidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breastfeeding Accessories */}
      <section className="mb-12" aria-labelledby="accessories">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🛍️</span>
            <h2 id="accessories" className="section-title mb-0">
              1.4) Acessórios que Podem Auxiliar na Amamentação
            </h2>
          </div>

          <div className="space-y-6">
            {/* Almofada */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">🛋️</span>
                Almofada de Amamentação
              </h3>
              <p className="text-gray-700">
                Ajuda a manter a postura e colocar a criança na altura ideal, <strong>aumentando
                o conforto</strong> e auxiliando a posição adequada durante a amamentação.
              </p>
            </div>

            {/* Sutiã */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-2 border-pink-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">👙</span>
                Sutiã de Amamentação
              </h3>
              <p className="text-gray-700">
                Escolha um sutiã confortável, <strong>sem compressão abaixo da borda</strong>.
                Sutiãs que tenham abertura pela frente facilitam a amamentação e se sente mais confortável.
              </p>
            </div>

            {/* Bombas */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">🍼</span>
                Bombas Extratoras
              </h3>
              <p className="text-gray-700">
                É um bom acessório para quando o leite precisa ser armazenado (na volta ao trabalho,
                por exemplo). Pode ser <strong>manual ou elétrica</strong>: a melhor opção é a que
                você se adapta e se sente mais confortável.
              </p>
            </div>

            {/* Tipoias */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">👶</span>
                Tipoias de Amamentação
              </h3>
              <p className="text-gray-700">
                Ajuda a sustentação de seios volumosos ou pesados. Permite que a mãe <strong>mantenha
                as mãos livres</strong>, facilitando a pega.
              </p>
            </div>

            {/* Rosquinhas */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-3">⭕</span>
                Rosquinhas de Amamentação
              </h3>
              <p className="text-gray-700 mb-3">
                São as rosquinhas feitas de tecido que a mãe usa dentro do sutiã/top. Elas auxiliam
                na <strong>prevenção de fissuras</strong>, pois garantem que o mamilo e a aréola fiquem
                suspensos e não em contato direto com o sutiã/top, ajudando a manter a região seca.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Protege mamilos que já estão machucados</strong> pois evitam atrito constante,
                o que também ajuda na recuperação desses machucados.
              </p>
              <div className="bg-yellow-100 border-l-4 border-yellow-600 p-3 rounded">
                <p className="text-yellow-900 font-semibold text-sm">
                  ⚠️ IMPORTANTE: As rosquinhas podem ficar úmidas com o leite, por isso, devem ser
                  lavadas e trocadas com frequência.
                </p>
              </div>
            </div>

            {/* Conchas e Absorventes - NÃO RECOMENDADO */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-2 border-red-300">
              <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                <span className="text-2xl mr-3">🚫</span>
                Conchas e Absorventes - NÃO RECOMENDAMOS
              </h3>
              <p className="text-gray-700 mb-3">
                Embora pareçam práticos, costumam <strong>deixar os mamilos úmidos</strong>, aumentando
                a chance de lesões e contaminação por bactérias e fungos.
              </p>
              <div className="bg-red-100 border-l-4 border-red-600 p-3 rounded">
                <p className="text-red-900 font-bold">
                  ❌ NÃO aconselhamos seu uso: prefira as rosquinhas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="text-center">
        <div className="card max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Cada Amamentação é Única!
          </h2>
          <p className="text-xl leading-relaxed mb-4">
            Lembre-se: cada mãe e bebê têm sua própria jornada. Se tiver dificuldades,
            busque ajuda de profissionais de saúde. O PROJETO ANINHAR está aqui para apoiá-la!
          </p>
          <p className="text-lg opacity-90">
            💡 Todas as imagens deste conteúdo foram criadas por IA para fins ilustrativos.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Breastfeeding
