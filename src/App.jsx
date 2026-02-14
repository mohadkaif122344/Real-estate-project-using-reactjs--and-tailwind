import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Properties from "./components/Properties";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
     <div>
      <ToastContainer />
    <Router>
      <Navbar />
      <Home />
      <About />
      <Properties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
     </div>
  );
};

export default App;
