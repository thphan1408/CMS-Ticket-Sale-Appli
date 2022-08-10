import React from "react";
import "./Footer.css"

import copy from "../../assets/icons/Copy.svg"

export default function CheckTicket() {
    return(
        <div className="Footer">
            <span className="Footer__text Regular-14"> Copyright <img src={copy} alt="copy" /> 2020 Alta Software </span>  
        </div>
    )
}