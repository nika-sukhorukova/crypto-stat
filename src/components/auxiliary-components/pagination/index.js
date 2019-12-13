import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

export const Pagination = ({ onClick, limit, total, offset }) => {
	const useStyles = makeStyles({
		root: {

		},
		tr: {
			'&:hover': {
			  background: "#e1f5fe",
			}
		}
	  });
	const classes = useStyles();  

	const currentPage = offset / limit;
	const lastPage = Math.floor(total / limit);
	let buttons = [];

	if (currentPage < 3) {
		buttons = [ 0, 1, 2, 3, 4 ];
	} else if (currentPage > lastPage -3) {
		buttons = [ lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage ];
	} else {
		buttons = [ currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2 ];
	}
	return (
		<div className="pagination">
			<Button className={classes.tr} onClick={(event) => onClick(event, 'first')} disabled={currentPage === 0}>
				first
			</Button>
			<Button className={classes.tr} onClick={(event) => onClick(event, 'prev')} disabled={currentPage === 0}>
				prev
			</Button>
			{buttons.map((button) => (
				<Button  className={classes.tr} key={button} onClick={(event) => onClick(event, button)} disabled={currentPage === button}>
					{button +1}
				</Button>
			))}
			<Button className={classes.tr} onClick={(event) => onClick(event, 'next')} disabled={currentPage === lastPage}>
				next
			</Button>
			<Button className={classes.tr} onClick={(event) => onClick(event, 'last')} disabled={currentPage === lastPage}>
				last
			</Button>
		</div>
	);
};
