import React from 'react';

class ErrorBoundary extends React.Component {
	state = {
		hasError: false
	};
	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<p>Eror</p>
				</div>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
