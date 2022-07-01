import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError] = useState(); 

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values)',
      }); 
      return;
    }
    //Number conversion add + to the beggining.
    if (+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message:'Please enter a valid  age (> 0)',
      }); 
      return;
    }
    props.onAddUser(enteredUserName,enteredAge);  
    console.log(`${enteredUserName} ${enteredAge}`);  
    setEnteredAge("");
    setEnteredUserName("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = ()=>{
    setError(null);  
  }

  return (
   
    <div>
      {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </div>

  );
};

export default AddUser;
