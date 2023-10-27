import { combineReducers } from 'redux';
import dataReducer from './dataSlice';

// Combine all reducers here
const rootReducer = combineReducers({
    data: dataReducer,
    // Add other reducers here if you have any
});

export default rootReducer;
