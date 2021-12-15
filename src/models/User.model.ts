import { makeAutoObservable } from "mobx";

export default class UserModel {
  public name: string;
  public age: number;

  // Define what the UserModel contains;
  constructor(name: string = "", age: number = 0) {

    // Make the class fields (variables) auto observable (auto watching);
    makeAutoObservable(this);
    this.name = name;
    this.age = age;
  }
  
  // Give the ability to update the name
  set Name(value: string) {
    this.name = value;
  }
  
  // Give the ability to update the age
  set Age(value: number) {
    this.age = value;
  }

  // Give the ability to read the name
  get Name(): string {
    return this.name;
  }
  
  // Give the ability to read the age
  get Age(): number {
    return this.age;
  }
}

export const newUserModel = new UserModel('', 0);
