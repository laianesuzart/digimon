import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import addDigimonThunk from "../../store/modules/digimons/thunks";

function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function handleSearch() {
    setError(false);
    if (!!input) {
      dispatch(addDigimonThunk(input, setError));
      setInput("");
    } else {
      toast.error("Digite um nome!");
    }
  }

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
      {error && (
        <div style={{ marginTop: 10, color: "darkred" }}>
          Digimon não existe!
        </div>
      )}
    </div>
  );
}

export default Search;
