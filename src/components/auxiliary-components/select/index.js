import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './style.css';

export const SelectComponent = ({ options, onChange, defaultValue }) => {
	const StyledSelect = withStyles({
		root: {
			height: 20,
			width: 87,
			padding: '8px 14px',
			'&:hover':  {
				background: "#e1f5fe !important",
			  },
			  '&:focus': {
				background: "#e1f5fe !important",
			},
			'&:active': {
				background: "#e1f5fe !important",
			},
		},
	})(Select);
	const StyledMenuItem = withStyles({
		root: {
			'&:hover':  {
				background: "#e1f5fe",
			  },
			'&:active': {
				background: "#e1f5fe !important",
			},
			'&:focus': {
				background: "#e1f5fe !important",
			}
		},
		selected: {
			'&:hover': {
				background: "#e1f5fe !important",
			},
			'&:active': {
				background: "#e1f5fe !important",
			},
			'&:focus': {
				background: "#e1f5fe !important",
			}
		}
	})(MenuItem);
	const useStyles = makeStyles((theme) => ({
		margin: {
			margin: theme.spacing(1)
		},
	}));
	const classes = useStyles();
	return (
		<FormControl variant="outlined" className={classes.margin}>
			<StyledSelect onChange={onChange}  value={defaultValue}>
				{options.map((option, index) => (
					<StyledMenuItem selected
					 classes={{ selected: classes.selected }} key={index} value={option.value} label={option.label}>
						{option.value}
					</StyledMenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};
