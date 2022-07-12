import React from 'react';
import firebase from 'firebase/app';
import { auth } from "../firebase";
import google from "../assets/google.svg";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to SooZoo!</h2>
                <div className={styles.button} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} alt="google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;