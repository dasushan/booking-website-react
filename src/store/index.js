import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./propertySlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        property: propertySlice.reducer,
        user: userSlice.reducer
    }
})

export default  store