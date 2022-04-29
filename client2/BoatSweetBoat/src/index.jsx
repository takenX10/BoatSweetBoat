import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


import About from "./pages/About";
import Test from "./pages/Test";
import Home from "./pages/Home";
import EsploraImbarcazione from "./pages/EsploraImbarcazione/";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/esplora-imbarcazione/*" element={<EsploraImbarcazione />} />
          <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);