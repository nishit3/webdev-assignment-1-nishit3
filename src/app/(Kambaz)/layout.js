"use client";
import KambazNavigation from "./Navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import "./styles.css";
import { useEffect } from "react";

function PersistDebugger({ children }) {
  useEffect(() => {
    console.log("PersistGate mounted, persistor:", persistor);
    
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      console.log("localStorage available");
      console.log("Current localStorage keys:", Object.keys(localStorage));
      
      // Try to read the persisted state
      const persistedState = localStorage.getItem("persist:root");
      if (persistedState) {
        console.log("Found persisted state:", JSON.parse(persistedState));
      } else {
        console.log("No persisted state found in localStorage");
      }
    }
  }, []);
  
  return children;
}

export default function KambazLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<div>Loading persisted state...</div>} 
        persistor={persistor}
      >
        <PersistDebugger>
          <div id="wd-kambaz">
            <div className="d-flex">
              <div>
                <KambazNavigation />
              </div>
              <div className="wd-main-content-offset p-3 flex-fill">
                {children}
              </div>
            </div>
          </div>
        </PersistDebugger>
      </PersistGate>
    </Provider>
  );
}
