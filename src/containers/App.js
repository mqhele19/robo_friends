import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
/*in order for the CSS to work we have to import it*/
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';



class App extends Component {
	constructor() {
	super()
	this.state = {
		/*we have our app component that has two state
		searchfield and robots and bcoz App owns the state
		any component that has state uses the class syntax, so
		they can ue the constructor funct to create this.state and this state
		is what changes in an app, react then uses this state to render and pass them 
		down as props to this components which are pure functs. We manage the state
		in the constructor and the App is the only thing that can changethe state App can 
		pass down things as props so we pass onSearchChange to Searchbox*/
		robots: [],
	searchfield:''
	}

}
	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({robots: users}));
	}

/*everytime you create your own method on 
a componet use the syntax below it makes sure that
this.value is placed where it was created which is App*/
onSearchChange = (event) => {
	/*in order to update state*/
	this.setState({searchfield: event.target.value})
	
	


}

render() {
	/*we have now cmmctd e searcbox wt e app& we hav e searchfield changing
	now w nid 2 cmmct it to the filtered robots
	filtered robots can now be used as props instead of this.state.robots
	move filtered robots tothe render function, that gives us access to filtered
	robots*/

	/*passing search input to the robotslist*/
	/*destructuring*/
	const { robots, searchfield } = this.state;


	/*const filteredRobots = this.state.robots.filter(robot =>{*/
	const filteredRobots = robots.filter(robot =>{
		/*array has to written a condition and the condition is*/
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		/*return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());*/
	})

		if (!robots.length)
			/*if (robots.length === 0)*/
			/*if (this.state.robots.length === 0)*/
		 {
		 	return<h1>Loading...</h1>
		 } else{
		 	return (
	<div className='tc'>
	<h1>Robofriends</h1>
	<SearchBox searchChange={this.onSearchChange}/>
	{/*instead of passing this sate.robots we simply pass filtered robos*/}
	<Scroll>
	<ErrorBoundary>
	<CardList robots={filteredRobots}/>
	</ErrorBoundary>
	</Scroll>
	</div>
	);	
}

}

}
export default App;
