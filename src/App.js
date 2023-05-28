import {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import MenuPage from "./pages/MenuPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./pages/Instamart";
//creating a bundler
const Instamart=lazy(()=>import("./pages/Instamart"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
          },
      {
        path: "/about",
        element: <About />,
        //nested routes
        children:[
          {
            path:'profile',
            element:<Profile/>
        }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/menu/:id",
        element: <MenuPage />
      },
      {
        path:"/instamart",
        element:(<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>)
      }
    ],
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>
}
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
