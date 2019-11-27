import React from 'react';

export const Select = ({options, onChange}) => (
    <select onChange={onChange}>
        {options.map((option, index) =>(
            <option key={index} value={option.value} label={option.label}></option>
        ))}
    </select>
)