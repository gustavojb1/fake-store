import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ConfirmPurchase from "./components/ConfirmPurchase";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ConfirmPurchase />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
