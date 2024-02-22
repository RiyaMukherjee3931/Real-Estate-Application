
import './App.css';
import Companies from './Component/Companies/Companies';
import Extra from './Component/Extra/Extra';
import Header from './Component/Header/Header';
import Residencies from './Component/Residencies/Residencies';
import Value from './Component/Value/Value';
import Contact from './Component/Contact/Contact';
import GetStarted from './Component/Get Started/GetStarted';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App"> 
    <div>
    <Header />
    <Extra />
    </div>
    <Companies/>
    <Residencies />
    <Value />
    <Contact />
    <GetStarted />
    <Footer />
    </div>
  );
}

export default App;
