import React, { useEffect, useRef, useState} from 'react'
import { DatePicker, Space, Select, TimePicker } from 'antd';
import "../Modal/ModalSetting.css"
import "./ModalDataSetting.css"


const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

function ModalDataSetting( {onClose} ) {

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

  const [type, setType] = useState('time')

  return (
    <div className='Modal'>
        <div className="Modal__container--setting" ref={modalRef}>
        <div className="Modal__body">
              <div className="Title">
                <h1 className='Bold-24'>Cập nhật thông tin gói vé</h1>
              </div>

              <div className="Content__modal--update">
                <div className="Update__ticket">
                    <div className="Event__code">
                      <h3 className='Semibold-16 Text__edit'>Mã sự kiện <span className='end Semibold-16'>*</span></h3>
                      <div className="Input__text--update">
                        <input type="text" name='text' placeholder='PKG20210502'/>
                      </div>
                    </div>
                    <div className="Event__name">
                      <h3 className='Semibold-16 Text__edit'>Tên sự kiện <span className='end Semibold-16'>*</span></h3>
                      <div className="Input__text--update">
                        <input type="text" name='text' placeholder='Hội chợ triển lãm hàng tiêu dùng 2021'/>
                      </div>
                    </div>
                </div>

                <div className="Group__date">
                  <div className="Application__date">
                  <h3 className='Semibold-16 Text__edit'>Ngày áp dụng</h3>
                  <Space>
                    <DatePicker className='date-picker' placeholder='01/04/2021' />
                    <PickerWithType type={type} onChange={(value) => console.log(value)} placeholder="hh:mm:ss" />
                  </Space>
                  </div>

                  <div className="Expiration__date">
                    <h3 className='Semibold-16 Text__edit'>Ngày hết hạn</h3>
                      <Space>
                        <DatePicker className='date-picker' placeholder='01/04/2021' />
                        <PickerWithType type={type} onChange={(value) => console.log(value)} placeholder="hh:mm:ss" />
                      </Space>
                  </div>
                </div> 

                <div className="Price__ticket">
                  <h3 className='Semibold-16 Text__edit'>Giá vé áp dụng</h3>

                  <div className="Check__group">
                    <div className="Check__ticket__price">
                      <input type="checkbox" name="check" className="checkbox__price" />
                      <label htmlFor="" className='check__label'>Vé lẻ (vnđ/vé) với giá</label>
                      <input type="text" name="text" id="price__number" placeholder='Giá vé'/>
                      <label htmlFor="" className='Label__text'>/ vé</label>
                    </div>

                    <div className="Check__ticket__price">
                      <input type="checkbox" name="check" className="checkbox__price" />
                      <label htmlFor="" className='check__label'>Combo vé với giá</label>
                      <input type="text" name="text" id="price__number_1" placeholder='Giá vé'/>
                      <span className='Label__text'>/</span>
                      <input type="text" name="text" id="price__number_2" placeholder='Giá vé'/>
                      <label htmlFor="" className='Label__text'>/ vé</label>
                    </div>
                  </div>

                  <div className="Apply__status">
                    <h3 className='Semibold-16 Text__edit'>Tình trạng</h3>
                    
                    <div className="Custom__select">
                      <select name="Select" id="Select">
                        <option value="0">Đang áp dụng</option>
                        <option value="1">Chưa áp dụng</option>
                      </select>
                    </div>
                  </div>

                  <div className="Notify"> 
                    <span className='end Semibold-16'>*</span><p className='Notify__end Notify__text'> là thông tin bắt buộc</p>
                  </div>

                  <div className="Modal__button">
                    <button className='Cancel__btn Bold-18' onClick={() => onClose(false)}>Hủy</button>
                    <button className='Save__btn Bold-18'>Lưu</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ModalDataSetting