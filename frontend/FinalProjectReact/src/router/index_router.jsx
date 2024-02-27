import { createBrowserRouter } from "react-router-dom";

import Welcome from "../pages/Welcome";
import About from "../pages/About";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Welcome/>
            },
            {
                path: '/about',
                element: <About/>
            },
        ]
    }

])

export default router;