import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ButtonSample3 from "./src/Components/ButtonFormTailwind";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path:"/button",
        element:<ButtonSample3/>
    }
])