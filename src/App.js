import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Section1 from "./ver3Pages/Section1";
import Section2 from "./ver3Pages/Section2";
import Section3 from "./ver3Pages/Section3";
import Section4 from "./ver3Pages/Section4";
import Section5 from "./ver3Pages/Section5";
import Section6 from "./ver3Pages/Section6";
import Footer from "./ver3Pages/Footer";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App bg-[#F3ECDA]">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
