import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiRegisterUserId } from "./auth.api"
import { LOCAL_USER_ID_KEY } from "./auth.config"

export type AuthState = {
  userId: string;
  loading: boolean;
}

const initialState: AuthState = {
  userId: null,
  loading: true
}

export const registerUserId = createAsyncThunk("users/registerUserId", async () => {
  const localUID = window.localStorage.getItem(LOCAL_USER_ID_KEY);
  if (!!localUID) {
    return localUID;
  }
  const { userId }: { userId: string } = await apiRegisterUserId();
  if (userId) window.localStorage.setItem(LOCAL_USER_ID_KEY, userId);
  return userId;
});

const authSlice = createSlice({
  name: "users",
  initialState, 
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(registerUserId.fulfilled, (state, action) => {
      state.userId = action.payload,
      state.loading = false
    })
  }
});

export const { } = authSlice.actions;
export default authSlice.reducer;