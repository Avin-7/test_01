import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" bg-[#892bc7]">
        <Navbar />
        <Hero />
        <Products />
      </div>
    </>
  );
}

export default App;
