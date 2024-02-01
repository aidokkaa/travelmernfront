
 import "./header.css";
import { DateRange } from "react-date-range";
 import { FaBed } from "react-icons/fa";
 import { FaPlane } from "react-icons/fa";
 import { FaCalendarAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { MdAttractions } from "react-icons/md";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { SearchContext} from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { RiMentalHealthFill } from "react-icons/ri";

const Header = ({ type }) => {
  const { user } = useContext(AuthContext);
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [forExamp,setForExamp]=useState(false)
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  const openExamp = ()=>{
    setForExamp(true)
  }


  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
         
          <div className="headerListItem">
          <FaPlane />
            <span>Путешествие</span>
          </div>
          <div className="headerListItem">
            <FaCar />
            <span>Эко Отдых</span>
          </div>
          <div className="headerListItem">
          <MdAttractions />
            <span>Развлечения</span>
          </div>
          <div className="headerListItem">
          <RiMentalHealthFill />
            <span>Здоровье</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 clas5sName="headerTitle">
             EmirTravel - клуб семейного отдыха
            </h1>
            <p className="headerDesc">
            Получайте вознаграждение за свои путешествия – разблокируйте мгновенную экономию в размере 10 % с бесплатной учетной записью Aidabooking
            </p>
            <span style={{color:"black"}}></span>
            {!user && 
             <Link to='https://wa.clck.bar/77021880556'>
                <button className="headerBtn">Забронировать место</button>
             </Link>}
            <div className="headerSearch">
              <div className="headerSearchItem">    
              <FaBed className="headerIcon" />  
                <input onFocus={openExamp}
                  type="text"
                  placeholder="Куда вы идете?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
               {
                forExamp &&
                <div className="forExamp">
                <div className="innerfor">
                     <span className="grey">Например:</span>
                     <span className="grey"> дача, емир, большой емир...</span>
                </div>
              </div>
               }
              </div>
              <div className="headerSearchItem">
              <FaCalendarAlt  className="headerIcon"  />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
              <FaPerson className="headerIcon"  /> 
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Взрослый</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Детский</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Комната</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Поиск
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;


