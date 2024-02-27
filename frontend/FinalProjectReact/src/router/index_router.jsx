import { createBrowserRouter } from "react-router-dom";

import Welcome from "../pages/Welcome/Welcome";
import About from "../pages/About/About";
import App from "../pages/App/App";
import OwnProfile from "../pages/OwnProfile/OwnProfile.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";

const router = createBrowserRouter([
    {
        path: '/app',
        element: <App/>,
        children: [
            {
                path: '/app/about',
                element: <About/>
            },
            {
                path: '/app/ownprofile',
                element: <OwnProfile/>
            },
        ]
    }, 
    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
])

export default router;