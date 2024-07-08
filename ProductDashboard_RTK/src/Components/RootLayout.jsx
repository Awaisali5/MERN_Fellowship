import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'
import Products from './Products';
import NavigationBar from './NavigationBar';
import { Provider } from 'react-redux';
import store from '../store/Store';
const RootLayout = () => {
  return (
    <>
    <Provider store={store}>


    <NavigationBar />
        
    <main>
    
        <Outlet />
        
    </main>

    </Provider>

    </>
  )
    
};

export default RootLayout
