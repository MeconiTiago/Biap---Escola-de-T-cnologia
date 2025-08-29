import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import techCode from './assets/images/tech-code.svg';
import techDevices from './assets/images/tech-devices.svg';
import techNetwork from './assets/images/tech-network.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatedCard, SpotlightCard, AnimatedGradientBorder } from './components/ui';
import { GradientButton, AnimatedButton, PulseButton } from './components/ui';
import { GradientText, AnimatedCharacters, AnimatedText } from './components/ui';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Transforme seu <GradientText gradient="primary">futuro</GradientText> com tecnologia
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A BIAP é uma escola de tecnologia focada em preparar você para os desafios do mercado digital com cursos inovadores e metodologia prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton>
                Conheça nossos cursos
              </GradientButton>
              <AnimatedButton variant="outline" color="primary">
                Agende uma visita
              </AnimatedButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full">
              <img src={techCode} alt="Código de programação" className="absolute w-40 top-0 left-0 animate-float" />
              <img src={techDevices} alt="Dispositivos tecnológicos" className="absolute w-40 top-20 right-0 animate-float animation-delay-500" />
              <img src={techNetwork} alt="Rede de tecnologia" className="absolute w-40 bottom-0 left-1/4 animate-float animation-delay-1000" />
              <AnimatedGradientBorder className="relative z-10">
                <div className="w-full bg-gray-200 dark:bg-gray-700">
                  <img 
                    src="https://s2-casavogue.glbimg.com/jom4j4xjjxhAxB5sI7C0e81iXMI=/0x0:1920x1080/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2024/m/v/5qysUDSXAcsQdLUfxR9w/00-as-universidades-mais-bonitas-do-mundo-em-2024-segundo-o-prix-versailles.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedGradientBorder>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-400 dark:bg-primary-700 rounded-full opacity-40 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features/Cursos Section */}
      <section id="cursos" className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <AnimatedCharacters text="Nossos Cursos" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Desenvolvemos cursos que combinam teoria e prática para preparar você para os desafios reais do mercado de tecnologia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <div className="relative">
              <img src={techCode} alt="Código de programação" className="absolute w-16 -top-8 -right-4 animate-float z-10" />
              <AnimatedCard className="h-full">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Desenvolvimento Web</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Aprenda a criar sites e aplicações web modernas com HTML, CSS, JavaScript e frameworks como React.</p>
                <AnimatedButton variant="ghost" color="primary" className="p-0">
                  Saiba mais →
                </AnimatedButton>
              </AnimatedCard>
            </div>

            {/* Curso 2 */}
            <div className="relative">
              <img src={techDevices} alt="Dispositivos tecnológicos" className="absolute w-16 -top-8 -right-4 animate-float animation-delay-500 z-10" />
              <AnimatedCard className="h-full" hoverColor="blue">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Desenvolvimento Mobile</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Crie aplicativos móveis para iOS e Android utilizando React Native e outras tecnologias modernas.</p>
                <AnimatedButton variant="ghost" color="primary" className="p-0">
                  Saiba mais →
                </AnimatedButton>
              </AnimatedCard>
            </div>

            {/* Curso 3 */}
            <div className="relative">
              <img src={techNetwork} alt="Rede de tecnologia" className="absolute w-16 -top-8 -right-4 animate-float animation-delay-1000 z-10" />
              <AnimatedCard className="h-full" hoverColor="purple">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Inteligência Artificial</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Explore o mundo da IA e aprenda a desenvolver soluções inteligentes com machine learning e deep learning.</p>
                <AnimatedButton variant="ghost" color="primary" className="p-0">
                  Saiba mais →
                </AnimatedButton>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre a <GradientText gradient="rainbow">BIAP</GradientText>
            </h2>
            <AnimatedText variant="slide" className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Somos uma escola de tecnologia comprometida com a formação de profissionais preparados para os desafios do mercado digital. Nossa metodologia combina teoria e prática, com foco em projetos reais e mentoria personalizada.
            </AnimatedText>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Professores com experiência no mercado</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Currículo atualizado com as tecnologias mais recentes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Projetos práticos e portfolio profissional</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Suporte para colocação no mercado de trabalho</span>
              </li>
            </ul>
            <PulseButton className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-rose-500 to-blue-600 hover:from-rose-600 hover:to-blue-700 transition duration-300 shadow-md">
              Conheça nossa história
            </PulseButton>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-full">
                <img 
                  src="https://addee.com.br/wp-content/uploads/2020/04/original-e227a457f0113314cd02d3fcdef04f87.jpeg"
                  alt="About BIAP"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-400 dark:bg-primary-700 rounded-full opacity-40 blur-xl"></div>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para iniciar sua jornada na tecnologia?</h2>
            <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
              Inscreva-se agora e dê o primeiro passo para transformar seu futuro com a BIAP.
            </p>
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
              Matricule-se Agora
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
