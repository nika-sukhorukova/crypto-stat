import React from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

export const Pagination = ({ onClick, limit, total, offset }) => {
	const currentPage = offset / limit;
	const lastPage = Math.ceil(total / limit);
	let buttons = [];

	if (currentPage < 3) {
		buttons = [ 1, 2, 3, 4, 5 ];
	} else if (currentPage >= lastPage || currentPage === lastPage +1) {
		buttons = [ lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage ];
	} else {
		buttons = [ currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2 ];
	}
	return (
		<div className="pagination">
			<Button onClick={(event) => onClick(event, 'first')} disabled={currentPage === 0}>
				first
			</Button>
			<Button onClick={(event) => onClick(event, 'prev')} disabled={currentPage === 0}>
				prev
			</Button>
			{buttons.map((button) => (
				<Button key={button} onClick={(event) => onClick(event, button)} disabled={currentPage === button}>
					{button}
				</Button>
			))}
			<Button onClick={(event) => onClick(event, 'next')} disabled={currentPage >= lastPage}>
				next
			</Button>
			<Button onClick={(event) => onClick(event, 'last')} disabled={currentPage >= lastPage}>
				last
			</Button>
		</div>
	);
};
