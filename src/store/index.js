import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./propertySlice";

const store = configureStore({
    reducer: {
        property: propertySlice.reducer
    }
})

export default  store