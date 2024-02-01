import React from "react";
import './home.css'
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import  NavBar  from "../../components/navbar/NavBar.jsx";
import { Featured } from "../../components/featured/Featured.jsx";
import { PropertyList } from "../../components/propertyList/PropertyList.jsx";
import { MailList } from "../../components/mailList/MailList.jsx";
export const Home=()=>{
    return(
        <>
           <NavBar></NavBar>
           <Header></Header>
           <div className="homeContainer">
            <h1>Зоны для отдыха</h1>
             <Featured></Featured>
             <h1 className="homeTitle">
                Развлечений
             </h1>
             <PropertyList></PropertyList>
             <MailList></MailList>
             <Footer></Footer>
           </div>
        </>
    )
}