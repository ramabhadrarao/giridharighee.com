import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Abhi Nanda Pure Ghee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Buy the best ghee from organic grass-fed desi cows and buffalo online in India
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <a href="#products" className="btn-primary">
            View Products
          </a>
          <a href="tel:+919849499195" className="btn-secondary">
            <FaWhatsapp /> +91 9849499195
          </a>
        </motion.div>
      </div>
      <div className="hero-image">
        <img src="/img/slide4.png" alt="Abhi Nanda Ghee" />
      </div>
    </section>
  );
}
