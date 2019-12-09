import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './style.css'

export const InputForm = ({ onChange, onClick }) => (
    <div className='input_form'>
        <FormControl>
            <InputLabel>Limit</InputLabel>
            <Input className='input-text' onChange={onChange}></Input>
        </FormControl>
        <Button onClick={onClick} variant="contained">Submit</Button>
    </div>
);