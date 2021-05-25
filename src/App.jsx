import './App.css';
import Digimon from './components/Digimon';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Search/>
          <Digimon/>
      </header>
    </div>
  );
}

export default App;