import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
import Inbox from './components/Inbox';
import './App.css';

const App = () => {

  const [showSidebar, setShowSidebar] = useState(true);
  const [component, setComponent] = useState("inbox");

  const containerStyle = { border: "2px solid blue", padding: 0, width: "100vw", height: "100vh", display:"flex", flexWrap: "nowrap"};
  const buttonStyle = {position: "absolute", margin: "20px", border: "2px solid green", zIndex: 1};
  const sideContainerStyle = { height: "100%", padding: 0, border: "2px solid orange" };
  const displayStyle = { height: "100%", border: "2px solid red", padding: 0}

  const displayComponent = () => {
    switch (component) {
      case "inbox":
        return <Inbox />
        break;
    
      default:
        break;
    }
  }

  
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={()=>setShowSidebar(!showSidebar)}><i class="fas fa-bars"></i></button>
      <Row style={{ height: "100%", padding: 0, margin: 0, width:"100%", border: "2px solid green"}}>
        <Col className={showSidebar ? "" : "d-none"}  md={2} sm={4} xs={6} style={sideContainerStyle}>

            <Sidebar />
          
        </Col>
        <Col md={showSidebar ? 10 : 12} sm={showSidebar ? 8 : 12} xs={showSidebar ? 6 : 12} style={displayStyle}>
          {displayComponent()}
        </Col>
      </Row>
    </div>

  );
}

export default App;
