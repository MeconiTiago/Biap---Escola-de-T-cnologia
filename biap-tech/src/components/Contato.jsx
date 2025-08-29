import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Contato = () => {
  // ---------------- Formulário de contato ----------------
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    setTimeout(() => setEnviado(false), 5000);
  };

  // ---------------- Newsletter ----------------
  const [newsEmail, setNewsEmail] = useState('');
  const [newsLoading, setNewsLoading] = useState(false);
  const [newsSuccess, setNewsSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsEmail) return;

    setNewsLoading(true);
    setNewsSuccess(false);

    setTimeout(() => {
      setNewsLoading(false);
      setNewsSuccess(true);
      setShowToast(true);
      setNewsEmail('');
      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      {/* Banner – padronizado (hero escuro + diagonais + brilhos) */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative h-[220px] sm:h-[280px] md:h-[360px] rounded-2xl"
        >
          {/* base abstrata */}
          <img
            src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1600&auto=format&fit=crop"
            alt="Fundo abstrato contato"
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
                Contato
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90 drop-shadow">
                Estamos prontos para atender você
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Seção de Contato */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna esquerda: Form + CTA */}
            <div className="space-y-6">
              {/* Formulário */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-h-[540px] overflow-y-auto"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Envie-nos uma mensagem
                </h2>

                {enviado && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                    <p>Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Assunto
                      </label>
                      <select
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                        required
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="informacoes">Informações sobre cursos</option>
                        <option value="matricula">Dúvidas sobre matrícula</option>
                        <option value="financeiro">Questões financeiras</option>
                        <option value="parcerias">Parcerias</option>
                        <option value="outros">Outros assuntos</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>

              {/* CTA / Redes / Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-5"
              >
                <div className="space-y-6">
                  {/* CTAs */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Fale com a BIAP</h3>
                    <div className="flex flex-wrap gap-2">
<a
  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20cursos."
  target="_blank"
  rel="noreferrer"
  className="
    inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
    text-emerald-600 bg-emerald-50 ring-1 ring-inset ring-emerald-200
    hover:bg-emerald-100 transition-colors

    dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/30
    dark:hover:bg-emerald-500/20
  "
  aria-label="Falar no WhatsApp"
>
  {/* Ícone WhatsApp preenchido */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="16"
    height="16"
    fill="currentColor"
    className="shrink-0"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 103.5 32 3.9 131.7 3.9 252.1c0 43.9 11.5 86.6 33.5 124.2L0 480l106.7-36.3c35 19.1 74.6 29.1 114.8 29.1h.1c120.4 0 220-99.7 220-220.1 0-59.2-23.1-114.9-65.7-157.6zM224.6 438.7h-.1c-33.5 0-66.2-9-94.7-26l-6.8-4-63.2 21.5 21-61.6-4.4-6.9c-20.3-31.9-31-68.8-31-106.6 0-110.1 89.6-199.7 199.7-199.7 53.3 0 103.3 20.8 140.7 58.6 37.5 37.9 58.1 88 57.9 141.3-.1 110.1-89.7 199.7-199.9 199.7zm115.1-150.5c-6.3-3.2-37.3-18.4-43.1-20.5-5.8-2.1-10-3.2-14.3 3.2-4.2 6.3-16.4 20.5-20.1 24.7-3.7 4.2-7.4 4.7-13.7 1.6-6.3-3.2-26.5-9.8-50.4-31.2-18.6-16.6-31.1-37.1-34.8-43.4-3.7-6.3-.4-9.7 2.8-12.9 2.9-2.9 6.3-7.4 9.5-11.1 3.2-3.7 4.2-6.3 6.3-10.5 2.1-4.2 1.1-7.9-.5-11.1-1.6-3.2-14.3-34.4-19.6-47.1-5.2-12.5-10.5-10.8-14.3-11-3.7-.2-7.9-.2-12.1-.2s-11.1 1.6-16.9 7.9c-5.8 6.3-22.1 21.6-22.1 52.7s22.6 61.2 25.7 65.6c3.2 4.2 44.5 68 107.9 95.4 15.1 6.5 26.9 10.4 36.1 13.3 15.2 4.8 29 4.1 40 2.5 12.2-1.8 37.3-15.2 42.6-29.9 5.3-14.7 5.3-27.3 3.7-29.9-1.6-2.5-5.8-4-12.1-7.1z"/>
  </svg>

  WhatsApp
</a>


                      <a
                        href="tel:+551134567890"
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary-700 dark:text-primary-200 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" /></svg>
                        Ligar agora
                      </a>

                      <a
                        href="mailto:contato@biaptech.com.br"
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg>
                        Enviar e-mail
                      </a>
                    </div>
                  </div>

                  {/* Redes sociais */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Siga nas redes</h3>
                    <div className="flex items-center gap-4">
                      <a href="https://www.instagram.com/seu_user" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition-transform shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" /></svg>
                      </a>
                      <a href="https://www.linkedin.com/company/sua_empresa" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM8 7h4.8v2.4h.07c.67-1.2 2.3-2.4 4.73-2.4C21.4 7 24 9.24 24 13.9V24h-5v-9.2c0-2.2-.78-3.7-2.72-3.7-1.48 0-2.37 1-2.76 2-.14.3-.18.8-.18 1.2V24H8V7z" /></svg>
                      </a>
                      <a href="https://www.youtube.com/@seucanal" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-red-600 text-white hover:scale-110 transition-transform shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" /></svg>
                      </a>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <form onSubmit={handleNewsletterSubmit} className="w-full">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                      Receba novidades e eventos
                    </h3>

                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={newsEmail}
                        onChange={(e) => setNewsEmail(e.target.value)}
                        placeholder="Seu e-mail"
                        required
                        className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />

                      <button
                        type="submit"
                        disabled={newsLoading}
                        className="rounded-lg px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-500 via-fuchsia-500 to-blue-600 shadow disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-400 dark:focus:ring-fuchsia-600 flex items-center gap-2"
                      >
                        {newsLoading && (
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                        )}
                        {!newsLoading && newsSuccess && (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {newsLoading ? 'Inscrevendo...' : newsSuccess ? 'Inscrito!' : 'Inscrever'}
                      </button>
                    </div>

                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Sem spam. Você poderá cancelar quando quiser.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Coluna direita: Info + Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-indigo-50 dark:from-purple-900/30 dark:via-fuchsia-900/30 dark:to-indigo-900/30 p-8 rounded-2xl shadow-lg mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Endereço</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Av. Paulista, 1000 - Bela Vista<br />
                        São Paulo - SP, 01310-100<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Telefone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +55 (11) 3456-7890<br />
                        +55 (11) 98765-4321
                      </p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">E-mail</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        contato@biaptech.com.br<br />
                        suporte@biaptech.com.br
                      </p>
                    </div>
                  </div>

                  {/* Horário */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Segunda a Sexta: 8h às 20h<br />
                        Sábado: 9h às 13h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg overflow-hidden mt-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    title="Mapa da localização"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={
                      'https://www.google.com/maps?q=' +
                      encodeURIComponent('Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100') +
                      '&output=embed'
                    }
                    allowFullScreen
                  />
                </div>
                <div className="mt-3 text-right">
                  <a
                    href={
                      'https://www.google.com/maps/search/?api=1&query=' +
                      encodeURIComponent('Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100')
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossos cursos e processo de matrícula.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Como funciona o processo de matrícula?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  O processo de matrícula é simples: preencha o formulário online, escolha o curso desejado, efetue o pagamento e receba as instruções de acesso à plataforma de ensino em até 24 horas.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quais são as formas de pagamento aceitas?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Aceitamos cartões de crédito (parcelamento em até 12x), boleto bancário, PIX e transferência bancária. Oferecemos também descontos para pagamento à vista.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Os cursos são presenciais ou online?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Oferecemos modalidades presencial, online ao vivo e híbrida. Você pode escolher a que melhor se adapta à sua rotina e necessidades de aprendizado.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Vocês oferecem certificado ao final do curso?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sim, todos os nossos cursos emitem certificados reconhecidos pelo mercado. Para cursos técnicos, oferecemos também certificações específicas das tecnologias estudadas.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Existe suporte para os alunos durante o curso?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sim, oferecemos suporte técnico e pedagógico durante todo o curso. Nossos instrutores estão disponíveis para tirar dúvidas e auxiliar nos projetos práticos.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Vocês ajudam na inserção no mercado de trabalho?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sim, temos um programa de empregabilidade que inclui preparação para entrevistas, revisão de currículo e parcerias com empresas que contratam nossos alunos regularmente.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOAST de sucesso */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50"
            aria-live="polite"
          >
            <div className="rounded-xl bg-white/95 dark:bg-gray-800/95 shadow-lg ring-1 ring-black/5 px-4 py-3 flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900 dark:text-white">Inscrição confirmada!</p>
                <p className="text-gray-600 dark:text-gray-300">Você receberá novidades da BIAP no seu e-mail.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Contato;
