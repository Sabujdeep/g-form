import { createSlice } from "@reduxjs/toolkit";

export const requiredSlice = createSlice({
    name: 'required',
    initialState:{
        mcq1: false,
        checkbox1: false,
        shortAns1: false,
        para1: false,
        dropDown1: false,
        linearScale1:false,
        multipleChoice1: false,
        multipleCheck1:false
    },
    reducers:{
        mcq1: (state, action) => {
            const value = action.payload
            state.mcq1 = !value
        },
        checkbox1: (state, action) =>{
            const value = action.payload
            state.checkbox1 = value
        },
        shortAns1: (state, action) => {
            const value = action.payload
            state.shortAns1 = value
        },
        para1: (state, action) => {
            const value = action.payload
            state.para1 = value
        },
        dropDown1: (state, action) => {
            const value = action.payload
            state.dropDown1 = value
        },
        linearScale1: (state, action) => {
            const value = action.payload
            state.linearScale1 = value
        },
        multipleChoice1: (state, action) => {
            const value = action.payload
            state.multipleChoice1 = value
        },
        multipleCheck1: (state, action) => {
            const value = action.payload
            state.multipleCheck1 = value
        }
    }
})

export const { mcq1, checkbox1, shortAns1, para1, dropDown1, linearScale1, multipleCheck1, multipleChoice1 }  = requiredSlice.actions;
export default requiredSlice.reducer