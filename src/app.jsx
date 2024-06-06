import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";

export function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Home/>
      <Experience/>
      <Contact/>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
