import Wishlist from "./Pages/Wishlist";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("./layout/Main");
const { default: About } = require("./Pages/About");
const { default: Card } = require("./Pages/Card");
const { default: Home } = require("./Pages/Home");
const { default: TopRated } = require("./Pages/TopRated");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/about', element: <About></About>
            },
            {
                path: '/top-rated', element: <TopRated></TopRated>
            },
            {
                path: '/card', element: <Card></Card>
            },
            {
                path: '/wishlist', element: <Wishlist></Wishlist>
            },
        ]
    }
])