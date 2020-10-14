import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
import Inbox from './components/Inbox';
import Sent from './components/Sent';
import './App.css';

const App = ({dispatch, display}) => {

  const [showSidebar, setShowSidebar] = useState(true);

  const containerStyle = { border: "2px solid blue", padding: 0, width: "100vw", height: "100vh", display:"flex", flexWrap: "nowrap"};
  const buttonStyle = {position: "absolute", margin: "20px", border: "2px solid green", zIndex: 1};
  const sideContainerStyle = { height: "100%", padding: 0, border: "2px solid orange" };
  const displayStyle = { height: "100%", border: "2px solid red", padding: 0}

  const displayComponent = () => {
    switch (display) {
      case "INBOX":
        return <Inbox/>;    
      case "SENT":
        return <Sent />;    
      default:
        break;
    }
  }

  
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={()=>setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
      <Row className="no-pm" style={{ height: "100%", border: "2px solid green"}}>
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

const mapStateToProps = state => ({
  display: state.display,
})

export default connect(mapStateToProps)(App);
