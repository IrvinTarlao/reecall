import {messages}from '../data.js'

export default function inboxReducer(state = messages, action) {
    switch (action.type) {
        case 'CLICK':
            return {...state, id: action.id};
        default:
            return {messages: state, id: null}
    }
}