import Header from "./components/Hearder/Header";
import "./app.css";
import Restaurant from "./components/Restaurant/Restaurant";
import axios from "axios";
import { useEffect, useState } from "react";
import Categorie from "./components/Categorie/Categorie";
import Basket from "./components/Basket/Basket";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basketData, setBasketData] = useState([]);

  console.log(basketData);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--deliveroo-api--xqlhxl275zw4.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <p>En cours de chargement...</p>}
      {data && (
        <div className="container">
          <div className="max-container">
            <Header />
            <Restaurant restaurant={data.restaurant} />
          </div>
          <div className="main-container">
            <div className="menu">
              {data.categories.map((categorie) => {
                if (categorie.meals.length > 0) {
                  return (
                    <Categorie
                      basketData={basketData}
                      setBasketData={setBasketData}
                      categorie={categorie}
                      key={categorie.id}
                    />
                  );
                }
                return null;
              })}
            </div>
            <Basket setBasketData={setBasketData} basketData={basketData} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
