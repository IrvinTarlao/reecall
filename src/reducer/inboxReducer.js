import {messages }from '../data.js'

export default function inboxReducer(state = messages, action) {
    switch (action.type) {
        case 'INBOX':
            return action.type;
        case 'SENT':
            return action.type;
        default:
            return state
    }
}