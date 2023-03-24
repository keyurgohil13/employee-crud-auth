import { CREATE_EMP, GET_EMP, DELETE_EMP, GET_INFO, UPDATE_EMP } from "../constant/actionTypes";

export const createEmployee = (data) =>{
    return {
        type : CREATE_EMP,
        payload:data
    }
}

export const getEmployee = () => {
    return {
        type : GET_EMP
    }
}

export const getEmployeeInfo = (id) => {
    console.log("Emp ID", id);
    return {
        type : GET_INFO,
        payload : id
    }
}

export const updateEmp = (data) => {
    return {
        type : UPDATE_EMP,
        payload : data
    }
}

export const deleteEmployee = (id) => {
    return {
        type : DELETE_EMP,
        payload : id
    }
}