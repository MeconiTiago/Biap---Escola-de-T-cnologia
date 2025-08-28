import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import sobreBanner from '../assets/images/banners/sobre-banner.svg';
import diretorImg from '../assets/images/equipe/diretor.svg';
import professorImg from '../assets/images/equipe/professor.svg';
import coordenadorImg from '../assets/images/equipe/coordenador.svg';
import { AnimatedCard } from './ui';
import { GradientText, AnimatedText } from './ui';

const SobreNos = () => {
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
          <img src={sobreBanner} alt="Sobre Nós" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GradientText className="text-3xl font-bold mb-6" gradient="primary">
                Nossa História
              </GradientText>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Fundada em 2018, a BIAP Tech nasceu da visão de um grupo de profissionais apaixonados por tecnologia e educação, que acreditavam que o ensino técnico no Brasil precisava de uma abordagem mais prática e conectada com as demandas reais do mercado.
                </p>
                <p>
                  Começamos com apenas uma sala de aula e 20 alunos em nosso primeiro curso de desenvolvimento web. Hoje, contamos com um campus moderno, mais de 50 professores especialistas e milhares de alunos formados que estão transformando o mercado de tecnologia no Brasil e no exterior.
                </p>
                <p>
                  Nossa trajetória é marcada por inovação constante, parcerias estratégicas com empresas de tecnologia e um compromisso inabalável com a qualidade do ensino e o sucesso de nossos alunos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Equipe BIAP Tech"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full opacity-50 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <GradientText className="text-3xl font-bold mb-4" gradient="primary">
              Missão, Visão e Valores
            </GradientText>
            <AnimatedText variant="fade" className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Os pilares que sustentam nossa instituição e guiam todas as nossas decisões.
            </AnimatedText>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <AnimatedCard className="p-8 text-center" hoverColor="primary">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Nossa Missão</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Transformar vidas através da educação em tecnologia, formando profissionais capacitados e preparados para os desafios do mercado global, contribuindo para o desenvolvimento tecnológico do Brasil.
              </p>
            </AnimatedCard>

            {/* Visão */}
            <AnimatedCard className="p-8 text-center" hoverColor="blue">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Nossa Visão</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Ser reconhecida como a instituição de ensino em tecnologia mais inovadora e eficiente do Brasil, referência em metodologia prática e resultados concretos na formação de talentos para o mercado digital.
              </p>
            </AnimatedCard>

            {/* Valores */}
            <AnimatedCard className="p-8 text-center" hoverColor="green">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Nossos Valores</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Inovação constante</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Excelência técnica</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Foco no aluno</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Ética e transparência</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Responsabilidade social</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conheça os profissionais que fazem da BIAP Tech uma instituição de excelência.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membro 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={diretorImg}
                alt="Carlos Mendes"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Carlos Mendes</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">CEO & Fundador</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Com mais de 20 anos de experiência em tecnologia e educação, Carlos lidera a BIAP Tech com visão inovadora e compromisso com a excelência.
                </p>
              </div>
            </motion.div>

            {/* Membro 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={coordenadorImg}
                alt="Ana Silva"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Ana Silva</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">Diretora Acadêmica</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Doutora em Ciência da Computação, Ana é responsável por desenvolver e aprimorar constantemente nossa metodologia de ensino.
                </p>
              </div>
            </motion.div>

            {/* Membro 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={professorImg}
                alt="Roberto Alves"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Roberto Alves</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">Diretor de Tecnologia</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Com passagens por grandes empresas de tecnologia, Roberto garante que nossos cursos estejam sempre alinhados às demandas do mercado.
                </p>
              </div>
            </motion.div>

            {/* Membro 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={coordenadorImg}
                alt="Juliana Costa"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Juliana Costa</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">Coordenadora de Parcerias</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Juliana desenvolve parcerias estratégicas com empresas de tecnologia, garantindo oportunidades de estágio e emprego para nossos alunos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossos Parceiros</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empresas que confiam na qualidade da nossa formação e contratam nossos talentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Logos de parceiros */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Logo 1</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Logo 2</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Logo 3</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Logo 4</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Logo 5</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <div className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Logo 6</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
