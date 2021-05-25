import { useState } from "react";
import {useDispatch} from 'react-redux';
import addDigimonThunk from '../../store/modules/digimons/thunks';

function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function handleSearch() {
    setError(false);
    dispatch(addDigimonThunk(input));
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
    </div>
  );
}

export default Search;
