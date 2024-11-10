import ReactDOM from "react-dom/client";
//acts as an mail enty point where the react app boots up
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
