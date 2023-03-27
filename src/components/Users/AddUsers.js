import React, { useState ,useRef} from "react";
import Card from '../UI/Card';
import calsses from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper'
const AddUsers=props=>{

const nameInputRef=useRef();
const ageInputRef=useRef();

    const[enteredUserName,setEnterdUsername]=useState('');
    const[enteredAge,setEnterdAge]=useState('');
    const[error,setError]=useState();

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0)
        {
            setError({
                title:'Invalid Input',
                message:'please enter a valid name and age(non-empty value)'
            });
            return;
        }
        if(+enteredAge<1)
        {
           setError({
            title:'Invalid age',
            message:'please enter a valid age( >0)'
           })
           return;
        }
        console.log(enteredUserName,enteredAge)
        setEnterdUsername('');
        setEnterdAge('');
    }

    const usernameChangeHandler=(event)=>{
        setEnterdUsername(event.target.value);
    }

    const ageChangeHandler=(event)=>{
        setEnterdAge(event.target.value);
    }

    const setErrorHandler=(event)=>{
        setError(null);
    }

    return (
        <Wrapper>
        {error && (
            <ErrorModal
            title={error.title}
            message={error.message}
           onConfirm={errorHandler}/>
        )}
        <Card className={calsses.input}>
       <form onSubmit={addUserHandler}>
        <label htmlFor="username" >Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>

        <label htmlFor="age" >Age</label>
        <input id="age" type="number" value={enteredAge}onChange={ageChangeHandler}></input>
        
       <Button type="submit">Add User</Button>
       </form>
       </Card>
       </Wrapper>
    )
}
export default AddUsers;