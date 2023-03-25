/* eslint-disable indent */
import React from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const UserPage = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getAllUsersFromApi();
  }, []);

  const getAllUsersFromApi = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  return (
    <div className='users__item'>
      <table className='users__table'>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>NOMBRE DE USUARIO</th>
            <th>CORREO ELECTRÓNICO</th>
            <th>SITIO WEB</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
