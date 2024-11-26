import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    property: [],
    selectedCategory: null,
    

    showBookingModal: false,
    bookedProperty: null,

    token: null,
    emailId: '',
    isLoggedIn: false
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
        },

        setShowBookingModal: (state, action) => {
            state.showBookingModal = action.payload
        },
        setBookedProperty: (state, action) => {
            state.bookedProperty = action.payload
        },
        login: (state, action) => {
            state.token = action.payload.idToken;
            state.emailId = action.payload.email;
            localStorage.setItem('token', state.token)
            localStorage.setItem('email', state.emailId)
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.token = null;
            state.emailId = '';
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            state.isLoggedIn = false;
        },
        getAuthStatus: (state, action) => {
            const token = localStorage.getItem('token');
            state.emailId = localStorage.getItem('email');
            state.token = token;
            state.isLoggedIn = !!token;
        }
    }
})

export const { setCategory, setProperty, setBookingIsOpen, setShowBookingModal, setBookedProperty, login, logout, getAuthStatus} = userSlice.actions
export default userSlice