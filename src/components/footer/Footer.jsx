import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Страны</li>
          <li className="fListItem">Регионы</li>
          <li className="fListItem">Города</li>
          <li className="fListItem">Деревни</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Зоны для отдыха</li>
          <li className="fListItem">Дачи</li>
          <li className="fListItem">Красивые места</li>
          <li className="fListItem">Виллы для гостей</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Уникальные места для отдыха </li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Туристические коммуникацийй </li>
          <li className="fListItem">Сезонные и праздничные дни</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Автопарки</li>
          <li className="fListItem">Мини беседки</li>
          <li className="fListItem">Ресторанные резерваций </li>
          <li className="fListItem">Туристические агенты</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 EcoTravel.</div>
    </div>
  );
};

export default Footer;