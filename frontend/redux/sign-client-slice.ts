import { createSlice } from "@reduxjs/toolkit";

export const signClientSlice = createSlice({
  name: "signClient",
  initialState: {
    stage: 1,
    email: "",
  },
  reducers: {
    setStage: (state, action) => {
      return { ...state, stage: action.payload as number };
    },
    setEmail: (state, action) => {
      return { ...state, email: action.payload as string };
    },
  },
});

export const { setStage, setEmail } = signClientSlice.actions;

export default signClientSlice.reducer;
