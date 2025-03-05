import React from 'react';
import { DumbbellIcon, ShoppingCart, Star, Trophy, Users, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            className="w-full h-[600px] object-cover"
            alt="Equipamentos esportivos"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2 text-white">
            <DumbbellIcon className="w-8 h-8" />
            <span className="text-xl font-bold">SportFit Elite</span>
          </div>
          <a
            href="https://wa.me/5517981960741"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-600 text-black"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>
        </nav>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Aluguel de Equipamentos de Alta Performance para Treinar em Casa
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Alugue equipamentos profissionais por dia e treine quando e onde quiser
          </p>
          <a 
            href="https://wa.me/5517981960741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Alugar Agora
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
            <p className="text-gray-600">Equipamentos selecionados das melhores marcas mundiais</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
            <p className="text-gray-600">Entrega e retirada no mesmo dia</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Suporte Especializado</h3>
            <p className="text-gray-600">Atendimento personalizado por especialistas</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="produtos" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Aluguel de Equipamentos</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Preços por dia de uso</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Kit */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-semibold mb-4">Kit Iniciante</h3>
              <div className="text-4xl font-bold mb-2">R$ 30</div>
              <p className="text-gray-500 mb-6">por dia</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  2 Halteres de 2kg
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  1 Corda de Pular
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  1 Faixa Elástica Leve
                </li>
              </ul>
              <a
                href="https://wa.me/5517981960741"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 text-center"
              >
                Alugar Agora
              </a>
            </div>

            {/* Intermediate Kit */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-yellow-500 transform scale-105">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                Mais Vendido
              </div>
              <h3 className="text-2xl font-semibold mb-4">Kit Intermediário</h3>
              <div className="text-4xl font-bold mb-2">R$ 50</div>
              <p className="text-gray-500 mb-6">por dia</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  2 Halteres de 5kg
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  1 Kettlebell de 8kg
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  2 Faixas Elásticas (Média/Forte)
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  1 Tapete de Exercícios
                </li>
              </ul>
              <a
                href="https://wa.me/5517981960741"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-500 text-black py-3 rounded-full hover:bg-yellow-600 text-center"
              >
                Alugar Agora
              </a>
            </div>

            {/* Pro Kit */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-semibold mb-4">Kit Profissional</h3>
              <div className="text-4xl font-bold mb-2">R$ 90</div>
              <p className="text-gray-500 mb-6">por dia</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  2 Halteres Ajustáveis até 10kg
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  1 Kettlebell de 12kg
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Kit Completo de Elásticos
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  1 Barra de Porta + Acessórios
                </li>
              </ul>
              <a
                href="https://wa.me/5517981960741"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 text-center"
              >
                Alugar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Equipamentos Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80"
              alt="Halteres"
              className="rounded-lg shadow-md hover:shadow-xl transition h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&q=80"
              alt="Equipamentos"
              className="rounded-lg shadow-md hover:shadow-xl transition h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&q=80"
              alt="Kettlebells"
              className="rounded-lg shadow-md hover:shadow-xl transition h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;