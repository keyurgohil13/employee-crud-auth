import { IS_LOADING, SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS, SIGN_OUT } from "../constant/actionTypes";

const initialState = {
    loading: false,
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case IS_LOADING:
            return {
                ...state,
                loading: true
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }

        case SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case SIGN_OUT:
            return {
                ...state,
                user: null,

            }

        case SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }

        case SIGNIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;