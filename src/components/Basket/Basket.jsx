import { useEffect, useState } from "react";
import "./basket.css";

export default function Basket({ basketData, setBasketData }) {
  const [subtotal, setSubtotal] = useState(0);
  const [delivery] = useState(2.5);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const newSubtotal = basketData.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const newTotalQuantity = basketData.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalQuantity(newTotalQuantity);

    setSubtotal(newSubtotal);

    const roundedTotal = (newSubtotal + delivery).toFixed(2);

    setTotal(roundedTotal);
  }, [basketData, total, delivery]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setOpen(false);
      }
    };

    // Attacher le gestionnaire d'événements de redimensionnement lors de la mise en place du composant
    window.addEventListener("resize", handleResize);

    // Détacher le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const decreaseQuantity = (item) => {
    const updatedBasketData = [...basketData];
    const itemIndex = updatedBasketData.findIndex(
      (basketItem) => basketItem.id === item.id
    );
    if (itemIndex !== -1) {
      if (updatedBasketData[itemIndex].quantity > 1) {
        updatedBasketData[itemIndex].quantity -= 1;
      } else {
        updatedBasketData.splice(itemIndex, 1);
      }
      setBasketData(updatedBasketData);
    }
  };

  const increaseQuantity = (item) => {
    const updatedBasketData = [...basketData];
    const itemIndex = updatedBasketData.findIndex(
      (basketItem) => basketItem.id === item.id
    );
    if (itemIndex !== -1) {
      updatedBasketData[itemIndex].quantity += 1;
      setBasketData(updatedBasketData);
    }
  };

  return (
    <>
      <div
        className={
          open
            ? "basket-container-desktop basket-container-mobile-open"
            : "basket-container-desktop"
        }
      >
        <button className={basketData.length > 0 ? "btn-basket btn" : "btn"}>
          Valider mon panier
        </button>
        <button
          onClick={() => setOpen(false)}
          className={open ? "icon" : "display-none"}
        >
          X
        </button>
        {basketData.length > 0 ? (
          <>
            <div className="item-container">
              {basketData.map((item) => (
                <div className="line-container" key={item.id}>
                  <div className="quantity-container">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="btn-quantity btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item)}
                      className="btn-quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-title">{item.title}</p>
                  <span>{(item.quantity * item.price).toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <div className="price-container">
              <div className="subtotal">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <div className="delivery">
                <span>Frais de livraison</span>
                <span>{delivery.toFixed(2)} €</span>
              </div>
            </div>
            <div className="total-container">
              <span>Total</span>
              <span>{total} €</span>
            </div>
          </>
        ) : (
          <p className="empty">Votre panier est vide</p>
        )}
      </div>
      <div className="basket-container-mobile">
        <button
          onClick={() => setOpen(true)}
          className={basketData.length > 0 ? "btn-basket-mobile btn" : "btn"}
        >
          <p
            className={
              basketData.length > 0 ? "total-quantity" : "display-none"
            }
          >
            {totalQuantity}
          </p>
          {open ? "Valider mon panier" : "Voir mon panier"}
          <p className={basketData.length > 0 ? "" : "display-none"}>
            {total} €
          </p>
        </button>
      </div>
    </>
  );
}
