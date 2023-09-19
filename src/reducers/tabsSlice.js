import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://127.0.0.1:8000/option/get"

const { data } = await axios.get(SERVER_URL);

const initialState = data['tabs'];

const tabsSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {}
});

export default tabsSlice.reducer;