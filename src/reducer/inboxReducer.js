import {messages} from '../data.js'
const sorted = messages.sort((a, b) => a.time > b.time ? -1 : 1);

export default function inboxReducer(state = sorted, action) {
    switch (action.type) {
        case 'CLICK':
            return {...state, id: action.id};
        case 'SEARCH':
            return {...state, value: action.value};
        default:
            return {messages: state, id: null}
    }
}