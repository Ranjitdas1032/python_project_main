import {createSlice} from '@reduxjs/toolkit';

const counterslice = createSlice({
    name : "counter",
    initialState : {value : 0},
    reducers : {
        increament : (state) => {state.value += 1 ;},
        decreament : (state) => {state.value -= 1 ;},
        increasebyamount : (state,action) => {state.value += action.payload}
    }
})

export const{increament,decreament,increasebyamount} = counterslice.actions;
export default counterslice.reducer;