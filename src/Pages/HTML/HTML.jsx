import "./HTML.css";
import htmloneimg from "../../assets/IMGS/html1.jfif";
import htmltwoimg from "../../assets/IMGS/html2.png";
import { HTMLDATA } from "../../Mock/index";

const HTML = () => {
  return (
    <main>
      <div className="container">
        <section className="html">
          <div className="html-intro">
            <div className="html-intro-text">
              <h1>HTML Intro</h1>
              <hr className="html-divider" />
              <p className="html-intro-paragraph">
                Bu yerda HTML haqida qisqacha ma&apos;lumot beriladi.
              </p>
            </div>
            <div className="html-intro-image">
              <img src={htmloneimg} alt="HTML img 1" />
              <img src={htmltwoimg} alt="HTML img 2" />
            </div>
          </div>
          <section className="data-big-div">
            {HTMLDATA.map((item) => (
              <div className="data-div" key={item.id}>
                <h2>{item.heading}</h2>
                <hr className="content-divider" />
                <p>{item.paragraph}</p>
              </div>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
};

export default HTML;
