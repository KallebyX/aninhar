const PreventingAccidents = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12" aria-labelledby="page-title">
        <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Como Prevenir Acidentes com o Bebê?
        </h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            A chegada do seu bebê transforma a casa em um verdadeiro ninho, cheio de amor e aconchego.
            No entanto, é fundamental lembrar que, mesmo nos primeiros meses de vida, a prevenção de
            acidentes é um ato contínuo de carinho e proteção.
          </p>
          <p>
            Um recém-nascido, por mais indefeso que pareça, está em constante desenvolvimento e exploração
            do mundo. <strong>Acidentes domésticos são a principal causa de morte de crianças de zero a
            quatorze anos no Brasil</strong>, e muitos deles podem ser facilmente evitados com medidas
            simples e atenção redobrada.
          </p>
          <p className="font-semibold text-primary-600">
            Cuidar é, também, antecipar e prevenir. Com as dicas a seguir, você terá a tranquilidade de
            saber que está garantindo a segurança necessária para que seu filho possa crescer e se
            desenvolver com saúde e paz.
          </p>
        </div>
      </section>

      {/* Safe Sleep */}
      <section className="mb-12" aria-labelledby="safe-sleep">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">😴</span>
            <h2 id="safe-sleep" className="section-title mb-0">
              Dicas para um Sono Seguro
            </h2>
          </div>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
              <span>O bebê deve dormir no mesmo quarto dos pais, mas <strong>evitar cama compartilhada</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
              <span><strong>Posição supina para dormir</strong> (barriga para cima)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
              <span>Cuidar para que o rosto do bebê não seja encoberto por lençóis e cobertores</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Tudo o que for macio ou solto é um risco e deve ser removido.</span>
                <div className="mt-2 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="font-semibold text-red-800 mb-2">NÃO USE:</p>
                  <ul className="list-disc list-inside space-y-1 text-red-700">
                    <li>Bichos de pelúcia</li>
                    <li>Almofadas</li>
                    <li>Travesseiros</li>
                    <li>Protetores de berço</li>
                    <li>Cobertores soltos ou edredons</li>
                  </ul>
                  <p className="mt-2 text-green-700 font-semibold">✓ Use lençóis de elástico presos ao colchão</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Preventing Falls */}
      <section className="mb-12" aria-labelledby="preventing-falls">
        <div className="card max-w-5xl mx-auto bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">⚠️</span>
            <h2 id="preventing-falls" className="section-title mb-0">
              Prevenindo Quedas
            </h2>
          </div>
          <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded mb-6">
            <p className="font-bold text-yellow-900 text-xl">
              A regra aqui é nunca deixar o bebê sozinho, nem por um segundo, em locais sem proteção lateral.
            </p>
          </div>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
              <span><strong>No trocador:</strong> mantenha sempre uma mão firme no bebê. Se precisar se afastar,
              mesmo que por um instante, leve o bebê consigo ou coloque-o no berço.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
              <span>Se a campainha tocar, o telefone tocar ou se você sentir tontura, o lugar mais seguro
              para colocar o bebê é <strong>no berço, no chão ou em um cercadinho seguro</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
              <span>Não use almofadas, travesseiros ou outros objetos macios como barreiras nas laterais da cama.
              Além de não serem eficazes para conter uma queda, eles representam um grande risco de sufocamento
              se o bebê se virar contra eles.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
              <span>Cadeirinhas e bebê confortos <strong>nunca devem ser colocados sobre mesas, camas, cadeiras
              ou outras superfícies elevadas</strong>. O balanço ou o movimento do bebê pode fazer o acessório
              escorregar ou tombar. Sempre utilize o cinto destes acessórios.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
              <span>Se a casa tiver escadas, use <strong>portões de segurança firmemente instalados</strong>,
              mesmo que o bebê ainda não se arraste.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Home Safety */}
      <section className="mb-12" aria-labelledby="home-safety">
        <div className="card max-w-5xl mx-auto">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">🏠</span>
            <h2 id="home-safety" className="section-title mb-0">
              Segurança em Casa e com Itens do Bebê
            </h2>
          </div>

          <div className="space-y-6">
            {/* Choking Hazards */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🧸</span>
                Riscos de Asfixia e Brinquedos
              </h3>
              <ul className="space-y-3 text-lg text-gray-700 ml-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Evitar o contato da criança com peças e/ou objetos pequenos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Certifique-se de que todos os brinquedos são apropriados para a idade e não possuem
                  peças pequenas que possam ser engolidas, causando risco de asfixia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Verifique se os itens não estão quebrados e se são feitos de materiais seguros e não tóxicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Nunca deixar próximo da criança <strong>sacos plásticos, cordões e fios</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span><strong className="text-red-600">Nunca usar talco e/ou outros produtos em pó na criança</strong></span>
                </li>
              </ul>
            </div>

            {/* Poisoning */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🧴</span>
                Prevenção de Intoxicações
              </h3>
              <ul className="space-y-3 text-lg text-gray-700 ml-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Remédios, produtos de limpeza, cosméticos e vitaminas (até mesmo as suas) devem ser
                  armazenados em <strong>armários altos e trancados</strong>. Nunca os deixe na beira da pia
                  ou em gavetas baixas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>O lixo deve ter tampa e ser mantido fora do alcance</span>
                </li>
              </ul>
            </div>

            {/* Electrical */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                Segurança Elétrica
              </h3>
              <ul className="space-y-3 text-lg text-gray-700 ml-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Use <strong>protetores nas tomadas</strong> que não estão em uso</span>
                </li>
              </ul>
            </div>

            {/* Burns */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🔥</span>
                Prevenção de Queimaduras
              </h3>
              <ul className="space-y-3 text-lg text-gray-700 ml-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span><strong className="text-red-600">Nunca segure o bebê no colo enquanto bebe líquidos quentes</strong>
                  (café, chá, chimarrão, sopa). A queimadura por líquido quente é a mais comum e mais grave em crianças pequenas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Nunca deixe cabos de panelas voltados para fora do fogão. Mesmo um recém-nascido pode
                  alcançar e puxar se for segurado no colo perto do fogão</span>
                </li>
              </ul>
            </div>

            {/* Furniture */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🚪</span>
                Móveis e Armários
              </h3>
              <ul className="space-y-3 text-lg text-gray-700 ml-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Use <strong>travas de segurança</strong> em armários e gavetas que contenham itens
                  perigosos ou que possam prender os dedos do bebê</span>
                </li>
              </ul>
            </div>

            {/* Water Safety */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">💧</span>
                Segurança com Água
              </h3>
              <ul className="space-y-3 text-lg text-gray-700 ml-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span><strong>Nunca deixe baldes ou bacias com água</strong> parados no chão, mesmo que seja
                  apenas água de limpeza</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                  <span>Mantenha sempre a <strong>tampa do vaso sanitário fechada</strong> e, se possível, use
                  uma trava de segurança</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="text-center">
        <div className="card max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Lembre-se: Prevenção é Amor
          </h2>
          <p className="text-xl leading-relaxed">
            Com atenção e cuidados simples, você cria um ambiente seguro onde seu bebê
            pode crescer feliz e saudável. O PROJETO ANINHAR está aqui para apoiá-lo nessa jornada!
          </p>
        </div>
      </section>
    </div>
  )
}

export default PreventingAccidents
