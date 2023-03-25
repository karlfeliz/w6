import './Cabecera.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Cabecera = () => {
  return (
    <nav className='Cabecera'>
      <NavLink to='/'>
        <FormattedMessage id='header.home' />
      </NavLink>
      <NavLink to='/users'>
        <FormattedMessage id='header.users' />
      </NavLink>
      <NavLink to='/create-user'>
        <FormattedMessage id='header.createUser' />
      </NavLink>
    </nav>
  );
};

export default Cabecera;
