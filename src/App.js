import './App.css';
import { FiltersAlign } from './Components/FiltersAlignment/FiltersAlign';
import { Navbar } from './Components/SecondPage/Navbar';
// import Routing from './Routes/Routing';

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <Navbar/>
      <FiltersAlign/>
    </div>
  );
}

export default App;
