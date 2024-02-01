import './App.css';
import { Home } from './pages/home/Home';
import { RouteLayout } from './RouteLayout';
import { RouterProvider, createBrowserRouter, Route,createRoutesFromElements } from "react-router-dom";
import { Hotel } from './pages/hotel/Hotel';
import {List} from './pages/list/List';
import Login from './pages/login/Login';
import Reserve from './components/reserve/Reserve';


const router = createBrowserRouter(createRoutesFromElements(<Route path ="/" element = {<RouteLayout/>}>
  <Route index  element = {<Home/>}/>
  {/* <Route path="/hotels" element = {<List/>}/> */}
  <Route path="/hotels/:id" element = {<Hotel/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/reserve" element={<Reserve/>}/>
  </Route>))
function App() {

  return (
    <div className="App">
       <RouterProvider router = {router}></RouterProvider>
        
      
    </div>
  );
}

export default App;