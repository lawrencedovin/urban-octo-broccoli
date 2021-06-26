let movies = ['Amadeus', 'Alien', 'Arrival'];

const MovieList = () => {
	return (
		<ul>
			{movies.map(movie => <li>{movie}</li>)}
		</ul>
	)
};

// const MovieList = () => {
// 	return (
// 		<ul>
// 			<li>Amadeus</li>
// 			<li>Alien</li>
// 			<li>Arrival</li>
// 		</ul>
// 	);
// };


// Nests MovieList Component inside the App component
const App = () => {
	return (
		<div>
			<h1>App Component!</h1>
			<MovieList />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

