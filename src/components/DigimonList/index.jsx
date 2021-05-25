import { useSelector } from "react-redux";
import Digimon from "../Digimon";

function DigimonList(){
    const {digimons} = useSelector(store => store);

    return (
        <ul>
          {digimons.map((digimon, index) => <li key={index}><Digimon digimon={digimon}/></li> )}
        </ul>
    )
  }
  
  export default DigimonList;