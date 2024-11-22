import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    property: [],
    selectedCategory: null,
    bookingIsOpen: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setProperty: (state, action) => {
            state.property = action.payload
        },
        setBookingIsOpen: (state, action) => {
            state.bookingIsOpen = action.payload
        }
    }
})

export const { setCategory, setProperty, setBookingIsOpen} = userSlice.actions
export default userSlice