import "./list.css";
import NavBar from '../../components/navbar/NavBar'
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import React from "react";
import {SearchItem} from  '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from 'react';
export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min,setMin] = React.useState(undefined);
  const [max,setMax] = React.useState(undefined)
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}`);
    const handleClick=()=>{
      reFetch()
    }
    console.log(dates);
    const override: CSSProperties = {
      display: "block",
      margin: "0 auto",
      borderColor: "green",
    };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Поиск</h1>
            <div className="lsItem">
              <label>Место назначения</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Проверка даты</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                {/* <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={(e)=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={(e)=>setMax(e.target.value)} className="lsOptionInput" />
                </div> */}
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
               
              </div>
            </div>
            <button onClick={handleClick}>Поиск</button>
          </div>
          <div className="listResult">
           {
            loading ?
            <ClipLoader
            // color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />:
            <>{data.map(item=>(
              <SearchItem item = {item} />
            ))}
            </>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

