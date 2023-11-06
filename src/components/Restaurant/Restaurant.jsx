import "./restaurant.css";

export default function Restaurant({ restaurant }) {
  return (
    <div className="restaurant-container">
      <div className="infos">
        <h2 className="restaurant-name">{restaurant.name}</h2>
        <p className="restaurant-description">{restaurant.description}</p>
      </div>
      <div>
        <img
          src={restaurant.picture}
          className="restaurant-picture"
          alt="Un plat du restaurant"
        />
      </div>
    </div>
  );
}
