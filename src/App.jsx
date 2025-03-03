import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HTML from "./Pages/HTML/HTML";
import Tags from "./Pages/Tags/Tags";
import Attributes from "./Pages/Attributes/Attributes";
import BoshqaSaytlarimiz from "./Pages/BoshqaSaytlarimiz/BoshqaSaytlarimiz";
import BoshqaSaytlar from "./Pages/BoshqaSaytlar/BoshqaSaytlar";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HTML />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/Attributes" element={<Attributes />} />
        <Route path="/BoshqaSaytlarimiz" element={<BoshqaSaytlarimiz />} />
        <Route path="/BoshqaSaytlar" element={<BoshqaSaytlar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
