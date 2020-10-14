import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap'
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSideBar, setShowSideBar] = useState(windowWidth > 780 ? true : false);
  const [count, setCount] = useState(0);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
    setCount(count + 1)
  };

  const displaySideBar = () => {
    if (windowWidth > 780) {
      if (count === 0) {
        return "sidebar-fixed-desktop"
      } else if (showSideBar === true) {
        return "sidebar-slide-right"
      }
      else return "sidebar-slide-left"
    }
    else if (windowWidth < 780) {
      if (count === 0) {
        return "sidebar-display-none"
      }
      else if (showSideBar === true) {
        return "sidebar-slide-right"
      }
      else return "sidebar-slide-left"
    }
  }

  return (
    <div class="App container-fluid h-100" style={{ border: "2px solid red" }}>
      <Row style={{ height: "100%", border: "2px solid green" }}>
        <Col className="no-padding" md={{ size: 'auto' }} style={{ height: "100%"}}>
          <div className={displaySideBar()} style={{ width: "200px", height: "100%" }}>
            <Sidebar />
          </div>
        </Col>
        <Col className="no-padding"></Col>
      </Row>

    </div>

  );
}

export default App;
