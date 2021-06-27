const App = () => {
	return (
		<div>
			<Animal emoji="🐧" name="Jerry" species="Penguin" />
			<Animal emoji="🐱‍👤" name="Pringles" species="Cat" />
			<Animal emoji="🐱" species="Cat" />
			<Animal />
			<RandomChoice choices = {['green', 'blue', 'red']}/>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));