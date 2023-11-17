import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
import Styles from "./styles/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Styles>
      <App />
    </Styles>
  </RecoilRoot>
);
