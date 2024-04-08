import { createSlice } from "@reduxjs/toolkit";

const initialState: adherentState = {
  sheetState: false,
  adherentList: [],
};

const adherentSlice = createSlice({
  initialState,
  name: "adherent",
  reducers: {
    setAdherents: (state, action) => {
      state.adherentList = action.payload;
    },
    addAdherent: (state, action) => {
      state.adherentList.push(action.payload);
    },
    toogleSheet: (state) => {
      state.sheetState = !state.sheetState;
    },
  },
});

export const { setAdherents, addAdherent, toogleSheet } = adherentSlice.actions;
export default adherentSlice;
