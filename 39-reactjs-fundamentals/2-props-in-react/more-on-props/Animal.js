const Animal = ({emoji="🦊", name="Onyx", species="Fox"}) => {
    return (
        <ul>
            <li>Emoji: {emoji}</li>
            <li>Name: {name}</li>
            <li>Species: {species}</li>
        </ul>
    );
}