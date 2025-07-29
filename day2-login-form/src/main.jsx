import { createRoot } from "react-dom/client";
import MyApp from "./App";

let myApp = document.getElementById('root');
const root=createRoot(myApp);
root.render(<MyApp/>)