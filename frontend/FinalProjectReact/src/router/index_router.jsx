import { createBrowserRouter, redirect } from "react-router-dom";

import Welcome from "../pages/Welcome/Welcome";
import About from "../pages/About/About";
import App from "../pages/App/App";
import OwnProfile from "../pages/OwnProfile/OwnProfile.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import NewPost from "../pages/NewPost/NewPost.jsx";
import OthersUserProfile from "../pages/OthersUserProfile/OthersUserProfile.jsx"
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import ShelterProfileFromUser from "../pages/ShelterProfileFromUser/ShelterProfileFromUser.jsx";
import PetCard from "../componentes/Petcard/PetCard.jsx";
import ViewPost from "../pages/ViewPost/ViewPost.jsx";

const router = createBrowserRouter([
    {
        path: '/app',
        element: <App/>,
        children: [
            {
                path: '/app',
                element: <About/>,
                loader: () => {
                    if (!localStorage.getItem('token')) {
                        return redirect('/')
                    } else {
                        return null
                    }
                }
            },
            {
                path: '/app/ownprofile',
                element: <OwnProfile/>
            },
            {
                path: '/app/newpost',
                element: <NewPost/>
            },
            {
                path: '/app/otherprofile',
                element: <OthersUserProfile/>
            },
            {
                path: '/app/dashboard',
                element: <Dashboard/>
            },
            
            {
                path: '/app/shelter/:shelterId',
                element: <ShelterProfileFromUser/>
            },
            {
                path: '/app/petprofile',
                element: <PetCard/>
            },
            {
                path: '/app/viewpost',
                element: <ViewPost/>
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

