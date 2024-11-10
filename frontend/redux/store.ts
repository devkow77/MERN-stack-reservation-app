import { configureStore } from "@reduxjs/toolkit";
import signClientSlice from "../redux/sign-client-slice";

const store = configureStore({
  reducer: {
    signClient: signClientSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
