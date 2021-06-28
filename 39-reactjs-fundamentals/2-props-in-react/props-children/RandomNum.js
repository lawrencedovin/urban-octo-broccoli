const RandomNum = () => {
    const rand = Math.floor(Math.random() * 10) + 1;
    return (
            <div>
                <p>{rand} years old!</p>
            </div>
            );
}