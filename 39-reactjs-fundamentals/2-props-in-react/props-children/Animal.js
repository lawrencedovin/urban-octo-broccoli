const Animal = ({emoji="🦊", name="Onyx", species="Fox", isCute=false}) => {
    return (
        <ul>
            <li>Emoji: {emoji}</li>
            <li>Name: {name}</li>
            <li>Species: {species}</li>
            <li>isCute: {isCute ? "✅" : "❌"}</li>
        </ul>
    );
};