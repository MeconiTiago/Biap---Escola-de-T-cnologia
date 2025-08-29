import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// (mantive os assets de curso)
import webDevImg from '../assets/images/cursos/web-dev.svg';
import mobileDevImg from '../assets/images/cursos/mobile-dev.svg';
import iaImg from '../assets/images/cursos/ia.svg';
import { GradientButton, AnimatedButton } from './ui';
import { GradientText, AnimatedText } from './ui';

const Cursos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      {/* Banner – MESMO ESTILO DO CONTATO (fundo escuro + diagonais + título com gradiente) */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-[220px] sm:h-[280px] md:h-[360px] rounded-2xl"
        >
          {/* imagem base (abstrata) */}
          <img
            src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop"
            alt="Fundo abstrato tecnologia"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* darkening */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.65),rgba(0,0,0,0.65))]" />

          {/* diagonais escuras (vibe do banner do Contato) */}
          <div className="absolute inset-0 opacity-90 mix-blend-multiply bg-[linear-gradient(135deg,rgba(6,8,17,0.9)_0%,rgba(6,8,17,0.9)_38%,rgba(4,6,20,0.85)_38%,rgba(4,6,20,0.85)_62%,rgba(13,16,36,0.92)_62%,rgba(13,16,36,0.92)_100%)]" />

          {/* brilhos coloridos sutis */}
          <div className="absolute inset-0 mix-blend-screen pointer-events-none bg-[radial-gradient(60%_40%_at_20%_10%,rgba(59,130,246,0.45),transparent),radial-gradient(50%_50%_at_85%_25%,rgba(147,51,234,0.35),transparent),radial-gradient(60%_50%_at_60%_70%,rgba(239,68,68,0.25),transparent)]" />

          {/* vinheta leve nas bordas */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,transparent,rgba(0,0,0,0.35))]" />

          {/* texto central */}
          <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                Nossos Cursos
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90 drop-shadow">
                Conheça nossa oferta completa de cursos em tecnologia
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Seção de Cursos Detalhados */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-16">
            {/* Curso 1 - Desenvolvimento Web */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative">
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={webDevImg}
                    alt="Desenvolvimento Web"
                    className="w-full h-80 object-contain p-4"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
              </div>

              <div>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <GradientText className="text-3xl font-bold mb-4" gradient="primary">
                  Desenvolvimento Web
                </GradientText>
                <AnimatedText variant="slide" className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Aprenda a criar sites e aplicações web modernas com HTML, CSS, JavaScript e frameworks como React. Este curso abrange desde os fundamentos até técnicas avançadas de desenvolvimento front-end e back-end.
                </AnimatedText>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">O que você vai aprender:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">HTML5, CSS3 e JavaScript moderno (ES6+)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">React, Redux e Next.js</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Node.js, Express e MongoDB</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Desenvolvimento de APIs RESTful</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Testes automatizados e CI/CD</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/matricula">
                    <GradientButton>Matricule-se</GradientButton>
                  </Link>
                  <AnimatedButton variant="outline" color="primary">Baixar ementa</AnimatedButton>
                </div>
              </div>
            </motion.div>

            {/* Curso 2 - Desenvolvimento Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <GradientText className="text-3xl font-bold mb-4" gradient="blue">
                  Desenvolvimento Mobile
                </GradientText>
                <AnimatedText variant="slide" className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Crie aplicativos móveis para iOS e Android utilizando React Native e outras tecnologias modernas. Aprenda a desenvolver interfaces nativas, integrar APIs e publicar seus apps nas lojas.
                </AnimatedText>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">O que você vai aprender:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Fundamentos de React Native</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Navegação e gerenciamento de estado</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Integração com APIs e serviços externos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Acesso a recursos nativos (câmera, GPS, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Publicação nas lojas App Store e Google Play</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/matricula">
                    <GradientButton>Matricule-se</GradientButton>
                  </Link>
                  <AnimatedButton variant="outline" color="blue">Baixar ementa</AnimatedButton>
                </div>
              </div>

              <div className="relative order-1 md:order-2">
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={mobileDevImg}
                    alt="Desenvolvimento Mobile"
                    className="w-full h-80 object-contain p-4"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
              </div>
            </motion.div>

            {/* Curso 3 - Inteligência Artificial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative">
                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={iaImg}
                    alt="Inteligência Artificial"
                    className="w-full h-80 object-contain p-4"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
              </div>

              <div>
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <GradientText className="text-3xl font-bold mb-4" gradient="purple">
                  Inteligência Artificial
                </GradientText>
                <AnimatedText variant="slide" className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Explore o mundo da IA e aprenda a desenvolver soluções inteligentes com machine learning e deep learning. Compreenda os fundamentos teóricos e aplique-os em projetos práticos.
                </AnimatedText>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">O que você vai aprender:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Fundamentos de Machine Learning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Deep Learning e Redes Neurais</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Processamento de Linguagem Natural (NLP)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Visão Computacional</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Implementação de modelos em produção</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/matricula">
                    <GradientButton>Matricule-se</GradientButton>
                  </Link>
                  <AnimatedButton variant="outline" color="purple">Baixar ementa</AnimatedButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-600 dark:from-purple-800 dark:via-fuchsia-900 dark:to-indigo-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GradientText className="text-3xl font-bold text-white mb-4" gradient="white">
              Pronto para iniciar sua jornada na tecnologia?
            </GradientText>
            <AnimatedText variant="fade" className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
              Inscreva-se agora e dê o primeiro passo para transformar seu futuro com a BIAP.
            </AnimatedText>
            <Link to="/matricula">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                Matricule-se Agora
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;
