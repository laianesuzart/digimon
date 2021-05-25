import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonThunk = (digimon, setError) => (dispatch) => {
    axios.get("https://digimon-api.vercel.app/api/digimon")
    .then(res => {
        const newDigimon = res.data.find(actual => actual.name === digimon);
        console.log(newDigimon);
        return (dispatch) => {
            
            dispatch(addDigimon(res.data.name))
        }
    })
    

 //Aqui faça uma requisição com o axios e em seguida, no .then()
 //utilize a função dispatch() passando addDigimon(response.data.name)
}
export default addDigimonThunk;

// export const addCommentThunk = (comment) => {
//     return (dispatch, getState) => {
//       const { user } = getState();
//       const updatedUser = { ...user, comments: [...user.comments, comment] };
  
//       dispatch(addComment(updatedUser));
//     }
//   }