import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //give login facility after sign up
        return this.login({email,password});
      } else {  
        return userAccount;
      }
    } catch (error) {
      console.log("Error in createAccount:-");
      console.log(error);
      throw error;
    }
  }

  async getCurrentUser(){//get currently logged in user's data
    try {
          return await this.account.get();
    } catch (error) {
        console.log("Error in GetUser:-");
        console.log(error);
        throw(error);
    }
  }
  async login({email,password}){
    try {
       return await this.account.createEmailSession(email,password)//will handle the result afterwards
    } catch (err) {
        console.log("Error During Login:- ");
        console.log(err);
        throw(err);
    }
  }

  async logout(){
    try {
        return await this.account.deleteSessions('all');
    } catch (err) {
        console.log("Error During Logout:- ");
        console.log(err);
        throw(err);
    }
  }
}

const authService=new AuthService();
export default authService;//exporting the object
