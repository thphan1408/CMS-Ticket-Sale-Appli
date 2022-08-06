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
            <li>
                <NavLink className="Medium-18" to="/Home">
                    <img className="icon" src={icon1} /> 
                    Trang chủ
                </NavLink>
            </li>

            <li>
              
              <NavLink to="/Manage" className="Medium-18"> <img className="icon" src={icon2} /> Quản lý vé </NavLink>
            </li>

            <li>
              
              <NavLink to="" className="Medium-18"> <img className="icon" src={icon3} /> Đổi soát vé</NavLink>
            </li>

            <li className="Medium-18">
              <img className="icon" src={icon4} />
              Cài đặt
                <ul className="Sub__tag">
                  <li>
                    <NavLink to="#" className="Medium-18">Gói dịch vụ</NavLink>
                  </li>
                </ul>
            </li>


          </ul> 
        </div>
      </nav>
    </div>
  );
}
