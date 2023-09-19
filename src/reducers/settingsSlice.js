import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Get_SERVER_URL = "http://127.0.0.1:8000/option/get";
const Save_SERVER_URL = "http://127.0.0.1:8000/option/save"


const { data } = await axios.get(Get_SERVER_URL);

const getinitialState = () => {
    if (data['settings'] === "") {
        return {};
    }
    else return JSON.parse(data['settings']);
}

const initialState = getinitialState();

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        settingsApplied: (state, action) => {
            axios.post(Save_SERVER_URL, { 'settings': action.payload });
            return state = action.payload;
        }
    }
});

export default settingsSlice.reducer;
export const { settingsApplied } = settingsSlice.actions;