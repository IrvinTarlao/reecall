import React from 'react';
import * as style from '../styles';
import Moment from 'react-moment';
import { Row, Col } from 'reactstrap';


const Bubble = ({ message, colorReply }) => {

    const getAttachColor = (a) => {
        if (a.includes('.psd')) return "#7D79FF"
        else if (a.includes('.doc')) return "#FE9D46"
    }

    const getChars = (str) => {
        const name = [];
        const ext = [];
        const arr = str.split('')
        for (let index = 0; index < arr.length; index++) {
            if (index < arr.length - 3 && arr[index] !== ".") name.push(arr[index])
            else if (arr[index] !== ".") ext.push(arr[index])
        }
        return [name.join(''), ext.join('').toUpperCase()];
    }

    const attachStyle = { backgroundColor: style.bubbleColor, padding: "10px", margin: "10px", borderRadius: "10px", display: 'flex', fontSize: '0.9em', alignItems: 'center', color: style.nameColor }


    return (
        <div>
            <Row style={{ display: 'flex', alignItems: 'flex-end', margin:"5px"}}>
                <Col xs={1} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    {message.attachments.length === 0 && <img className="d-none d-md-block" src={message.avatar} alt="avatar" style={{ borderRadius: "50%", height: "60px" }}></img>}
                </Col>
                <Col xs={10} md={8} style={{ display: 'flex', justifyContent: 'center', fontSize: '0.9em' }}>
                    <div style={{ width: "100%", padding: "30px", backgroundColor: colorReply || style.bubbleColor, textAlign: 'left', borderRadius: '10px', color: style.nameColor }}>{message.message}</div>
                </Col>
                <Col xs={1} md={2} style={{ display: 'flex', justifyContent: 'center', fontSize: '0.8em' }}>
                    <Moment format="HH:MM">
                        {message.time}
                    </Moment>
                </Col>
            </Row>
            {message.attachments.length > 0 &&
                <Row style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Col xs={1} md={2} style={{  display: 'flex', justifyContent: 'center' }}>
                        <img className="d-none d-md-block" src={message.avatar} alt="avatar" style={{ borderRadius: "50%", height: "60px" }}></img>
                    </Col>
                    <Col xs={10} md={8} style={{ display: 'flex', justifyContent: 'flex-start', fontSize: '0.9em' }}>
                        {message.attachments.map((a, i) =>
                            <div key={'attach' + i} style={attachStyle}>
                                <div style={{ backgroundColor: getAttachColor(a), width: "40px", height: "40px", borderRadius: "5px", marginRight: "10px", display: 'flex', justifyContent: 'center', alignItems: 'center', color: style.displayMsgColor, fontWeight: "bold" }}>{getChars(a)[1]}</div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontWeight: 'bold' }}>{getChars(a)[0]}</div>
                                    <div>{getChars(a)[1]}</div>
                                </div>
                                <i style={{ marginLeft: "30px" }} className="fas fa-download"></i>
                            </div>)}
                    </Col>
                    <Col xs={1} md={2} style={{ display: 'flex', justifyContent: 'center', fontSize: '0.8em' }}>
                        
                    </Col>
                </Row>
            }
            

        </div>


    );
};

export default Bubble;