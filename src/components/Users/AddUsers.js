import React from "react";
import Card from '../UI/Card';
import calsses from './AddUsers.module.css';
import Button from "../UI/Button";
const AddUsers=props=>{

    const addUserHandler=(event)=>{
        event.preventDefault();
    }
    return (
        <Card>
       <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>

        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        
       <Button type="submit">Add User</Button>
       </form>
       </Card>
    )
}
export default AddUsers;