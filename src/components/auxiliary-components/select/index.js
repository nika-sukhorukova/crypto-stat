import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './style.css';

export const SelectComponent = ({ options, onChange, defaultValue }) => {
	const StyledSelect = withStyles({
		root: {
		  background: '#e1f5fe',
		  borderColor: '#e1f5fe',
		  height: 20,
		  width: 30,
		  padding: '10px 30px',
		},
	  })(Select);
	const useStyles = makeStyles(theme => ({
		margin: {
		  margin: theme.spacing(1),
		},
		padding: {
			padding: 2,
		}
	  }));
	const classes = useStyles();
return(
	<FormControl variant='outlined' className={classes.margin}>
		<StyledSelect className={classes.padding} onChange={onChange} native defaultValue={defaultValue}>
			{options.map((option, index) => <option className='select_options' key={index} value={option.value} label={option.label} />)}
		</StyledSelect>
	</FormControl>
)};
