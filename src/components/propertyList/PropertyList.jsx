import React from 'react'
import './propertyList.css';
import useFetch from '../../hooks/useFetch';
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from 'react';
export const PropertyList = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://welcome.kz/ru/assets/images/products/0_gallery/guidebook/traditions/national_game_bajga.jpg",
    "https://st.depositphotos.com/1169330/4138/i/450/depositphotos_41389437-stock-photo-dairy-products.jpg",
    "https://cdn.culture.ru/images/78800211-c5e5-5ff6-939f-c28967d6e5f7",
    "https://egemen.kz/media/2020/12/24/bozdgyra.jpg",
    "https://i.astanatv.kz/2023/5/14/1684044141845.jpg",
  ];
  return (
    <div className="pList">
    {loading ? (
     <ClipLoader
     // color={color}
     loading={loading}
     cssOverride={override}
     size={150}
     aria-label="Loading Spinner"
     data-testid="loader"
   />
    ) : (
      <>
        {data &&
          images.map((img,i) => (
            <div className="pListItem" key={i}>
              <img
                src={img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1></h1>
                <h2> {data[i]?.type}</h2>
              </div>
            </div>
          ))}
      </>
    )}
  </div>
);
};
