import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import AppSetting from "../../modules/share/model/appSetting"
import WebSeo from "../../modules/share/model/webSeo";

export type AppInfoState = {
  appInfo: AppSetting;
  seoInfo: WebSeo;
}

const initialState: AppInfoState = {
  appInfo: null,
  seoInfo: null
}

const appInfoSlice = createSlice({
  name: "appInfo",
  initialState,
  reducers: {
    setAppInfo: (state, action: PayloadAction<AppSetting>) => {
      state.appInfo = action.payload;
    },
    setSEOInfo: (state, action: PayloadAction<WebSeo>) => {
      state.seoInfo = action.payload;
    }
  },
});

export const { setAppInfo, setSEOInfo } = appInfoSlice.actions;
export default appInfoSlice.reducer;