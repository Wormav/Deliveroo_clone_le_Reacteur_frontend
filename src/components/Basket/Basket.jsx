import "./basket.css";

export default function Basket() {
  return (
    <>
      <div className="basket-container-desktop">
        <button>Valider mon panier</button>
        <p className="empty">Votre panier est vide</p>
      </div>
      <div className="basket-container-mobile">
        <button>Voir le panier</button>
      </div>
    </>
  );
}
