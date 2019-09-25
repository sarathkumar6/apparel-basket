import React from 'react';
import './form.input.component.styles.scss';

const FromInput = ({changeHandler, label, ...other}) => (
    <div className="form-input-group">
    { label ? (
        <label className={`${other.value.length ? 'shrink': ''} form-input-label`}>
        {label}
        </label>
        ) : null}
        <input  className="form-input"
                onChange={changeHandler}
                {...other}
                required>
        </input>
    </div>
)

export default FromInput;