import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./FormSlice";
import requiredSlice from "./RequiredSlice";

const Store = configureStore({
    reducer:{
        form : formReducer,
        required: requiredSlice
    }
})

export default Store