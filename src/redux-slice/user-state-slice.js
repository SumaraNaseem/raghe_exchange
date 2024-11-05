import { createSlice } from "@reduxjs/toolkit";

const userStateInit = {
  isLoggedIn: true,
};
const userStateSlice = createSlice({
  name: "userStateSlice",
  initialState: {
    data: userStateInit,
    multiMarket: [
      { match: "cricket", data: [] },
      { match: "tennis", data: [] },
      { match: "soccer", data: [] },
      { match: "horse", data: [] },
      { match: "greyHound", data: [] },
    ],
    showUserMenu: false,
  },
  reducers: {
    handleAuthState: (state, action) => {
      const payload = action.payload;
      const { isLoggedIn } = payload || {};
      state.data = { ...state.data, isLoggedIn };
    },
    updateMultiMarket: (state, action) => {
      const { type, sport, data } = action.payload;
      if (type === "add") {
        state.multiMarket[sport].data.push(data);
      } else {
        state.multiMarket[sport].data = state.multiMarket[sport].data.filter(
          (match) => match.matchName !== data.matchName
        );
      }
    },
    toggleUserMenu: (state, action) => {
      const payload = action.payload;
      state.showUserMenu = payload;
    },
  },
});

export const { handleAuthState, updateMultiMarket, toggleUserMenu } = userStateSlice.actions;
export default userStateSlice.reducer;
