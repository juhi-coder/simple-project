import React,{useState} from 'react';
import Login from './components/Login';

import './App.css';
const App=()=>{
        const [userList, setUserList]=useState([]);
        const addNewUserHandler=(uName,uAge,uCollage)=>{
                setUserList((prevUserList)=>{
                        return[...prevUserList,{name:uName,age:uAge,collage:uCollage}]
                })
        }




        return(
           <div>
            <Form onAddUser={addNewUserHandler}/>
            <UserList users={userList} />

            <Login  />
           </div> 

        );
}

export default App;
