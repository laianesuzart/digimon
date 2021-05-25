import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonThunk = (digimon, setError) => (dispatch) => {
  axios
  .get("https://digimon-api.vercel.app/api/digimon")
  .then((res) => {
    const newDigimon = res.data.find((actual) => actual.name === digimon) || "";
    dispatch(addDigimon(newDigimon));
  });
};

export default addDigimonThunk;