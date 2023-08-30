import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
    name: 'form',
    initialState: {
        mcq: "",
        checkbox: {},
        shortAns: "",
        para: "",
        dropDown: "",
        linearScale: 0,
        multipleChoice: {},
        multipleCheck: {}
    },
    reducers: {
        mcq: (state, action) => {
            const value = action.payload
            state.mcq = value
        },
        checkbox: (state, action) =>{
            const value = action.payload
            state.checkbox = value
        },
        shortAns: (state, action) => {
            state.shortAns = action.payload
        },
        para: (state, action) => {
            state.para = action.payload
        },
        dropDown: (state, action) => {
            state.dropDown = action.payload
        },
        linearScale: (state, action) => {
            state.linearScale = parseInt(action.payload)
        },
        multipleChoice: (state, action) => {
            state.multipleChoice = action.payload
        },
        multipleCheck: (state, action) => {
            state.multipleCheck = action.payload
        }
    }
})


export const { mcq, checkbox, shortAns, para, dropDown, linearScale, multipleCheck, multipleChoice }  = FormSlice.actions;
export default FormSlice.reducer
