import { useSelector } from "react-redux";
import Digimon from "../Digimon";

function DigimonList(){
    const {digimons} = useSelector(store => store);
    return (
        <div>
          {digimons.map((digimon, index) => <Digimon key={index} digimon={digimon}/>)}
        </div>
    )
  }
  
  export default DigimonList;