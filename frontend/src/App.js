import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import CreateProduct from "./components/createProduct";
import UpdateProduct from "./components/updateProduct";
import Header from "./components/Header"

function App() {
  return <div>
    <Header />
    <Routes>
      <Route path = "/getAllItems" element = {<Products />} />
      <Route path = "/createProduct" element = {<CreateProduct />} />
      <Route path = "/updateProduct" element = {<UpdateProduct />} />
    </Routes>
  </div>
}

export default App;
