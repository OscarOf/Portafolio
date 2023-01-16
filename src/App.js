import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Main from './Components/Main';
import Slider from './Components/Slider';

function App() {
  return (
    <div className="App">
      <Header/>            
      <Main />
      <Slider />
    </div>
  );
}

export default App;