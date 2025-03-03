import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <section className="header">
          <h1>
            <Link to={"/"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9EWS4U27KhoOP8fCf-RXY_txM-5QQeRLCQ&s"
                alt="HTML Logo"
                style={{ borderRadius: "5px", width: "50px", height: "50px" }}
              />
              <span>HTML</span>
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/Tags">Tags</Link>
              </li>
              <li>
                <Link to="/Attributes">Attribute</Link>
              </li>
              <li>
                <Link to="/BoshqaSaytlar">Boshqa saytlar</Link>
              </li>
              <li>
                <Link to="/BoshqaSaytlarimiz">Boshqa saytlarimiz</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
