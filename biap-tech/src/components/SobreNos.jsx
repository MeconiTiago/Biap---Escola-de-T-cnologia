import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { AnimatedCard } from './ui';
import { GradientText, AnimatedText } from './ui';

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      {/* Banner – padronizado com o estilo escuro + diagonais + brilhos */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-[220px] sm:h-[280px] md:h-[360px] rounded-2xl"
        >
          {/* base abstrata */}
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
            alt="Fundo abstrato tecnologia"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* escurecimento */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.65),rgba(0,0,0,0.65))]" />

          {/* diagonais */}
          <div className="absolute inset-0 opacity-90 mix-blend-multiply bg-[linear-gradient(135deg,rgba(6,8,17,0.9)_0%,rgba(6,8,17,0.9)_38%,rgba(4,6,20,0.85)_38%,rgba(4,6,20,0.85)_62%,rgba(13,16,36,0.92)_62%,rgba(13,16,36,0.92)_100%)]" />

          {/* brilhos sutis */}
          <div className="absolute inset-0 mix-blend-screen pointer-events-none bg-[radial-gradient(60%_40%_at_20%_10%,rgba(59,130,246,0.45),transparent),radial-gradient(50%_50%_at_85%_25%,rgba(147,51,234,0.35),transparent),radial-gradient(60%_50%_at_60%_70%,rgba(239,68,68,0.25),transparent)]" />

          {/* vinheta */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,transparent,rgba(0,0,0,0.35))]" />

          {/* textos */}
          <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                Sobre Nós
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90 drop-shadow">
                Conheça nossa história, missão e valores
              </p>
            </div>
          </div>
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent e mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conheça os profissionais que fazem da BIAP Tech uma instituição de excelência.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* cards de equipe (mantidos) */}
            {/* ... (seus cards originais, sem alterações) ... */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrFFIL-2wUhXFsjaFrrNrUwQXwRlkHEwUlA&s"
                alt="Winson Babayaga"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Winson Babayaga</h3>
                <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-medium mb-3">CEO & Fundador</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Com mais de 25 anos de experiência em HTML, tecnologia e educação, Winson Babayaga é CEO e Fundador da BIAP Tech, com visão inovadora e compromisso com a excelência.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSZgbZ3Vvm4uA0--o-KfPihd4LZgK0oCMhw&s"
                alt="Sara Mendes"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Sara Mendes</h3>
                <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-medium mb-3">Diretora Acadêmica</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Doutora em Ciência da Computação, Sara é responsável por desenvolver e aprimorar constantemente nossa metodologia de ensino.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://walterlongo.com.br/wp-content/uploads/2019/09/30470414150_27d531459a_o-copy-2.png"
                alt="Mario Alberto Maçom"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Mario Alberto Maçom</h3>
                <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-medium mb-3">Diretor de Tecnologia</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Com passagens por grandes empresas de tecnologia, Mario garante que nossos cursos estejam sempre alinhados às demandas do mercado.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/055/069/578/non_2x/businesswoman-working-on-laptop-stylish-blonde-woman-in-black-suit-using-notebook-computer-free-png.png"
                alt="Leticia Pinto"
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Leticia Pinto</h3>
                <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-medium mb-3">Coordenadora de Parcerias</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Leticia desenvolve parcerias estratégicas com empresas de tecnologia, garantindo oportunidades de estágio e emprego para nossos alunos.
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent e mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empresas que confiam na qualidade da nossa formação e contratam nossos talentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Logos – mantidos como estavam */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <a href="https://www.amazon.com.br/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.prideindustries.com/wp-content/uploads/2021/06/Customer-logo_Amazon.png"
                  alt="Empresa 1"
                  className="h-14 object-contain"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <a
                href="https://about.google/intl/pt-BR/?_gl=1*1qft4lp*_ga*MzMwNjA3MjUzLjE3NTY0Njg5OTc.*_ga_V9K47ZG8NP*czE3NTY0Njg5OTckbzEkZzEkdDE3NTY0NjkwMTEkajQ2JGwwJGgw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHop6zSB1Gk0z8FdoXAYJW1f03ZcdiH0_tQ&s"
                  alt="Empresa 2"
                  className="h-14 object-contain"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <a
                href="https://www.lojaboschferramentas.com.br/?gad_source=1&gad_campaignid=20361910526&gbraid=0AAAAAo2o5xettvkPGu-kg2i91alGw6nUY&gclid=Cj0KCQjwn8XFBhCxARIsAMyH8Bsx5AtvNQJ1Zo9WtX3zi081fky1kskswyeMpmmytoMeLeW4_WoMj9saAjnUEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://assets.bosch.com/media/global/bosch_group/our_figures/brands/bosch-brand-bosch_res_1280x720.webp"
                  alt="Empresa 3"
                  className="h-14 object-contain"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <a href="https://www.nvidia.com/pt-br/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FrXqIABVaSmNOQb3X7a5_3qStp_o6nm_oA&s"
                  alt="Empresa 4"
                  className="h-14 object-contain"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <a href="https://www.makita.com.br/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/12/Makita-logo.png"
                  alt="Empresa 5"
                  className="h-14 object-contain"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <a
                href="https://www.mirao.com.br/?srsltid=AfmBOor1-kSQiDJwFxEr87-WtMSgkIYej0dkW1uIP1ZkaZJAbS5dv92M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQGQnQy9yc4zLQ/company-logo_200_200/company-logo_200_200/0/1630535243319?e=2147483647&v=beta&t=OVecd1e9go_YDc2EVuycX1OYIm5yO18yIHaxXgM2XAw"
                  alt="Empresa 6"
                  className="h-14 object-contain"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
