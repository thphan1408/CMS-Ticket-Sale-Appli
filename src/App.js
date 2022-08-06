import "./App.css";
import Home from "./component/Home/Home";
import Menu from "./component/Home/Menu";
import Header from "./component/Layout/Header";
import Manage from "./component/Manage/Manage"
import { Route, Routes } from 'react-router-dom';


import "antd/dist/antd.css";
import { Col, Row } from "antd";

const App = () => (
  <div className="container">
    <Row>
      <Col span={4}>
        <Menu />
      </Col>
    
    
      <Col span={20}>
        <Header />
        <Routes> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/manage" element={<Manage />} /> 
        </Routes>
      </Col>

      
    </Row>
  </div>
);

export default App;
