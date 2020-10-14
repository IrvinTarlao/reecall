import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import displayReducer from '../reducer/display/displayReducer';

export default configureStore({
  reducer: {
    display: displayReducer,
  },
});
