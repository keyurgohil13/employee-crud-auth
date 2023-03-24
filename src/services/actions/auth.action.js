import { IS_LOADING, SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS, SIGN_OUT } from "../constant/actionTypes";
import firebase, { app } from '../myFirebase';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

const loading = () => {
    return {
        type: IS_LOADING
    }
}

const signUpSuccess = (user) => {

    return {
        type: SIGNUP_SUCCESS,
        payload: user
    }
}

const signUpFail = (error) => {

    return {
        type: SIGNUP_ERROR,
        payload: error
    }
}

const logOut = () =>{
    return {
        type: SIGN_OUT
    }
}

const logInSuccess = (user) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: user
    }
}

const logInFail = (error) =>{
    return {
        type: SIGNIN_ERROR,
        payload: error
    }
}

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signUpInitiate = (email, password) => dispatch => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);   
        dispatch(signUpSuccess(user));     
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
        dispatch(signUpFail(error.message))
      });
  };

  export const signOutInitiate = () => {
    return async dispatch => {
        await signOut(auth).then(() => {
            dispatch(logOut());
        }
        );
    }
  }

  export const logInInitiate = (email, password) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("SignIN ", user);
            dispatch(logInSuccess(user));
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error ocured: ", error.code);
            dispatch(logInFail(error.code))
          });
    }
  }

 export const signInWithGoogle = () => {
    return dispatch => {
        signInWithPopup(auth, provider).then((userCredential)=>{
            console.log("userCredential",userCredential);
        })
    }
 }