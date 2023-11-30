import { Routes,Route,Outlet } from "react-router-dom";
import RenderContact from "./components/Contact";
import App from "./page/App";


export default function MainRoutes():JSX.Element {
   return(
              <Routes>
                <Route path="/" element={<Outlet/>}>
                     <Route path="/" element={<App/>}/>
                     <Route path="/contact" element={<RenderContact/>}/>
                </Route>
              </Routes>
    )
}