import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Components/Products'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Cart from './Components/Cart'
import RootLayout from './Components/RootLayout'



const App = () => {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard /> }></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return (
    <>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>

   
  )
}

export default App