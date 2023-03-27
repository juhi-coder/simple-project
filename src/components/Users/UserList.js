import React from 'react';
const UserList = (props) => {
    
    return (
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age})</li>
          <li key={user.id}>
          {user.name} ({user.age} years old) {user.collage}</li>
        ))}
      </ul>);
  };
  export default UserList;