import React, { useState } from "react"
import search from "../../assets/icons/Search.svg";
import "./Setting.css"
import DataSetting from "./DataSetting";
import ModalSetting from "./Modal/ModalSetting";

export default function CheckTicket() {
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="Container">
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
                        <button className='Add__Ticket__btn Bold-18' onClick={() => setOpenModal(true)}> Thêm gói vé</button>
                    </div>
                </div>
                <DataSetting />

                { openModal && <ModalSetting onClose={() => setOpenModal(false)}/>}
        </div>
    )
}