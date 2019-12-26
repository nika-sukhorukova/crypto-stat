import React from 'react';
import Button from '@material-ui/core/Button';

const timeFrameOptions = [ '24h', '7d', '30d', '1y', '5y' ];

export const TimeFrameDisplay = ({ onClick, timeframe }) => {
	return timeFrameOptions.map((timeOption, i) => (
		<Button key={i} disabled={timeOption === timeframe} onClick={(event) => onClick(event, timeOption)}>
			{timeOption}
		</Button>
	));
};
