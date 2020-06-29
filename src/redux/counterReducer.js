const counterReducer = (state = 0, action) => {
    let count = state;
    switch(action.type) {
        case "ADD1":
            count + 1;
        case "REMOVE1":
            count - 1;
        case "ADD10":
            count + 10;
        case "REMOVE10":
            count - 10;
        case "RESET":
            return count = 0;
        default:
            return state;
    }
};

export default counterReducer;