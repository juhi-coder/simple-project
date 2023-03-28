import React ,{useState} from "react";
const App=()=>{

const[name,setName]=useState("");
const[username,setUserName]=useState();
const[password,setPassword]=useState();

const InputEvent=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
    
}

const InputEventTwo=(event)=>{
    console.log(event.target.value);
    setPassword(event.target.value);
}

const onSubmits=(event)=>{
    event.preventDefault();
    setName(username);
    setName(password);
}

    return(
            <div>
            <form onSubmit={onSubmits}>
                <input type="text" placeholder="Enter Username"
                onChange={InputEvent}
                value={name}></input>
                <br></br>

                <input type="text" placeholder="Enter password"
                onChange={InputEventTwo}
                value={password}></input>
                <br></br>
                 <button type="submit">Submit</button>
                 </form>
            </div>
    )
}
export default App;