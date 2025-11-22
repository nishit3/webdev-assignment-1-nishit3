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
    "modulesReducer",
    "coursesReducer",
    "assignmentsReducer",
    "enrollmentsReducer",
  ],
  debug: true,
};

const rootReducer = combineReducers({
  coursesReducer,
  modulesReducer,
  accountReducer,
  assignmentsReducer,
  enrollmentsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store;
let persistor;

export function makeStore() {
  if (store) {
    return { store, persistor };
  }

  store = configureStore({
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

  persistor = persistStore(store);

  // Debug: log when store is created
  if (typeof window !== "undefined") {
    console.log("Redux store created on client side");
    console.log("Initial state:", store.getState());

    // Subscribe to state changes
    store.subscribe(() => {
      console.log("State changed:", store.getState().modulesReducer);
    });
  }

  return { store, persistor };
}

const { store: defaultStore, persistor: defaultPersistor } = makeStore();

export { defaultPersistor as persistor };
export default defaultStore;
