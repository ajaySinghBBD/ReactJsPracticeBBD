
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUpPageComponent from './Component/RegistrationPage';
import LogInPageComponent from './Component/LogInPage';
import ForgetPasswordPageComponent from './Component/ForgetPasswordPage';
import ErrorPageComponent from './Component/ErrorPage';
import HomePageComponent from './Component/HomePage';
import ForgetUsernamePageComponent from './Component/ForgetUsername';
import MainPageComponent from './Component/MainPage';
import Dashborad from './Component/MainPage/dashboard';
import { useContext} from 'react';
import UserContext from './contexthook/Contexthook_Api';




function App() {

  const contextobj = useContext(UserContext); 
  console.log(contextobj.user)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={!contextobj.user? <HomePageComponent /> : <Navigate to="/dashboard" />} />
            <Route path="/signup" element={<SignUpPageComponent />} />
            <Route path="/loginpage" element={<LogInPageComponent />} />
            <Route path="/forgetpasswordpage" element={<ForgetPasswordPageComponent />} />
            <Route path="/forgetUsernamepage" element={<ForgetUsernamePageComponent />} />
            <Route path="/mainpage" element={<MainPageComponent />} />
            <Route path="/dashboard" element={contextobj.user ? <Dashborad /> : <Navigate to="/" />} />
            <Route path="*" element={<ErrorPageComponent />} />
          </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
