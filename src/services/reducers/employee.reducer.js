import { CREATE_EMP, DELETE_EMP, GET_EMP, GET_INFO, UPDATE_EMP } from "../constant/actionTypes";

const initialState = {
    employeeList : [],
    employeeInfo : {}
}

const employeeReducer = (state = initialState, action) =>{

    switch(action.type){

        case CREATE_EMP : 
             const data = [...state.employeeList, action.payload];
             localStorage.setItem('employees', JSON.stringify(data));
            return {
                ...state,
                employeeList : [
                    ...state.employeeList,
                    action.payload
                ]
            }
            break;
        
        case GET_EMP : 
            const eData = localStorage.getItem('employees');
            if(eData == null){
                return {
                    ...state,
                    employeeList : []
                }
            }
            return {
                ...state,
                employeeList : JSON.parse(eData)
            }
            break;

        case UPDATE_EMP : 
            const empList = JSON.parse(localStorage.getItem('employees'));
            const updatedEmp = empList.map((emp) => {
                if(emp.id == action.payload.id){
                    return action.payload
                }
                return emp;
            });
            localStorage.setItem('employees', JSON.stringify(updatedEmp));
            return {
                ...state,
                employeeList : updatedEmp
            }
            break;

        case DELETE_EMP : 
            const deleteEmp = state.employeeList.filter((emp) => emp.id != action.payload);
            localStorage.setItem('employees', JSON.stringify(deleteEmp));
            return {
                ...state,
                employeeList: deleteEmp
            }
            
            break;

        case GET_INFO : 
             const iData = localStorage.getItem('employees');
                if(iData == null){
                    return {
                        ...state,
                        employeeInfo : []
                    }
                }
                else{
                    const emp = JSON.parse(iData).filter((emp) => emp.id == action.payload);
                    console.log(emp, "info");
                    return {
                        ...state,
                        employeeInfo : emp[0]
                    }
                }
             break;
             
        default : return state; 
    }
}

export default employeeReducer;