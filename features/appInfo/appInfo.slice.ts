import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import AppSetting from "../../modules/share/model/appSetting"

export type AppInfoState = {
  appInfo: AppSetting
}

const initialState: AppInfoState = {
  appInfo: null
}

const appInfoSlice = createSlice({
  name: "appInfo",
  initialState,
  reducers: {
    setAppInfo: (state, action: PayloadAction<AppSetting>) => {
      state.appInfo = action.payload;
    }
  },
});

export const { setAppInfo } = appInfoSlice.actions;
export default appInfoSlice.reducer;