import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../components/Mining/miningSlice';

export const store = configureStore({
    reducer: {
        miningPlan: counterReducer,
    },
});
