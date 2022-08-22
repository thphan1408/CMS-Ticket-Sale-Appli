import React, { useEffect, useRef }from 'react';
import { DatePicker, Space } from 'antd';

import "./ModalEvent.css"

function ModalEvent({onClose}) {
    const modalEventRef = useRef();

    useEffect(()=>{
      const clickOutSide = (e) =>{
        if(modalEventRef.current && !modalEventRef.current.contains(e.target)){
          onClose();
        }
      };
  
      document.addEventListener("mousedown", clickOutSide)
  
      return() => {
        document.removeEventListener("mousedown", clickOutSide)
      }
    }, [onClose]);

  return (
    <div className="Modal__event">
        <div className="Modal__container--event" ref={modalEventRef}>
            <header className='Header__modal--event'>
                <h1 className='Title__event'>
                    Đổi ngày sử dụng vé
                </h1>
            </header>

            <div className="Modal__body--event">
                <div className="Number__ticket--event">
                    <h3 className='Title__ticket--event Semibold-16'> Số vé </h3>
                    <h3 className='Num__ticket Medium-16'> PKG20210502 </h3>
                </div>

                <div className="Number__ticket--event">
                    <h3 className='Title__ticket--event Semibold-16'> Số vé </h3>
                    <h3 className='Num__ticket Medium-16'> Vé cổng - Gói sự kiện </h3>
                </div>

                <div className="Name__ticket--event">
                    <h3 className='Title__name--ticket Semibold-16'> Tên sự kiện </h3>
                    <h3 className='Name__ticket Medium-16'> Hội trợ triển lãm hàng tiêu dùng 2021 </h3>
                </div>

                <div className="Status__ticket--event">
                    <h3 className='Title__status--event Semibold-16'> Hạn sử dụng </h3>
                    <Space direction="vertical">
                      <DatePicker className='Date__event' placeholder='01/04/2021' />
                    </Space>
                </div>

            </div>
                <div className="Modal__button--event">
                    <button className='Cancel__btn Bold-18' onClick={() => onClose(false)}>Hủy</button>
                    <button className='Save__btn Bold-18'>Lưu</button>
                </div>
        </div>
    </div>
  )
}

export default ModalEvent