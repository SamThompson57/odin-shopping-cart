import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import RouteSwitch from './RouteSwitch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <RouteSwitch/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;