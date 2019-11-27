import React from 'react';

export const InputForm = ({ onChange, onClick }) => (
    <form>
        <input onChange={onChange}></input>
        <button onClick={onClick}>Limit</button>
    </form>
);