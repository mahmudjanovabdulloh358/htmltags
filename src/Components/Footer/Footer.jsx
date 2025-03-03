import "./Footer.css";
import { Link } from "react-router-dom";
import { FaTelegram, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="footer">
          <h2>HTML Dunyosi</h2>
          <p>Veb dasturlash asoslarini o‘rganing va kelajakni yarating</p>
          <div className="social-icons">
            <Link to="" aria-label="Telegram">
              <FaTelegram />
            </Link>
            <Link to="#" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link to="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link to="#" aria-label="YouTube">
              <FaYoutube />
            </Link>
          </div>
          <p className="copyright">
            <span className="scrolling-text">
              &copy; {new Date().getFullYear()} HTML O‘quv Platformasi. Barcha
              huquqlar himoyalangan.
            </span>
          </p>
          <p className="name-age">
            <strong>Asoschi</strong>: Abdulloh Mahmudjanov
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
