import React from "react"
import search from "../../assets/icons/Search.svg";
import "./Setting.css"


export default function CheckTicket() {
    return(
        <div className="Container">
            <div className="Navigation__content">
                <h1 className='Content Bold-36'>Danh sách gói vé</h1>
                <div className="Sub__content">  
                    <div className="Search Search--left">
                        <input className='Search__text' type="number" placeholder='Tìm bằng số vé' /> 
                        <button className='Search__btn'>
                        <img className='Search__icon' src={search} />
                        </button>   
                    </div>


                    <div className="btn">
                        <button className='Print__btn'> <span className='Bold-18'>Xuất file (.csv)</span></button>
                        <button className='Add__Ticket__btn Bold-18'> <span className='Bold-18'> Thêm gói vé </span>  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}