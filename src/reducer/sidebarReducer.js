export default function displayReducer(state = "", action) {
    switch (action.type) {
        case 'SIDEBAR':
            return action.type;
        default:
            return state
    }
};