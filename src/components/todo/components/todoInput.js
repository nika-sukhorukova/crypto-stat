import React from 'react';
import { init } from '../../dashboard/actions';
import { validate } from '@babel/types';


const ToDoInput = ({ value, onChange }) => {
     return(
     <div>
        <input
        onChange={onChange}
        value={value}>
        </input>
    </div>
    )
}


export default ToDoInput