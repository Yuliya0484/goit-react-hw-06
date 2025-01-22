import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
