import './style.css';

function Digimon({digimon: {name, img, level}}){
    return (
      <div className="card">
        <p>{name}</p>
        <img src={img} alt={name} />
        <p>{level}</p>
      </div>
    )
  }
  
  export default Digimon;