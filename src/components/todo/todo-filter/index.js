import React from 'react';
import './style.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



const FILTER_BTN = [
    {
        text: 'all',
        id: 'all'
    },
    {
        text: 'active',
        id: 'active'
    },
    {
        text: 'completed',
        id: 'completed'
    }

];

export default ({ amount, changeFilter }) =>
    <div className='filter'>
        <span className='amount'>{amount} taks left</span>
        <Grid item>
            <ButtonGroup>
                {FILTER_BTN.map(({ text, id }) => (
                    <Button variant="contained" style={{ backgroundColor: '#b3e5fc', width: '120px' }}
                        key={id}
                        onClick={() => { changeFilter(id) }}
                    >{text}</Button>
                ))}
            </ButtonGroup>
        </Grid>
    </div>


