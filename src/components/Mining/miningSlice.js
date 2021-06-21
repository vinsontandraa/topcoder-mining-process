import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    data: ["test"],
};


export const miningSlice = createSlice({
    name: 'ores',
    initialState,
    reducers: {
        AddMiningPlan: (state, action) => {
            state.data.push(action.payload);
        },
        AddMiningEntry: (state, action) => {
            
        }
    },

});

export const {AddMiningPlan, AddMiningEntry} = miningSlice.actions;

export const selectCount = (state) => {
    return state.miningPlan.value
};
export const getCurrentPlan = (state) => {
    if (state.miningPlan.data.length > 0) {
        return state.miningPlan.data[0];
    }

};
export const getResults = (state) => {
    return state.miningPlan.data;
};


export default miningSlice.reducer;
