import React, { useState } from "react";
import userList from "./data";
import Usertable from "../tables/Usertable";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm.jsx";


const Home = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  //Delete operation
  const deleteUser = id => setUsers(users.filter(user => user.id !== id));
  <Usertable users={users} deleteUser={deleteUser} />


  //Edit operation
  const [editing, setEditing] = useState(false);
  const initialUser = {id: null, name: '', username: ''}; 
  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }
  const updateUser = (newUser) => {
    setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
  }

  

  return (
    <div className="container">
      <h4>React CRUD App with Hooks</h4>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h3>Edit user</h3>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h3>Add user</h3>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <br></br>
        <div className="three columns">
          <h3>View users</h3>
          <Usertable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;