import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "../reducers/tabsSlice.js";
import settingsReducer from "../reducers/settingsSlice.js";
import settingchanges from "../reducers/settingchangesSlice.js"

const store = configureStore({
    reducer: {
        tabs: tabsReducer, 
        settings : settingsReducer,
        settingchanges : settingchanges,
    }
});

export default store;