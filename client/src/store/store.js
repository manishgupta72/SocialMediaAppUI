import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Reducer/authSlice";

function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if (serializedStore === null) return null;
        return JSON.parse(serializedStore);
    } catch (e) {
        console.log(e);
        return null;
    }
}

const persistedState = loadFromLocalStorage();


const store=configureStore({
    reducer:{
        auth:authSlice,
    },
})

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;