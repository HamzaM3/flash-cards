import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screen";
import { mainMenu, editList, selectExercise, exercise } from "./screen";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export { mainMenu, editList, selectExercise, exercise };
