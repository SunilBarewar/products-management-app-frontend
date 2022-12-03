import React, { useContext, useEffect } from 'react';
import './App.css';
import { store } from './context/Context';

import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import { Route, Routes, Navigate } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
const App = () => {
  const { user } = useContext(store)
  return (
    <>
     <div>
        <Toaster 
          position='top-right'
          toastOptions={{
            success :{
              theme :{
                primary : '#4aed88'
              }
            },
            error:{
              theme:{
                primary:"#d31616"
              }
            }
          }}
        >
        </Toaster>
      </div>
      <div className='app_container'>
        <Routes>
          <Route
            path='/'
            element={user ? <Navigate to='/home' /> : <Navigate to='/auth' />}
          />
          <Route
            path='/home'
            element={user ? <Home /> : <Navigate to='../auth' />}
          />
          <Route
            path='/auth'
            element={user ? <Navigate to='../home' /> : <Auth />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App