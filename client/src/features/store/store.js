import {
    configureStore,
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
  import saga from "./saga";
  
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga);

export default store;