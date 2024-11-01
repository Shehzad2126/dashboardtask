import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);