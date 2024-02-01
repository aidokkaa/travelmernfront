import "./mailList.css"
import React from 'react';
import { MdDoneOutline } from "react-icons/md";
export const MailList = () => {
  const [mailValue,setMailValue]=React.useState(false)
  return (
    <div className="mail">
      <h1 className="mailTitle">
        Экономьте время, экономьте деньги!</h1>
      <span className="mailDesc">Зарегистрируйтесь и мы отправим вам лучшие предложения</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button onClick={()=>setMailValue(true)}>Подпишись!</button>
        {
      mailValue &&
      <MdDoneOutline className="done" />
    }
      </div>
    </div>
  )
}

