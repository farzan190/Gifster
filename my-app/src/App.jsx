import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import AppLayout from "./layout/app-Layout";
import Home from  "./pages/home";
import GifPage from "./pages/category";
import Category from "./pages/category";
import SearchPage from  "./pages/search";
import Favorites from "./pages/favourites";
import GifProvider from "./context/git-context";

//import horaha hai sab bass react router dom kaam nahi karraha hai 

const router=createBrowserRouter([
{
  element: <AppLayout/>,

  children: [
  { path: "/",
    element:<Home/> ,
  },
  { path: "/:type/:slug",
  element:<GifPage /> ,
},
 {  path: "/:category",
    element: <Category />,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },

   ],
},

]);

const App=()=> {
  return  (
    <GifProvider>
  <RouterProvider router={router}/>
  </GifProvider>);
}

export default App;
