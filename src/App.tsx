import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import ErrorPage from "./page/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
