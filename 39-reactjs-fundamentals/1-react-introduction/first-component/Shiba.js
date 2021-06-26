const Shiba = () => {
    return <img src="https://64.media.tumblr.com/5c8b54765481330a0be4ac7bcde192d5/tumblr_po3xo4muE41wjwprio1_1280.jpg" />
}

const App = () => {
	return (
		<div>
			<h1>Shiba!</h1>
			<Shiba />
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));