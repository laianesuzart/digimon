import './App.css';
import DigimonList from './components/DigimonList';
import Search from './components/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <Search />
        <DigimonList />
      </div>
    </>
  );
}

export default App;
