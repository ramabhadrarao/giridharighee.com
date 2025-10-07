import { motion } from 'framer-motion';
import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="footer-content"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/img/footer-logo.png"
            alt="Abhi Nanda Ghee"
            className="footer-logo"
          />
          <div className="fssai">
            <img src="/images/fssai.png" alt="FSSAI Certified" />
          </div>
          <div className="social-links">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/AbhiNandaGhee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </motion.a>
          </div>
          <p className="copyright">
            © Giridhari Foods, Abhi Nanda Pure Ghee. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}