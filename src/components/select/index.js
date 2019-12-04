import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export const SelectComponent = ({ options, onChange, defaultValue }) => (
	<FormControl>
		<Select onChange={onChange} native defaultValue={defaultValue}>
			{options.map((option, index) => <option key={index} value={option.value} label={option.label} />)}
		</Select>
	</FormControl>
);
