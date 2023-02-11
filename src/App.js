import './App.css';
// import { Routes , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/header/topbar';
import Navbar from './components/header/navbar';
import Main from './components/main';
import Aboutus from './components/about';
import Services from './components/services';
// import Banner from './components/banner';
import Team from './components/team';
import WorkingProcess from './components/workingProcess';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollTop from './components/topbnt';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <Main />
      <Aboutus />
      <Services />
      <Team />
      <WorkingProcess />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
