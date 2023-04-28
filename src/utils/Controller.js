import axios from "axios";
import { registerRoute, loginRoute, getUserRoute } from "./APIRoutes";

export const register = async (values) => {
  try {

    const {username, email, password} = values;
    const data = await axios.post(registerRoute, {username, email, password});
    return data;
   

  } catch (error) {
    console.log(error);
  }
};

export const login = async (values) => {
  try {

    const {email, password} = values;
    const data = await axios.post(loginRoute, {email, password});
    return data;
   

  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (rol) => {
  try {

    const data = await axios.get(`${getUserRoute}/${rol}`);
    return data;
   

  } catch (error) {
    console.log(error);
  }
};

