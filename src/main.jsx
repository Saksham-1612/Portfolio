import ReactDOM from "react-dom/client";
import App from "./App";
import { TerminalContextProvider } from "react-terminal";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TerminalContextProvider>
    <App />
  </TerminalContextProvider>
);
