import React, { useState } from "react";
import Card from '../UI/Card';
import calsses from './AddUsers.module.css';
import Button from "../UI/Button";
const AddUsers=props=>{


    const[enteredUserName,setEnterdUsername]=useState('');
    const[enteredAge,setEnterdAge]=useState('');

    const usernameChangeHandler=(event)=>{
        setEnterdUsername(event.target.value);
    }
    const ageChangeHandler=(event)=>{
        setEnterdAge(event.target.value);
    }


    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0)
        {
            return;
        }
        if(enteredAge<1)
        {
            return;
        }
        console.log(enteredUserName,enteredAge)
        setEnterdUsername('');
        setEnterdAge('');
    }
    return (
        <Card>
       <form onSubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>

        <label htmlFor="age" >Age</label>
        <input id="age" type="number" value={enteredAge}onChange={ageChangeHandler}></input>
        
       <Button type="submit">Add User</Button>
       </form>
       </Card>
    )
}
export default AddUsers;