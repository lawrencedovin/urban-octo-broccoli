import { useSelector, useDispatch } from "react-redux";

const MoodChanger = () => {
    const mood = useSelector(state => state.mood);

    const dispatch = useDispatch();
    const happy = () => dispatch({type: 'HAPPY'});
    const sad = () => dispatch({type: 'SAD'});
    const angry = () => dispatch({type: 'ANGRY'});
    const confused = () => dispatch({type: 'CONFUSED'});

    return(
        <>
            <h1>
            ███╗░░░███╗░█████╗░░█████╗░██████╗░  ██████╗░██╗░█████╗░██╗░░██╗███████╗██████╗░
            ████╗░████║██╔══██╗██╔══██╗██╔══██╗  ██╔══██╗██║██╔══██╗██║░██╔╝██╔════╝██╔══██╗
            ██╔████╔██║██║░░██║██║░░██║██║░░██║  ██████╔╝██║██║░░╚═╝█████═╝░█████╗░░██████╔╝
            ██║╚██╔╝██║██║░░██║██║░░██║██║░░██║  ██╔═══╝░██║██║░░██╗██╔═██╗░██╔══╝░░██╔══██╗
            ██║░╚═╝░██║╚█████╔╝╚█████╔╝██████╔╝  ██║░░░░░██║╚█████╔╝██║░╚██╗███████╗██║░░██║
            </h1>
            <h2>{mood}</h2>
            <button onClick={happy}>HAPPY</button>
            <button onClick={sad}>SAD</button>
            <button onClick={angry}>ANGRY</button>
            <button onClick={confused}>CONFUSED</button>
        </>
    );
};

export default MoodChanger;