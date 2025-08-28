import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import depoimentosBanner from '../assets/images/banners/depoimentos-banner.svg';
import perfil1 from '../assets/images/depoimentos/perfil1.svg';
import perfil2 from '../assets/images/depoimentos/perfil2.svg';
import perfil3 from '../assets/images/depoimentos/perfil3.svg';

const Depoimentos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Banner da página */}
      <section className="py-10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <img src={depoimentosBanner} alt="Depoimentos" className="w-full h-auto" />
        </motion.div>
      </section>
      
      {/* Depoimentos em Destaque */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Histórias de Sucesso</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Veja como nossos cursos impactaram positivamente a vida profissional de nossos alunos.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Depoimento 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl relative"
            >
              <div className="absolute -top-6 -left-6">
                <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={perfil1} 
                  alt="Pedro Oliveira" 
                  className="w-16 h-16 rounded-full object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pedro Oliveira</h3>
                  <p className="text-primary-600 dark:text-primary-400">Desenvolvedor Web</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Antes da BIAP Tech, eu trabalhava como assistente administrativo e não via perspectivas de crescimento. Após concluir o curso de Desenvolvimento Web, consegui meu primeiro emprego como desenvolvedor front-end em apenas 2 meses. Hoje, 3 anos depois, sou desenvolvedor sênior em uma startup de tecnologia e meu salário triplicou."
              </p>
              
              <div className="flex items-center">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 dark:text-gray-400">Curso: Desenvolvimento Web</span>
              </div>
            </motion.div>
            
            {/* Depoimento 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl relative"
            >
              <div className="absolute -top-6 -left-6">
                <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={perfil2} 
                  alt="Mariana Santos" 
                  className="w-16 h-16 rounded-full object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mariana Santos</h3>
                  <p className="text-primary-600 dark:text-primary-400">Desenvolvedora Mobile</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "Eu já trabalhava como desenvolvedora web, mas queria migrar para o desenvolvimento mobile. O curso da BIAP Tech me deu exatamente o que eu precisava: conhecimento prático e projetos reais para construir meu portfólio. A metodologia hands-on fez toda a diferença, e hoje trabalho remotamente para uma empresa dos EUA desenvolvendo aplicativos."
              </p>
              
              <div className="flex items-center">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 dark:text-gray-400">Curso: Desenvolvimento Mobile</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mais Depoimentos */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={perfil3} 
                  alt="Rafael Gomes" 
                  className="w-12 h-12 rounded-full object-contain mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Rafael Gomes</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">Engenheiro de IA</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">
                "O curso de IA da BIAP Tech é simplesmente excepcional. Os professores são profissionais que atuam no mercado e trazem problemas reais para a sala de aula. Consegui implementar um projeto de IA na empresa onde trabalho que resultou em uma economia significativa de recursos."
              </p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
            
            {/* Depoimento 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={perfil2} 
                  alt="Camila Ferreira" 
                  className="w-12 h-12 rounded-full object-contain mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Camila Ferreira</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">UX/UI Designer</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">
                "Fiz o módulo de UX/UI do curso de Desenvolvimento Web e foi transformador. A abordagem prática me permitiu construir um portfólio sólido durante o curso, o que foi fundamental para conseguir meu primeiro trabalho na área."
              </p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
            
            {/* Depoimento 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Lucas Martins" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Lucas Martins</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">DevOps Engineer</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">
                "A especialização em DevOps da BIAP Tech me deu as ferramentas necessárias para implementar práticas modernas de CI/CD na minha empresa. O conhecimento prático e as certificações que obtive foram fundamentais para minha promoção."
              </p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Vídeo Depoimentos */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Depoimentos em Vídeo</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Assista aos relatos de nossos ex-alunos sobre suas experiências na BIAP Tech.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vídeo 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <span className="text-gray-500 dark:text-gray-400">Vídeo Depoimento 1</span>
            </motion.div>
            
            {/* Vídeo 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <span className="text-gray-500 dark:text-gray-400">Vídeo Depoimento 2</span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar sua carreira?</h2>
            <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
              Junte-se aos milhares de alunos que já transformaram suas vidas com a BIAP Tech.
            </p>
            <a href="/matricula" className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
              Matricule-se Agora
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Depoimentos;