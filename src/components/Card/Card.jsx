import "./card.css";

export default function Card({ meal, setBasketData, basketData }) {
  const handleClick = () => {
    const addData = {
      id: meal.id,
      title: meal.title,
      price: meal.price,
      quantity: 1,
    };

    const existingItemIndex = basketData.findIndex(
      (item) => item.id === addData.id
    );

    if (existingItemIndex !== -1) {
      const updatedBasketData = [...basketData];
      updatedBasketData[existingItemIndex].quantity += 1;
      setBasketData(updatedBasketData);
    } else {
      setBasketData([...basketData, addData]);
    }
  };

  return (
    <div className="card-container" onClick={handleClick}>
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
