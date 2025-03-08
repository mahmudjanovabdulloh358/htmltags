import "./Tags.css";
import Doctype from "./Doctype/Doctype";
import { TAGSDATA } from "../../Mock";

const Tags = () => {
  return (
    <main>
      <div className="container">
        <section className="tags">
          <Doctype />
          {TAGSDATA.map((item, index) => {
            return (
              <div className="tagsdata-div" key={index}>
                <h1>{item.TAGSDATAHeading}</h1>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Tags;
