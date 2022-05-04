import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.scss';
import 'font-awesome/css/font-awesome.min.css'; 

import Home from "./pages/Home/Home";
import EsploraImbarcazione from "./pages/EsploraImbarcazione";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/esplora-imbarcazione/*" element={<EsploraImbarcazione />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);