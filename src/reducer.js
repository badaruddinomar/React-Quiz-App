import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allQuizes: {},
  currentQuiz: {},
};

export const quizeReducer = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    quizes: (state, action) => {
      state.allQuizes = action.payload;
    },
    quize: (state, action) => {
      state.currentQuiz = action.payload;
    },
  },
});
export const { quize, quizes } = quizeReducer.actions;
export default quizeReducer.reducer;
