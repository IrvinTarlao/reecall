import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import InboxPreview from './InboxPreview';
import Message from './Message';

const Inbox = ({ inbox }) => {
    console.log(inbox)
    const show = inbox.id || 0;
    const inboxStyle = { height: "100%", color: "white", padding: 0, margin: 0 };
    return (
        <Row style={inboxStyle}>
            <Col md={4} xs={12} className={inbox.id !== null ? "d-none d-sm-block no-pm" : "no-pm"} style={{ height: "100%", backgroundColor: "#EDF0F7" }}>
                <InboxPreview />
            </Col>
            <Col md={8} xs={12} className="no-pm">
                {inbox.messages.length > 0 && inbox.messages.map((message) => {if (show === message.id) return <Message message={message} key={'message'+message.id}/>})}
            </Col>
        </Row>
    );
}

const mapStateToProps = state => ({
    inbox: state.inbox
})

export default connect(mapStateToProps)(Inbox);