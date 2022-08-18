import React, { useState ,useEffect, useRef }from 'react';
import { DatePicker, Space } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import "./Modal.css"
import "../../../App.css"

function Modal( {onClose} ) {
  const modalRef = useRef();

  useEffect(()=>{
    const clickOutSide = (e) =>{
      if(modalRef.current && !modalRef.current.contains(e.target)){
        onClose();
      }
    };

    document.addEventListener("mousedown", clickOutSide)

    return() => {
      document.removeEventListener("mousedown", clickOutSide)
    }
  }, [onClose]);


  const [disabled, setDisabled] = useState(false);
  const clickDisabled = () => {
    setDisabled(!disabled);
  }
  return (
      <div className="Modal">
        <div className="Modal__container" ref={modalRef}>
            <div className="Modal__body">
                <h1 className='Title Bold-24'>Lọc vé</h1>
                
                <div className="Date__form">
                  <div className="Date__from">
                    <h3 className='Semibold-16'>Từ ngày</h3>

                    <Space direction="vertical">
                      <DatePicker className='date-picker' placeholder='01/04/2021' />
                    </Space>
                  </div>

                  <div className="Date__to">
                    <h3 className='Semibold-16'>Đến ngày</h3>

                    <Space direction="vertical">
                      <DatePicker className='date-picker' placeholder='01/04/2021' />
                    </Space>
                  </div>
                </div>

                <div className="Status__use">
                  <h3 className='Semibold-16'>Tình trạng sử dụng</h3>

                  <div className="Status__use--modal">
                    <div class="Radio__status">
                      <input id="radio-1" name="radio" type="radio" checked />
                      <label for="radio-1" class="radio-label">Tất cả</label>
                    </div>

                    <div class="Radio__status">
                      <input id="radio-2" name="radio" type="radio" checked />
                      <label  for="radio-2" class="radio-label">Đã sử dụng</label>
                     </div>

                    <div class="Radio__status">
                      <input id="radio-3" name="radio" type="radio" checked />
                      <label for="radio-3" class="radio-label">Chưa sử dụng</label>
                    </div>
                    
                    <div class="Radio__status">
                      <input id="radio-4" name="radio" type="radio" checked />
                      <label for="radio-4" class="radio-label">Hết hạn</label>
                    </div>
                  </div>
                </div>
                
                {/* <div className="Gate__check-in">
                  <h3 className='Semibold-16'>Cổng Check - in</h3>

                <div className="Check__group">
                  <div className="Check">
                  <Row>
                    <Col span={8}>
                      <div class="Checkbox__check-in">
                        <label class="Title">Tất cả
                          <input type="checkbox" onChange={clickDisabled}/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </Col>

                    <Col span={8}>
                      <div class="Checkbox__check-in">
                      <label class="Title">One
                          <input type="checkbox" disabled={disabled}/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </Col>

                    <Col span={8}>
                      <div class="Checkbox__check-in">
                      <label class="Title">One
                          <input type="checkbox" disabled={disabled}/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </Col>

                    <Col span={8}>
                      <div class="Checkbox__check-in">
                      <label class="Title">One
                          <input type="checkbox" disabled={disabled}/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </Col>

                    <Col span={8}>
                      <div class="Checkbox__check-in">
                      <label class="Title">One
                          <input type="checkbox" disabled={disabled}/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </Col>

                    <Col span={8}>
                      <div class="Checkbox__check-in">
                      <label class="Title">One
                          <input type="checkbox" disabled={disabled}/>
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  </div>
                </div>
  
    
           </div> */}

                <button className="Modal__btn">Lọc</button>
            </div>
        </div>
    </div>
  )
}

export default Modal