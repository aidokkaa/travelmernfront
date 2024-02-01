import { Link } from "react-router-dom";
import "./searchitem.css";


export const SearchItem = ({ item }) => {

  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} м от центра</span>
        <span className="siTaxiOp">Бесплатный такси с вашего дома</span>
        
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Бесплатная отмена </span>
        <span className="siCancelOpSubtitle">
        Вы можете отменить заказ позже, так что зафиксируйте эту выгодную цену сегодня!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Включая налоги и сборы</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Посмотреть</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

