import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./clientStorage";
import { combineReducers } from "redux";
import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Dashboard/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "accountReducer",  // Only persist logged-in user
    // Everything else fetches fresh from API
  ],
};

const rootReducer = combineReducers({
  coursesReducer,
  modulesReducer,
  accountReducer,
  assignmentsReducer,
  enrollmentsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store singleton
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
        ],
        ignoredPaths: ["_persist"],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
