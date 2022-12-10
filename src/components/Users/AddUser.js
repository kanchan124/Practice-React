import React ,{useState}from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import classes from "./AddUser.module.css"

const AddUser = () => {

  const[enteredUsername,setEnteredUsername]=useState('');
  const[enteredAge,setEnteredAge]=useState('');


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername , enteredAge)
  };

  const UsernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value)
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={UsernameChangeHandler}></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" onChange={ageChangeHandler}></input>
      <Button type="Submit">Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
