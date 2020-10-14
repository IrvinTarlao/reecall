export default function displayReducer(state = "INBOX", action) {
    switch (action.type) {
        case 'INBOX':
            return action.type;
        case 'SENT':
            return action.type;
        default:
            return state
    }
}