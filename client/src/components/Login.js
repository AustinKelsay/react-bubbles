import React from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const credentials = { username: 'Lambda School', password: 'i<3Lambd4' }

  const login = e => {
      e.preventDefault();
      //make a post request and send the credentials object to the API
      axiosWithAuth()
      .post('/api/login', credentials)
      .then((res) => {
          console.log(res);
          if (!window.localStorage.getItem('token')) {
              window.localStorage.setItem('token', res.data.payload)
              //navigate the user to the /protectedRoute (whatever landing page you have for login)
              props.history.push('/bubbles')
          } else {
              props.history.push('/bubbles')
          }
      })
      .catch(err => console.log(err))
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
