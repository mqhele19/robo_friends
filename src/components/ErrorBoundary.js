import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/*property*/
			hasError:false

		}
	}
 

/*how will we be able to change hasError? use a lifecylce hook*/
componentDidCatch(error, info) {

this.setState({ hasError: true})
/*if that is true we will render the h1 tag*/
}

/**we can wrap a component with the error boundary component* e.g the cardlist component 
if itfails we can catch it with an ErrorBoundary*/
render() {
	/*the first thing we want o check is if the state holds true
	i.e if there is an erro we want to display something gracefully to the user
	that makes itmeaningful for them*/
	if (this.state.hasError) {
		return <h1> Ooooops. That is not good</h1>

	}
	return this.props.children
	/*remember children will be anything that's between error boundary in this case CardList */
}
}

export default ErrorBoundary;