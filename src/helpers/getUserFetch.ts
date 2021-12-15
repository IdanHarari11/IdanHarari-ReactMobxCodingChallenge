import { getItemFromLocalStorage, setItemToLocalStorage } from "./localStorage";
import currentUserStore from "../stores/CurrentUser.store";
import UserModel from "../models/User.model";

// Do the fetch from the API;
const getUserFetch =  async (): Promise<UserModel> => {
    console.log('fetch');
    
    // Get the data from the API;
    const res = await fetch("https://randomuser.me/api");
    const response = await res.json();
    
    const name: string = response.results[0].name.first;
    const age: number = response.results[0].dob.age;
    
    // Pass the name and age results over with UserModel call signatures;
    return  {name, age} as UserModel;
}

// Save the fetched user to MobX and local storage;
export const saveUser = async () => {
    const user: UserModel = await getUserFetch();
    
    const name = user.name;
    const age = user.age;
    
    // Set name and age in local storage;
    setItemToLocalStorage("name", name);
    setItemToLocalStorage("age", age);

    // Set name and age to MobX;
    currentUserStore.setName(name);
    currentUserStore.setAge(age);
}

const localStorageIsEmpty = !getItemFromLocalStorage('name') && !getItemFromLocalStorage('age') ? true : false;
// If local storage is empty create and save new user from the API; (saveUser call to getUserFetch and get user from API)
if(localStorageIsEmpty){
    saveUser();
}

export default getUserFetch;