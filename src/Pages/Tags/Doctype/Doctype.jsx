import "./Doctype.css";

const Doctype = () => {
  return (
    <main>
      <div className="container">
        <div className="doctype">
          <h1>HTML — Strukturasi</h1>
          <details>
            <summary>HTML — Strukturasi ko&apos;rinishi</summary>
            <pre className="html-code">
              <b>
                {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>`}
              </b>
            </pre>
          </details>
        </div>
      </div>
    </main>
  );
};

export default Doctype;
