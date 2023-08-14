import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import './UserRegistration.module.scss'
import { Button, Divider, Input } from 'antd';
import {Link} from "react-router-dom";

export const UserRegistration = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Functions used by the screen components
  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      // Since the signUp method returns a Promise, we need to call it using await
      const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      return true;
    } catch (error) {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error!${error}`);
      return false;
    }
  };

  return (
    <div>
      <div className="header">
        <img
          className="header_logo"
          alt="Back4App Logo"
          src={
            'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png'
          }
        />

      </div>
      <div className="container">
        <h2 className="heading">{'Рєєстрація нового користувача'}</h2>
        
        <div className="form_wrapper mb-20">
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Ваше Ім'я"
            size="large"
            className="form_input mb-5"
          />
          <Input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
            size="large"
            type="password"
            className="form_input"
          />
        </div>
        <div className="form_buttons">
          <Button
            onClick={() => doUserRegistration()}
            type="primary"
            className="form_button"
            color={'#208AEC'}
            size="large"
          >
            Sign Up
          </Button>

          <Link to="/user-login">
            <Button

                type="primary"
                className="form_button ml-20"
                color={'#208AEC'}
                size="large"
            >
              Login
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};