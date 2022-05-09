import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import './style.scss';

import Home from "./pages/Home/Home";
import EsploraImbarcazione from "./pages/EsploraImbarcazione";
import Faq from "./pages/Faq/Faq";

export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/esplora-imbarcazione/*" element={<EsploraImbarcazione />} />
          <Route path="/faq/*" element={<Faq />} />
      </Routes>
    </HashRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);