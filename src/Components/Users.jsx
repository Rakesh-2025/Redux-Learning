import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Slices/user_slice';

const Users = () => {
  const users = useSelector((state) => state.users.usersList);


  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div className="p-4">
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users added yet</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Age}</td>
                <td>{user.Email}</td>
                <td>{user.Phone}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;