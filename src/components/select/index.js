import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export const SelectComponent = ({ options, onChange, defaultValue }) => (
    <FormControl>
        <select onChange={onChange} defaultValue={defaultValue}>
            {options.map((option, index) => (
                <option key={index} value={option.value} label={option.label}></option>
            ))}
        </select>
    </FormControl>
)