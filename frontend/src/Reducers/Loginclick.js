//  handel login functions
const InitialState = ""
const loginclickreducer = (state = InitialState, action) => {
    switch (action.type) {
        case "logedin": return action.payload
        case "logedout": return null 
        default:return state;
    }
}

export default loginclickreducer;

