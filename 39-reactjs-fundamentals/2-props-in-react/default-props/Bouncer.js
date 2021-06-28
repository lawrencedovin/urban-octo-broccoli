const Bouncer = (props) => {
    let canEnter = props.age > 18 ? 'you can enter' : 'you cannot enter';
    let canDrink = props.age >= 21 ? ' and you can drink' : ' and you cannot drink';
    let bouncerSpeak = canEnter + canDrink;
    return (
        <p>Mr. Bubbles said: you are {props.age} years old, {bouncerSpeak}</p>
    );
};