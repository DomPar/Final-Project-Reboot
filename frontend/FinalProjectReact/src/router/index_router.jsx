import { createBrowserRouter } from "react-router-dom";

import Welcome from "../pages/Welcome";
import About from "../pages/About";
import App from "../App";
import OwnProfile from "../pages/OwnProfile/OwnProfile";

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
            {
                path: '/ownprofile',
                element: <OwnProfile/>
            },
        ]
    }

])

export default router;