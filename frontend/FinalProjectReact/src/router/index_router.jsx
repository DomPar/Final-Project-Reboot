import { createBrowserRouter } from "react-router-dom";

import Welcome from "../pages/Welcome/Welcome";
import About from "../pages/About/About";
import App from "../pages/App/App";
import OwnProfile from "../pages/OwnProfile/OwnProfile.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import PetCard from "../componentes/PetCard/PetCard.jsx";
import ChooseUser from "../componentes/ChooseUser/ChooseUser.jsx"

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
            {
                path: '/app/petprofile',
                element: <PetCard/>
            }
        ]
    }, 
    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/chooseuser/',
        element: <ChooseUser/>
    }
])

export default router;