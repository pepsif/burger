import  {useState} from "react";
import styles from "./userLogin.module.scss"
import Parse from "parse/dist/parse.min.js";
import {useSelector, useDispatch} from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom";
import {Button,  Input} from "antd";
import {setUserAuth} from "../../redux/UserSlice/UserSlice";

export const UserLogin = () => {
    const dispatch = useDispatch();
    const userAuth = useSelector((state) => state.user.userAuth);
   
    // State variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(userAuth);


       if(Parse.User.current() !== null) {
           dispatch(setUserAuth(true));
       } else {
           dispatch(setUserAuth(false));
       }
    // Function that will return current user and also update current username
    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);

        return currentUser;
    };

    const doUserLogIn = async function () {
        // Note that these values come from state variables that we've declared before
        const usernameValue = username;
        const passwordValue = password;
        try {
            const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
            // logIn returns the corresponding ParseUser object
            alert(
                `Success! User ${loggedInUser.get(
                    "username"
                )} has successfully signed in!`
            );
            // To verify that this is in fact the current user, `current` can be used
            const currentUser = await Parse.User.current();
            console.log(loggedInUser === currentUser);
            // Clear input fields
            setUsername("");
            setPassword("");
            // Update state variable holding current user
            await getCurrentUser();

            if (currentUser != null) {
                dispatch(setUserAuth(true));
            } else {
                dispatch(setUserAuth(false));
            }
            return true;
        } catch (error) {
            // Error can be caused by wrong parameters or lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
        }
    };
    const doUserLogOut = async function () {
        try {
            await Parse.User.logOut();
            // To verify that current user is now empty, currentAsync can be used
            const currentUser = await Parse.User.current();
            if (currentUser === null) {
                alert("Success! No user is logged in anymore!");
            }
            // Update state variable holding current user
            getCurrentUser();
            return true;
        } catch (error) {
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    return (
        <section className={styles.user_section}>

            <div className={"container"+" "+ styles.user_container}>
                <div className={styles.user_top_block}>
                    <Link to="/"  >
                        <div className={styles.home_link}>
                            <HomeIcon fontSize="large"/>
                            <span className={styles.return_title}>Повернутися на головну</span>
                        </div>
                    </Link>

                    {userAuth === true && <Button
                        onClick={() => doUserLogOut()}
                        type="primary"
                        className="form_button"
                        color={"#208AEC"}
                        size="small"
                    >
                        Log Out
                    </Button>}
                </div>

                {userAuth === false && (
                    <>
                        <h3 className={styles.user_title}>{"Вхід в аккаунт"}</h3>
                        <div className={styles.form_wrapper}>
                            <Input
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder="Username"
                                size="large"
                                className={styles.form_input}
                            />
                            <Input
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                                size="large"
                                type="password"
                                className={styles.form_input}
                            />
                        </div>
                                                    <Button
                                onClick={() => doUserLogIn()}
                                type="primary"
                                className={styles.form_button}
                                color={"#208AEC"}
                                size="large"
                                block
                            >
                                Log In
                            </Button>
                                            </>
                )}

                {userAuth === true && (
                    <>
                        <h3 className="user_name">{"Кабінет користувача"}</h3>
                        <h3 className="user_title">{`Доброго дня ${Parse.User.current().attributes.username}!`}</h3>

                        <div className={styles.userBlock}>
                            user info
                        </div>
                    </>
                )}
                    <a className={styles.form_hint} href="user-registration">
                        Не маєте аккаунта? <i>Зарєєструватися</i>
                    </a>
            </div>

        </section>
    );
};
