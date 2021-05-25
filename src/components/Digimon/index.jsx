function Digimon({digimon: {name, img, level}}){
    return (
      <div>
        <p>{name}</p>
        <img src={img} alt={name} />
        <p>{level}</p>
      </div>
    )
  }
  
  export default Digimon;