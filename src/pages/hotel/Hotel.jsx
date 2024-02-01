import React from 'react';
import './hotel.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reserve from '../../components/reserve/Reserve';
import { FaCircleXmark } from "react-icons/fa6";
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { MailList } from '../../components/mailList/MailList';
import { FaArrowAltCircleRight } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from '../../context/SearchContext';
import { CSSProperties } from 'react';
export const Hotel = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber]=React.useState(0);
  const [open,setOpen]=React.useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API_URL}/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {dates,options} = useContext(SearchContext);
  console.log(dates);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  // const handleClick = () => {
  //   if (user) {
  //     setOpenModal(true);
  //   } else {
  //     navigate("/login");
  //   }
  // };
  
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  console.log(days)
  const handleOpen=(i)=>{
    setOpen(true);
    setSlideNumber(i)
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==='l'){
      newSlideNumber=slideNumber===0?5:slideNumber-1;
    }else{
      newSlideNumber=slideNumber===5?0:slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <NavBar></NavBar>
      <Header type = 'list'></Header>
      {loading ? 
       <ClipLoader
       // color={color}
       loading={loading}
       cssOverride={override}
       size={150}
       aria-label="Loading Spinner"
       data-testid="loader"
     />:
      <div className="hotelContainer">
       {
        open &&
        <div className="slider">
        <FaCircleXmark onClick={()=>setOpen(false)} className='close'/>
        <FaArrowAltCircleLeft onClick={()=>handleMove('l')} className='arrow' />
        <div className="sliderWrapper">
          <img className='sliderImg' src={data.photos[slideNumber]} alt="" />
          <FaArrowAltCircleRight onClick={()=>handleMove('r')} className='arrow'/>
        </div>
        </div>
       }
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
           <div className="hotelAddress">
           <FaLocationDot />
            <span>{data.address}</span>
           </div>
           <span className="hotelDistance">
              Хорошая локация {data.distance}м от центра
           </span>
        <span className="hotelPriceHighlight">
           Забронируйте проживание в этом отеле на сумму более {data.cheapestPrice} тг и получите бесплатное такси из города.   
        </span>
        <div className="hotelImages">
          {
            data.photos?.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
              </div>
            ))
          }
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">{data.title}</h1>
            <p className='hotelDesc'>
                     {data.desc}
            </p>
          </div>
          <div className="hotelDetailsPrice">
          <h1>Идеально подходит для остановки на {days} ночи!  !</h1>
              <span>
             Лучший выбор!
              </span>
              <h2>
                <p>Со всей семьей!</p>
              <b>{days * data.cheapestPrice * options.room} тг</b> ({days}{" "}
                  ночей)
              </h2>
              <a href='https://wa.clck.bar/77021880556'>
                 <button>Забронируйте сейчас</button>
              </a>
          </div>
        </div>
        </div>
        <MailList></MailList>
        <Footer></Footer>
      </div>}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}
