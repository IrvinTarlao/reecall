import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const MessagePreview = ({ message, isClicked, dispatch }) => {

    const cardStyle = { backgroundColor: isClicked ? "#FDFEFE" : "#EDF0F7", padding: "20px", height: "150px", fontSize: "0.9em", borderLeft: "4px solid #E0E5EA", borderRight: isClicked ? "4px solid #FDFEFE" : "4px solid #E0E5EA", width: "100%" };
    const innerCardStyle = { display: "flex", justifyContent: "space-between", alignItems: "center" };
    const topStyle = { color: "#424142", fontWeight: "bold", display:'flex', alignItems: "center" };
    const bottomStyle = { paddingLeft: "16px", marginTop: "5px"};
    const subjectStyle = { color: "#929397", fontWeight: "bold", marginBottom: "10px"};
    const messageStyle = { color: "#B9BCBF", maxHeight: "40px", overflow: "hidden", width: "100%" };
    const attachStyle = {borderRadius: "8px", marginRight: "10px", padding: "8px", fontSize: "0.8em", fontWeight:"bold"};
    const iconStyle = { marginLeft: "7px", fontSize: "1em", color: "#FFB304" };
    const newStyle = {marginLeft: "7px", color: '#3D58D1', fontSize: "0.8em", fontWeight:"bold"};

    const getCardColor = (cat) => {
        switch (cat) {
            case 'family':
                return '#25BC81'

            default:
                break;
        }
    }

    const getAttachColor = (a) => {
        if (a.includes('.psd')) return ['#F4EFFD', '#AB94DD']
        else if (a.includes('.doc')) return ['#F9E5D1', '#C39370']
    }

    return (
        <div style={cardStyle} onClick={() => dispatch({ type: 'CLICK', id: message.id })}>
            <div style={innerCardStyle}>
                <div style={{ backgroundColor: getCardColor(message.cat), borderRadius: "50%", width: "8px", height: '7px', marginRight: "8px" }}></div>
                <div style={{ ...innerCardStyle, width: "100%" }}>
                    <div style={topStyle}>
                        {message.from}
                        {message.starred && <i style={iconStyle} className="fas fa-star"></i>}
                        {message.new && <div style={newStyle}>NEW</div>}
                    </div>
                    <div style={{ color: "#C1C4C7" }}><Moment from={Date.now()}>{message.time}</Moment></div>
                </div>
            </div>
            <div style={bottomStyle}>
                <div style={subjectStyle}>{message.subject}</div>
                {message.attachments.length > 0 ?
                    <div style={{ width: "100%", display:'flex'}}>
                        {message.attachments.map((a)=><div style={{...attachStyle, backgroundColor: getAttachColor(a)[0], color: getAttachColor(a)[1]}}>{a}</div>)}
                    </div>
                    :
                    <div style={messageStyle}>{message.message}</div>
                }
            </div>


            {/*             
            <div>{message.starred}</div>
            <div>{message.attachments}</div> */}
        </div>
    )
}

export default connect()(MessagePreview);