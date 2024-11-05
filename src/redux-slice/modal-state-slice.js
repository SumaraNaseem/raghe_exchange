import { createSlice } from "@reduxjs/toolkit";

const modalStateInit = {
  signupModal: false,
  loginModal: false,
  sidebar: false,
  rightSidebar: false,
  homepageModal : false
};
const modalStateSlice = createSlice({
  name: "modalStateSlice",
  initialState: {
    data: modalStateInit,
  },
  reducers: {
    handleModalVisibility: (state, action) => {
      const payload = action.payload;
      const { key, value } = payload;
      state.data = { ...state.data, [key]: value };
    },
  },
});

export const { handleModalVisibility } = modalStateSlice.actions;
export default modalStateSlice.reducer;
