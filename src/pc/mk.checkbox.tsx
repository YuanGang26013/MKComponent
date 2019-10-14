import * as React from "react";
import * as PropTypes from 'prop-types';
import "../css/mk-checkbox.scss"

const MKCheckBox = (props) => {

    if ( !props.id ) {
        console.error('MKCheckBox 必须设置id属性');
        return <></>;
    }

    return (
        <div className="mk-checkbox-container">
            <input type="checkbox" id={props.id} className="mk-checkbox" defaultChecked={props.checked}/>
            <label htmlFor={props.id} className="mk-checkbox-label">
                <svg viewBox="-9 -9 43 35.191" width="18" height="18" className="mk-checkbox-svg">
                    <path className="mk-checkbox-checked" d="M 0 9 Q 8 17 8 17 Q 8 17 25 0" fill="none" strokeWidth="6"
                          strokeLinecap="round"/>
                </svg>
                {props.text}
            </label>
        </div>
    )
};

MKCheckBox.propTypes = {
    checked : PropTypes.bool,
    id      : PropTypes.string.isRequired,
    text    : PropTypes.string
};

export default MKCheckBox;