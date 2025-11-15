import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listDigimonThunk } from './store/modules/digimons/thunks';
import { filterDigimon } from './store/modules/digimons/actions';
import Digimon from './components/Digimon';
import './styles.css';

function App() {
  const [digimon, setDigimon] = useState('');
  const { filteredDigimons, error } = useSelector((store) => store.digimons);
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    dispatch(filterDigimon(digimon));
  }

  useEffect(() => {
    dispatch(listDigimonThunk());
  }, []);
  return (
    <main>
      <hgroup>
        <h1 className="title">デジモン</h1>
        <p>Find your Digimon!</p>
      </hgroup>
      <div>
        <search>
          <form className="search__form" onSubmit={handleSearch}>
            <label htmlFor="digimon" className="sr-only">
              Digimon name:
            </label>
            <input
              id="digimon"
              className="search__field"
              value={digimon}
              onChange={(e) => setDigimon(e.target.value)}
              placeholder="Monzaemon"
            ></input>
            <button className="search__button" type="submit">
              Search
            </button>
          </form>
        </search>
        {error && (
          <div className="error">
            Something went wrong, try again later <span className="no-break">&#40;╥﹏╥&#41;</span>{' '}
          </div>
        )}
      </div>
      <ul className="card-container">
        {filteredDigimons.map((digimon) => (
          <li key={digimon.name}>
            <Digimon digimon={digimon} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
