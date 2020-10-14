import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import * as style from '../styles';

const FilterPreview = ({ dispatch }) => {
    let input;
    const onKeyPress = (e) => {
        if (e.key === 'Enter' && input.value.length >= 1) {
            dispatch({ type: 'SEARCH', value: input.value })
            console.log(input.value)
        }
    }

    const onChange = () => {
        if (input.value.length >= 1) {
            dispatch({ type: 'SEARCH', value: null })
        }
    }

    return (
        <div style={{ padding: "36px" }}>
            <div style={{ width: "100%", height: "100px", display: 'flex', position: "relative", alignItems: "center" }}>
                <i className="fas fa-search" style={{ fontSize: "0.8em", color: style.regularTextColor, position: "absolute", left: "10px" }}></i>
                <input
                    className="input flex"
                    placeholder="Search"
                    ref={node => input = node}
                    onKeyPress={onKeyPress}
                    onChange={onChange}
                    style={{ border: `2px solid ${style.outlineColor}`, borderRadius: "8px", color: style.regularTextColor, outline: "none", boxShadow: "none", width: "100%", fontSize: "0.8em", padding: "10px 10px 10px 35px" }}
                />

            </div>

        </div>
    )
}

export default connect()(FilterPreview);