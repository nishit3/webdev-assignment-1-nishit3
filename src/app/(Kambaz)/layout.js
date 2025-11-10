"use client";
import KambazNavigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

export default function KambazLayout({ children }) {
  return (
    <Provider store={store}>
      <div id="wd-kambaz">
        <div className="d-flex">
          <div>
            <KambazNavigation />
          </div>
          <div className="wd-main-content-offset p-3 flex-fill">{children}</div>
        </div>
      </div>
    </Provider>
  );
}
