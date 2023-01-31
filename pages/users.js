import React from 'react';

//receive props from getStaticProps at build time
const UserList = (props) => {
  //destructering props
  const { users } = props;
  return (
    <div>
      <h1>List of Users </h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.name}: {user.email}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  //   console.log(data);
  //must return an object
  return {
    props: {
      users: data,
    },
  };
}
