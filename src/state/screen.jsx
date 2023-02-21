import { createSlice } from "@reduxjs/toolkit";

export const screens = ["mainMenu", "editList", "selectExercise", "exercise"];

const [MAIN_MENU, EDIT_LIST, SELECT_EXERCISE, EXERCISE] = screens;

export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    screen: MAIN_MENU,
  },
  reducers: {
    mainMenu: (state) => {
      state.screen = MAIN_MENU;
    },
    editList: (state) => {
      state.screen = EDIT_LIST;
    },
    selectExercise: (state) => {
      state.screen = SELECT_EXERCISE;
    },
    exercise: (state) => {
      state.screen = EXERCISE;
    },
  },
});

export const { mainMenu, editList, selectExercise, exercise } =
  screenSlice.actions;

export default screenSlice.reducer;
