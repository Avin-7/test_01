import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Stores from "./components/Stores";
import ContactUs from "./components/ContactUs";

import ObserverProvider from "./ObserverProvider";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <ObserverProvider>
          <Hero />
          <Products />
          <Stores />
          <ContactUs />
        </ObserverProvider>
      </div>
    </>
  );
}

export default App;
