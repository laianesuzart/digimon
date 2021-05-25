import axios from "axios";
import { toast } from "react-toastify";
import { addDigimon } from "./actions";

const addDigimonThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((res) => {
      dispatch(addDigimon(...res.data));
    })
    .catch((err) => toast.error("Digimon não existe!"));
};

export default addDigimonThunk;