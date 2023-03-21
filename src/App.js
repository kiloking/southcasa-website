import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App bg-[#0F8F9D]">
      <Navbar />
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  );
}

export default App;
