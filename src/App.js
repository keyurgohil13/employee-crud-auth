import CreateEmp from './components/CreateEmployee/CreateEmp';
import Employee from './Pages/Employee/Employee';
import { Routes, Route } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee/ViewEmployee';
import EditEmp from './components/EditEmployee/EditEmployee';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <>

      <Header />
      <Routes>
        {/* <Employee /> */}
        <Route path='/' element={<ViewEmployee />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/createEmp' element={<CreateEmp />} />
        <Route path='/editEmp/:id' element={<EditEmp />} />
      </Routes>
    </>
  );
}

export default App;
