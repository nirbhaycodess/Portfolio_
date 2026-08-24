import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
