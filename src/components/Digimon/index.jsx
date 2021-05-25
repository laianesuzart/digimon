import { useSelector } from "react-redux";

function Digimon(){
    const {digimons} = useSelector(store => store)
    return (
      <div>
        <ul>
          {digimons.map((digimon, index) => <li key={index}>{digimon}</li>)}
        </ul>
      </div>
    )
  }
  
  export default Digimon;