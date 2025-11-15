import './style.css';

function Digimon({ digimon }) {
  const { name, img } = digimon;
  const level = digimon.level?.includes('Training') ? 'Trainee' : digimon.level;

  return (
    <div className={`card ${level === 'Mega' ? 'card--mega' : ''}`}>
      <figure className="card__figure">
        <figcaption className="card__title">{name}</figcaption>
        <img className="card__image" src={img} alt={name} width={160} height={160} />
      </figure>
      <p className="card__caption">{level} Level</p>
    </div>
  );
}

export default Digimon;
