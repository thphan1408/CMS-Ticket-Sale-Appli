import React from "react";
import { NavLink } from "react-router-dom";

import "../Home/Menu.css";
import "../../App.css";

// import logo
import logo from "../../assets/imgs/insight-05.png";
import icon1 from "../../assets/icons/Vector.svg";
import icon2 from "../../assets/icons/Vector2.svg";
import icon3 from "../../assets/icons/Vector3.svg";
import icon4 from "../../assets/icons/Vector4.svg";

export default function menu() {
  return (
    <div className="Menu">
      <nav>
        <div className="Logo__insight">
          <img className="Logo" src={logo} alt="insight logo" />
        </div>  

        <div className="Menu__list">
          <ul className="Frame__list">
            <li className="Tag__block">
                <NavLink className="Tag__link active" to="/Home">
                    <img className="icon__home" src={icon1} /> 
                    Trang chủ
                </NavLink>
            </li>

            <li className="Tag__block">
              
              <NavLink to="/Manage" > <img className="icon" src={icon2} /> Quản lý vé </NavLink>
            </li>

            <li className="Tag__block">
              <img className="icon" src={icon3} />
              <a href="#">Đổi soát vé</a>
            </li>

            <li className="Tag__block">
              <img className="icon" src={icon4} />
              Cài đặt
            </li>

                <ul className="Sub__tag">
                  <li className="Tag__block" style={{marginLeft:"30px"}}>
                    <a href="#">Gói dịch vụ</a>
                  </li>
                </ul>
          </ul> 
        </div>
      </nav>
    </div>
  );
}
