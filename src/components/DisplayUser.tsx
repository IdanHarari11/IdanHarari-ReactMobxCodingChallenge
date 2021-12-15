import React from 'react';
import { observer } from "mobx-react";
import currentUserStore from '../stores/CurrentUser.store';
import getUserFetch from '../helpers/getUserFetch';

// Get the currentUser details from the MobX and display them;
const DisplayUser = () => {
    // Get the currentUser details from the MobX;
    const name = currentUserStore.currentUser.Name;
    const age = currentUserStore.currentUser.Age;

    // Fetch new user if name === null, if name !== null it's will be equal to something from local storage; (when the component loaded at the first time it's will be null)
    // Easily -> if there is nothing in local storage;
    if(name === null || name === ''){
        getUserFetch();
    }

    return (
        <>
            { name + age }
        </>
    )
}

// Observe that the
const ObservedDisplayUserName = observer(DisplayUser);

const UserDetails = () => {
  return (
      <h1><ObservedDisplayUserName /></h1>
  );
}
export default UserDetails;


