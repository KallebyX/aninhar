const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Projeto Aninhar</h3>
            <p className="text-gray-300 leading-relaxed">
              Apoio e orientação confiável para cuidados com recém-nascidos, baseados em evidências científicas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/prevencao-acidentes" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Prevenção de Acidentes
                </a>
              </li>
              <li>
                <a href="/primeira-semana" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Primeira Semana
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Contato</h3>
            <p className="text-gray-300 leading-relaxed">
              Universidade Franciscana (UFN)<br />
              Programa de Pós-Graduação em Saúde Materno Infantil<br />
              Santa Maria/RS
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Projeto Aninhar. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Trabalho de Mestrado - Universidade Franciscana (UFN)
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
