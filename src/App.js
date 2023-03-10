import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Main from './Components/Main';
import Slider from './Components/Slider';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />            
      <Main />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;