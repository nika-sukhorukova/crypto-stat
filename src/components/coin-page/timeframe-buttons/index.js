import React from 'react';
import Button from '@material-ui/core/Button';

export const TimeFrameDisplay = ({onClick}) =>{
    const timeFrameOptions = ['24h', '7d', '30d', '1y', '5y'];
    return(
        timeFrameOptions.map((timeOption, i) =>(
            <Button key={i} onClick={(event) => onClick(event, timeOption)}>{timeOption}</Button>
            )
        )
)};