import "./card.css";

export default function Card({ meal }) {
  return (
    <div className="card-container">
      <div className="card-infos">
        <h4>{meal.title}</h4>
        <p className="card-description">{meal.description}</p>
        <div className="card-price">
          <span className="card-price-number">{meal.price} €</span>
          {meal.popular && <span className="popular">★ Populaire</span>}
        </div>
      </div>
      {meal.picture && (
        <img
          src={meal.picture}
          className="card-picture"
          alt="Un plat du restaurant"
        />
      )}
    </div>
  );
}
