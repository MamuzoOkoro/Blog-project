import { createBrowserRouter } from "react-router-dom"
import Layout from "../Component/common/Layout"
import AdminHomePage from "../pages/AdminScreen/AdminHomePage"
import UserHomePage from "../pages/UserScreen/UserHomePage"
import GetStartedPage from "../pages/GetStartedPage"
import AdminSignUp from "../pages/Auth/AdminSignUp"
import UserSignUp from "../pages/Auth/UserSignup"
import CategoriesPage from "../pages/Auth/CategoriesPage"
import AdminSignIn from "../pages/Auth/AdminSignIn"
import UserSignIn from "../pages/Auth/UserSignIn"
import LandingPage from "../pages/LandingPage/LandingPage"
import AdminLayout from "../Component/common/AdminLayout"



export const mainRoute = createBrowserRouter(
    [
    {
        path: "/",
        element: < Layout/>,
        children:[{
            index:true,
            element: <LandingPage/>
        }]
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children:[{
            index:true,
            element: <AdminHomePage/>
        }]
    },
    {
        path: "/",
        element: < UserHomePage/>
    },
    {
        path: "/opinionPage",
        element: < GetStartedPage/>
    },
    {
        path: "/adminSignUp",
        element: < AdminSignUp/>
    },
    {
        path: "/adminSignIn",
        element: < AdminSignIn/>
    },
    {
        path: "/userSignUp",
        element: < UserSignUp/>
    },
    {
        path: "/userSignIn",
        element: <UserSignIn/>
    },
    {
        path: "/categoriespage",
        element: < CategoriesPage/>
    }
    
]
)