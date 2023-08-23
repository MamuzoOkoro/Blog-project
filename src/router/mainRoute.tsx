import { createBrowserRouter } from "react-router-dom"
import Layout from "../Component/common/Layout"
import AdminHomePage from "../pages/AdminScreen/AdminHomePage"
import UserHomePage from "../pages/UserScreen/UserHomePage"
import GetStartedPage from "../pages/GetStartedPage"
import AdminSignUp from "../pages/Auth/AdminSignUp"
import UserSignUp from "../pages/Auth/UserSignup"


export const mainRoute = createBrowserRouter(
    [
    {
        path: "/",
        element: < Layout/>
    },
    {
        path: "/adminpage",
        element: < AdminHomePage/>
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
        path: "/userSignUp",
        element: < UserSignUp/>
    },
]
)