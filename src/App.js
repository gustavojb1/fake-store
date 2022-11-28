import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ConfirmPurchase from "./components/ConfirmPurchase";
import { UserStorage } from "./components/UserContext";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import ProtectedRoute from "./components/Helper/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="confirm/"
              element={
                <ProtectedRoute>
                  <ConfirmPurchase />
                </ProtectedRoute>
              }
            />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
