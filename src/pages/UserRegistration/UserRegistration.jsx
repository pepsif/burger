import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import styles from './UserRegistration.module.scss'
import { Button, Divider, Input } from 'antd';
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

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
    <div className='registration'>
     
      <div className={"container"+" "+ styles.user_registration_container}>

      <div className={styles.user_return_block}>
                    <Link to="/"  >
                        <div className={styles.home_link}>
                            <HomeIcon fontSize="large"/>
                            <span className={styles.return_title}>Повернутися на головну</span>
                        </div>
                    </Link>

                 
                </div>

        <h2 className={styles.user_reg_title}>{'Рєєстрація нового користувача'}</h2>
        
        <div className={styles.form_wrapper}>
          <Input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Ваше Ім'я" size="large" className="form_input mb-5" />
          <Input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Пароль" size="large" type="password" className="form_input" />
        </div>
        <div className={styles.buttons_block}>
          <Button onClick={() => doUserRegistration()} type="primary" className={styles.sign_button} color={'#208AEC'} size="large" >
            Sign Up
          </Button>

          <Link to="/user-login">
            <Button type="primary" className={styles.login_button} color={'#208AEC'} size="large" >
              Login
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};