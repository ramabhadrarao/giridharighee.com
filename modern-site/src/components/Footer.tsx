import { FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <img src="/img/footer-logo.png" alt="Abhi Nanda Ghee" className="footer-logo" />
          <div className="fssai">
            <img src="/images/fssai.png" alt="FSSAI Certified" />
          </div>
          <div className="social-links">
            <a
              href="https://www.facebook.com/AbhiNandaGhee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
          <p className="copyright">
            © Giridhari Foods, Abhi Nanda Pure Ghee. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
