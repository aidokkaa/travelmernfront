import React from 'react';
import './featured.css'
import useFetch from '../../hooks/useFetch';
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from 'react';
export const Featured = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };
  const { data, loading, error } = useFetch(
  `${process.env.REACT_APP_API_URL}hotels/countByCity?cities=berlin,madrid,london`
  );

  console.log(data)
    return (
      <div className="featured">
         {
          loading? 
          <ClipLoader
          // color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />:
          (
            <>
                   <div className="featuredItem">
          <img
            src="https://fikus.guru/images/315029/bigCover.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Наша дача</h1>
            {/* <h2>{data[0]}</h2> */}
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://петропавловск.kz/wp-content/uploads/2020/04/camel-4581951_640.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Большой Емир</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://realkz.com/images_resize/gallery/7095.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>EmirResort</h1>
            {/* <h2>{data[2]}</h2> */}
          </div>
        </div>
            </>
          )
         }
      </div>
    );
  };
  
