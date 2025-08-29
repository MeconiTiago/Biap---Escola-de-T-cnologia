import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Matricula = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    curso: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
    // Resetar o formulário após envio
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      curso: '',
      mensagem: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Matrícula <span className="text-primary-600 dark:text-primary-400">BIAP</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário abaixo para iniciar sua jornada de transformação digital com a BIAP.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dados Pessoais</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="curso" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Curso de Interesse</label>
                  <select
                    id="curso"
                    name="curso"
                    value={formData.curso}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Selecione um curso</option>
                    <option value="desenvolvimento-web">Desenvolvimento Web</option>
                    <option value="data-science">Data Science & Inteligência Artificial</option>
                    <option value="ux-design">UX Design & Strategy</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem (opcional)</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Enviar Matrícula
                </button>
              </form>
            </div>
            
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
          </motion.div>
          
          {/* Informações adicionais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-indigo-50 dark:from-purple-900/30 dark:via-fuchsia-900/30 dark:to-indigo-900/30 p-8 rounded-2xl shadow-lg mb-6">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Por que escolher a BIAP?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Professores Especialistas</h3>
                      <p className="text-gray-600 dark:text-gray-300">Aprenda com profissionais que atuam no mercado e possuem vasta experiência prática.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Metodologia Prática</h3>
                      <p className="text-gray-600 dark:text-gray-300">Cursos com foco em projetos reais e aplicação prática dos conhecimentos.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Networking Qualificado</h3>
                      <p className="text-gray-600 dark:text-gray-300">Conecte-se com profissionais e empresas do setor de tecnologia.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-primary-600 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Processo de Matrícula</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold mt-1">
                    1
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Preencha o formulário</h3>
                    <p className="text-primary-100">Complete todos os campos com suas informações pessoais.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold mt-1">
                    2
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Análise e contato</h3>
                    <p className="text-primary-100">Nossa equipe entrará em contato para confirmar seus dados e fornecer mais informações.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-primary-600 flex items-center justify-center font-bold mt-1">
                    3
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Confirmação e pagamento</h3>
                    <p className="text-primary-100">Após a confirmação, você receberá instruções para finalizar sua matrícula.</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Matricula;