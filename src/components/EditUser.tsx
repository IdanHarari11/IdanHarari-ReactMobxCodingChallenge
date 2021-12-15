import React, { useState } from "react";
import { saveUser } from "../helpers/getUserFetch";
import { setItemToLocalStorage } from "../helpers/localStorage";
import currentUserStore from "../stores/CurrentUser.store";
import './style.css'

const initialEnterdName: string = currentUserStore.currentUser.Name || 'Enter name';
const initialEnterdAge: any = currentUserStore.currentUser.Age || 'Enter age';

const EditUser = () => {
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredAgeIsValid, setEnteredAgeIsValid] = useState(false);
    const [enteredName, setEnteredName] = useState(initialEnterdName);
    const [enteredAge, setEnteredAge] = useState(initialEnterdAge);

    // onChange name input;
    const nameInputChangeHandler = (event: any) => {
      // Get the value from the event;
      const nameValue = event.target.value;
      
      setEnteredName(nameValue);

      if(!nameValue.match("^[a-zA-Z ]*$") || !nameValue.length || nameValue.length > 10){
        return setEnteredNameIsValid(true);        
      }else{
        setEnteredNameIsValid(false)
      }

      // Set it to local storage by 'name' storage name;
      setItemToLocalStorage('name', nameValue);

      // Do the validate for display just 10 character with uppercase for the first char;
      const name = nameValue.charAt(0).toUpperCase() + nameValue.toLowerCase().slice(1, 10);
      
      // Set the name in the Mobox;
      currentUserStore.setName(name);
    };
    
    // onChange age input
    const ageInputChangeHandler = (event: any) => {
      // Get the value from the event;
      const numberValue = event.target.value;

      setEnteredAge(numberValue)
      // Do the validate for display just numbers that higher then 0 and less then 3 digit;
      let age = +numberValue >= 0 ? +numberValue : 0;
      age = Number(age.toString().slice(0,2))

      // The validation flag; (for display errors in the UI)
      if(!numberValue.match(/^\d+$/) || numberValue.length > 2 || !(+numberValue >= 0)){
        return setEnteredAgeIsValid(true)
      }else{
        setEnteredAgeIsValid(false)
      }

      // Set it to local storage by 'age' storage name; (make it after the validate)
      setItemToLocalStorage('age', numberValue);

      // Set the age in the Mobox;
      currentUserStore.setAge(+age >= 0 ? +age : 0);
    };

    // Fetch new user from the API;
    const generateUserHandler = async () => {
      // getUserFetch();
      await saveUser();
      setEnteredName(currentUserStore.currentUser.Name);
      setEnteredAge(currentUserStore.currentUser.Age);
    };
    

    // Clear the local storage
    const clearInformationHandler = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("age");
        currentUserStore.setName('');
        currentUserStore.setAge(0);
    }
    
    return (
        <div className="formbg-inner padding-horizontal--48">
      <div id="stripe-login">
        <div className="field padding-bottom--24">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className={enteredNameIsValid ? 'invalid' : '' } value={enteredName !== 'Enter name' ? enteredName : ''} placeholder={enteredName} onChange={nameInputChangeHandler} />
          {enteredNameIsValid && <div className="invalidDiv">Invalid input - must contains <b>only 1 to 10 characters!</b></div>}
        </div>
        <div className="field padding-bottom--24">
          <div className="grid--50-50">
            <label htmlFor="age">Age</label>
          </div>
          <input type="text" name="age" className={enteredAgeIsValid ? 'invalid' : '' } value={enteredAge !== 'Enter age' ? enteredAge : ''} placeholder={enteredAge.toString()} onChange={ageInputChangeHandler}/>
          {enteredAgeIsValid && <div className="invalidDiv">Invalid input - must contains <b>only one or two digits!</b></div>}
        </div>
        <div className="field padding-bottom--24">
          <button className="generateUserBtn" onClick={generateUserHandler}>Generate New User</button>
        </div>
        <div className="field padding-bottom--24">
          <button className="generateUserBtn" style={{backgroundColor: 'white', color: 'black'}} onClick={clearInformationHandler}>Clear Information</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
