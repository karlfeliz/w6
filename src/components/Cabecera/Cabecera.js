import './Cabecera.scss';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import UserPage from '../UserPage/UserPage';
import CreateUserPage from '../CreateUserPage/CreateUserPage';

const Cabecera = () => {
  return (
    <BrowserRouter>
      <nav className='Cabecera'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/create-user'>Create User</NavLink>
      </nav>

      <Routes>
        {/* Ruta Normal */}
        <Route path='/' element={<HomePage></HomePage>}></Route>

        {/* Rutas Lazy */}
        <Route path='/users' element={<UserPage></UserPage>}></Route>
        <Route path='/create-user' element={<CreateUserPage></CreateUserPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Cabecera;
