import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import displayReducer from '../reducer/displayReducer';
import inboxReducer from '../reducer/inboxReducer';

export default configureStore({
  reducer: {
    display: displayReducer,
    inbox: inboxReducer,
  },
});
