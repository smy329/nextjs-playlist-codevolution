import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <p>
        {user.name}:{user.email}
      </p>
    </div>
  );
};

export default User;
