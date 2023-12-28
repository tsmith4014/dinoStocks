import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MarketPage from "./pages/MarketPage";
import OverviewPage from "./pages/OverviewPage";
import SignUpPage from "./pages/Signuppage";
import StockDetailPage from "./pages/StockDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
const router = createBrowserRouter([
        {path:"/",
    element: <App/>,
    children:[
        {
            index:true,
            element: <HomePage/>
        },
        {
            path: "login/",
            element: <LoginPage/>
        },
        {
            path: "market/",
            element: <MarketPage/>
        },
        {
            path: "overview/",
            element: <OverviewPage/>
        },
        {
            path: "signup/",
            element: <SignUpPage/>
        },
        {
            path:"stock/:id/",
            element: <StockDetailPage/>
        }
        
    ],
    errorElement: <NotFoundPage/>
},
    ])

    export default router;