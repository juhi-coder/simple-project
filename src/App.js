import React, { Fragment } from "react";
import AddUsers from './components/Users/AddUsers'
const App=()=> {
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHnadler} />
      <UserList users={userLists} />
    </Fragment>
  );
}

export default App;
