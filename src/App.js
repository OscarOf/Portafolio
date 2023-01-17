import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Main from './Components/Main';
import Slider from './Components/Slider';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />            
      <Main />
      <Slider />
      <Contact />
    </div>
  );
}

export default App;