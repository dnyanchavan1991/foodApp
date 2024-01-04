import React from 'react'
// import ReactDOM from 'react-dom/client';
import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./utils/Navbar";
import Textutils from './Components/Textutils';
import SwiggyClone from "./Components/SwiggyClone";
import About from './Components/About';
import RestaurantMenu from './Components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './Components/Cart';
import Footer from './utils/Footer';

const App = () => {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
    </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <SwiggyClone />,    
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Textutils />,
      },
      {
        path:"/restaurant/:restId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element: <Cart />,
      },
    ]
  }
])
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render( />)
export default App;
