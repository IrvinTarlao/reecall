import React from 'react';
import * as style from '../styles';



const Reply = ({ message }) => {

    const iconStyle={marginRight:"15px", fontSize:"1.5em", color: style.regularTextColor}

    return (
        <div>
            <div style={{ width: "100%", display: 'flex', alignItems: "flex-end", justifyContent: "center", padding: "25px" }}>
                <div style={{ width: "80%", padding: "30px 30px 0", minHeight: "150px", border: `2px solid ${style.outlineColor}`, textAlign: 'left', borderRadius: '10px', color: style.nameColor, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <input type="text" placeholder="Type your reply here" style={{ border: "none", color: style.nameColor, outline: "none", boxShadow: "none", width: "100%", fontSize: "0.8em"}}></input>
                    <div style={{ width: '100%', borderTop: `1px solid ${style.outlineColor}`, padding:"10px 0", display:'flex', fontWeight: 'bold', fontSize:"0.8em", justifyContent:'space-between', alignItems:"center"}}>
                        <div style={{display:"flex", alignItems:"center"}}>Subject:<div style={{marginLeft:"5px", color: style.purpleText}}>{message.subject}</div></div>
                        <div>
                            <i style={iconStyle} className="far fa-image"></i>
                            <i style={iconStyle} className="fas fa-paperclip"></i>
                            <button style={{backgroundColor: style.purpleText, color: style.displayMsgColor, border:'none', borderRadius: "8px", padding:"3px 15px", outline:'none'}}>Send</button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Reply;