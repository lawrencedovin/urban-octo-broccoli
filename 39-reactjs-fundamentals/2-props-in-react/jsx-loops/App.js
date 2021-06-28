const App = () => {
	return (
		<div>
			<Animal emoji="🐧" name="Jerry" species="Penguin" />
			<Animal emoji="🐱‍👤" name="Pringles" species="Cat" />
			<Animal emoji="🐱" species="Cat" isCute />
			<Animal />
			<RandomChoice choices = {['green', 'blue', 'red']}/>
			<Bouncer age={17} />
			<Bouncer age={19} />
			<Bouncer age={21} />
			<TodoList todos={["Walk Chickens", "Feed Chickens", "Eat Chickens"]}/>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));