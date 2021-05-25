import './App.css';
import DigimonList from './components/DigimonList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Search/>
          <DigimonList/>
      </header>
    </div>
  );
}

export default App;