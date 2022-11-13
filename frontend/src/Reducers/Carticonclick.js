const Initialstate = false; 

const CarticonClickreducer = (state = Initialstate, action) => { 
    switch (action.type) {
        case "carticonclickon": return true; 
        case "carticonclickoff": return false;
        default: return state;
    }
}
export default CarticonClickreducer;