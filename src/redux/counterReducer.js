const counterReducer = (state = 0, action) => {
    let count = state;
    switch(action.type) {
        case "ADD":
            count += 1;
            return count;
        case "REMOVE":
            count -= 1;
            return count;
        default:
            return state;
    }
};

export default counterReducer;