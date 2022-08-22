import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css";
import "../../App.css";

// import logo
import logo from "../../assets/imgs/insight-05.png";
import icon1 from "../../assets/icons/Vector.svg";
import icon2 from "../../assets/icons/Vector2.svg";
import icon3 from "../../assets/icons/Vector3.svg";
import icon4 from "../../assets/icons/Vector4.svg";
import copy from "../../assets/icons/Copy.svg"

export default function menu() {
  return (
    <div className="Menu">
        <div className="Logo__insight">
          <NavLink to="">
            <img className="Logo" src={logo} alt="insight logo" />  
          </NavLink>
        </div>  

        <div className="Menu__list">
          <ul className="Frame__list">
            <li>
                <NavLink className="Medium-18" to="">
                    <img className="icon" src={icon1} /> 
                    Trang chủ
                </NavLink>
            </li>

            <li>
              <NavLink to="/Manage" className="Medium-18"> <img className="icon" src={icon2} /> Quản lý vé </NavLink>
            </li>

            <li>
              <NavLink to="/CheckTicket" className="Medium-18"> <img className="icon" src={icon3} /> Đối soát vé</NavLink>
            </li>

            <li className="Medium-18">
              <NavLink to="/setting">
                <img className="icon" src={icon4} />
                Cài đặt
              </NavLink>
                <ul className="Sub__tag">
                  <li>
                    <NavLink to="#" className="Medium-18">Gói dịch vụ</NavLink>
                  </li>
                </ul>
            </li>
          </ul> 
        </div>
    </div>
  );
}
