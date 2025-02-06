import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Portfolio from'./containers/portfolio';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

      {/* particles js */}

      {/* navbar */}
      <Navbar />

      {/* main page  */}
      <div className="main-page-content">
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
