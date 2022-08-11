import React from 'react';
import { Col, Row } from "antd";
import { DatePicker, Space } from "antd";
import "./FindTicket.css"

export default function FindTicket() {
    return(
    <Col span={8}>
        <div className="Slider">
            <div className='Content__slider'>
                <h1 className='Bold-24'>Lọc vé</h1>
            </div>

            <div className="Status__ticket">
                <h3 className='Semibold-16'>Tình trạng đổi soát</h3>

                <div className="Status">
                    <div class="radio">
                        <input id="radio-1" name="radio" type="radio" checked />
                        <label for="radio-1" class="radio-label">Tất cả</label>
                    </div>
                    <div class="radio">
                        <input id="radio-2" name="radio" type="radio" checked />
                        <label  for="radio-2" class="radio-label">Đã chốt soát</label>
                    </div>

                    <div class="radio">
                        <input id="radio-3" name="radio" type="radio" checked />
                        <label for="radio-3" class="radio-label">Chưa chốt soát</label>
                    </div>
                </div>
            </div>

            <div className="Classify">
                <div className="Classify__Content">
                    <h3 className='Semibold-16'>Loại vé</h3>
                    <h4 className='Classify__sub Text-14'>Vé cổng</h4>
                </div>
            </div>
               
            <div className="Time">
                <div className="Time__from">
                    <h3 className='Semibold-16'>Từ ngày</h3>

                    <Space direction="vertical">
                        <DatePicker
                            dateRender={(current) => {
                                const style = {};

                                if (current.date() === 1) {
                                    style.border = "1px solid #1890ff";
                                    style.borderRadius = "50%";
                                }

                                return (
                                <div className="ant-picker-cell-inner" style={style}>
                                    {current.date()}
                                </div>
                                );
                            }}
                        />
                    </Space>
                </div>
                
                <div className="Time__to">
                    <h3 className='Semibold-16'>Đến ngày</h3>

                    <Space direction="vertical" size={12}>
                        <DatePicker
                            dateRender={(current) => {
                                const style = {};

                                if (current.date() === 1) {
                                style.border = "1px solid #1890ff";
                                style.borderRadius = "50%";
                                }

                                return (
                                <div className="ant-picker-cell-inner" style={style}>
                                    {current.date()}
                                </div>
                                );
                            }}
                        />
                    </Space>
                </div> 
            </div>

            <div className='Find__btn'>
                <button className="Find__btn--btn"> <span className='Bold-18'>Lọc</span> </button>
            </div>
        </div>       
    </Col>
    )
}