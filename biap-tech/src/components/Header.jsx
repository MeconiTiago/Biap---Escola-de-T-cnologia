import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import biapLogo from '../assets/images/biap-logo.svg';
import { GradientButton } from '../components/ui';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="container-custom py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/">
            <img src={biapLogo} alt="BIAP Logo" className="h-12" />
          </Link>
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <Link to="/" className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Home</Link>
          <Link to="/cursos" className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Cursos</Link>
          <Link to="/sobre" className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Sobre Nós</Link>
          <Link to="/depoimentos" className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Depoimentos</Link>
          <Link to="/contato" className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Contato</Link>
        </motion.nav>
        <Link to="/matricula">
          <GradientButton>
            Matricule-se
          </GradientButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;