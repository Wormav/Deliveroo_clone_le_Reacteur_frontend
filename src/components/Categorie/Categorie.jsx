import Card from "../Card/Card";
import "./categorie.css";

export default function Categorie({ categorie, setBasketData, basketData }) {
  return (
    <div className="categorie-container">
      <h3 className="categorie-name">{categorie.name}</h3>
      {categorie.meals.map((meal) => (
        <Card
          basketData={basketData}
          setBasketData={setBasketData}
          meal={meal}
          key={meal.id}
        />
      ))}
    </div>
  );
}
