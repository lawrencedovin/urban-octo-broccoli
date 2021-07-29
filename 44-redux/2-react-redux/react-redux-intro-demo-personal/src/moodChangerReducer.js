const INITIAL_STATE = {mood: ''};

const moodChangerReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'HAPPY':
            return {...state, mood: 'o͡͡͡╮། ❛ั ╭ ͟ʖ╮ ❛ั །╭o͡͡͡'};
        case 'SAD':
            return {...state, mood: '໒( ಥ Ĺ̯ ಥ )७'};
        case 'ANGRY':
            return {...state, mood: '(ノ͡° ͜ʖ ͡°)ノ︵┻┻'};
        case 'CONFUSED':
            return {...state, mood: '(ʘ言ʘ╬)'}
        default:
            return state;
    }
}

export default moodChangerReducer;