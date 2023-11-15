import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const settingchangesSlice = createSlice({
    name: "changes",
    initialState,
    reducers: {
        settingsChanged: (state, action) => {
            return state= (action.payload);
        },
    }
});

export default settingchangesSlice.reducer;
export const { settingsChanged } = settingchangesSlice.actions;