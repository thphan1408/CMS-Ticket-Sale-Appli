import { Route, Routes } from 'react-router-dom';
import "antd/dist/antd.css";
import { Col, Row } from "antd";

import "./App.css";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/Menu";
import Header from "./component/Layout/Header";
import Manage from "./component/Manage/Manage"
import CheckTicket from "./component/CheckTicket/CheckTicket";
import Setting from "./component/Setting/Setting";
import Footer from "./component/Footer/Footer"
// import ModalEvent from './component/Manage/ModalEvent';

const App = () => (
  <div className="container">
    <Row>
      <Col span={4}>
        <Menu />
        <Footer />
      </Col>
    
    
      <Col span={20}>
        <Header />
        
        <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} /> 
          <Route path="/manage" element={<Manage />} /> 
          <Route path="/checkticket" element={<CheckTicket />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/modalEvent" element={<ModalEvent />} /> */}
        </Routes>
      </Col>


    </Row>
  </div>
);

export default App;
