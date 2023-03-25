/* eslint-disable indent */
import React from 'react';
// import UserDetail from './components/UserDetail';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserPage = (props) => {
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
    <div className='UserPage'>
      {users.data.map((user) => {
        return (
          <div key={user._id} className='users__item'>
            <table className='selectedRecipe-item__table'>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>NOMBRE DE USUARIO</th>
                  <th>CORREO ELECTRÓNICO</th>
                  <th>SITIO WEB</th>
                </tr>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;
