import { Router } from "react-router";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/Products/Products";
import { GlobalStyle } from "./globalStyles";
import { productData } from './components/Products/data';

function App() {
  return (
    <>
    <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
    </>
  );
}

export default App;
