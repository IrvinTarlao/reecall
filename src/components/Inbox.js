import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import InboxPreview from './InboxPreview';

const Inbox = ({inbox}) => {
    const inboxStyle = {height: "100%", backgroundColor : "purple", color: "white", padding:0, margin:0};
    console.log(inbox)
    return (
        <Row style={inboxStyle}>
            <Col md={4} xs={12} className="no-pm" style={{height:"100%", backgroundColor:"#EDF0F7"}}>
                <InboxPreview inbox={inbox}/>
            </Col>
            <Col md={8} xs={12} className="no-pm">
                <div style={{width:"100%", height:"100%", backgroundColor:"lightblue"}}></div>
            </Col>
            



        </Row>
    );
}

const mapStateToProps = state => ({
    inbox: state.inbox
  })

export default connect(mapStateToProps)(Inbox);