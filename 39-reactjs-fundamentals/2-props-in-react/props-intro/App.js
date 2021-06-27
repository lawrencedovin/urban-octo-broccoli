const App = () => {
	return (
		<div>
			<Animal emoji="🐧" name="Jerry" species="Penguin" />
			<Animal emoji="🐱‍👤" name="Pringles" species="Cat" />
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));