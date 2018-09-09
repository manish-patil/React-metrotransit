export default function addSutractReducer(state = { result: 0 }, action) {
    if (action.type === "ADD") {
        return { ...state, result: action.payload };
    } else if (action.type === "SUBTRACT") {
        return { ...state, result: action.payload };
    } else {
        return state
    }
}