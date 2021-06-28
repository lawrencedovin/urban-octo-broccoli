const RandomChoice = (props) => {
    const idx = Math.floor(Math.random() * props.choices.length);
    const choice = props.choices[idx];
    return (
        <div>
            <h4>Random Choice is: {choice}</h4>
            <ul>
                {props.choices.map((choice) => <li>{choice}</li>)}
            </ul>
        </div>
    );
}