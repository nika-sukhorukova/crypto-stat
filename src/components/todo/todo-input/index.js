import React from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css'

export default ({ value, onChange, labelValue }) =>
    <div>
        <TextField
            label={labelValue}
            onChange={onChange}
            value={value}>
        </TextField>
    </div>



