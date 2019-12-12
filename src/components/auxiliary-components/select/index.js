import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './style.css';

export const SelectComponent = ({ options, onChange, defaultValue }) => {
	const StyledSelect = withStyles({
		root: {
		  height: 20,
		  width: 87,
		},
		focuse: {
			"&:focuse": {
			  backgroundColor: 'white'
			}
		}
	  })(Select);
	const useStyles = makeStyles(theme => ({
		margin: {
		  margin: theme.spacing(1),
		},
		focus: {
			"&:focus": {
			  backgroundColor: 'white'
			}
		}
	  }));
	const classes = useStyles();
return(
	<FormControl variant='outlined' className={classes.margin}>
		<StyledSelect className={classes.focus} onChange={onChange} native defaultValue={defaultValue}>
			{options.map((option, index) => <option className='select_options' key={index} value={option.value} label={option.label} />)}
		</StyledSelect>
	</FormControl>
)};
