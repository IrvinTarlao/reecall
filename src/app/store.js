import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import displayReducer from '../reducer/displayReducer';
import inboxReducer from '../reducer/inboxReducer';
import sidebarReducer from '../reducer/sidebarReducer';

export default configureStore({
  reducer: {
    display: displayReducer,
    inbox: inboxReducer,
    sidebar: sidebarReducer,
  },
});
