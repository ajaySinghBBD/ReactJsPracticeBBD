
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPageComponent from './Component/RegistrationPage';
import LogInPageComponent from './Component/LogInPage';
import ForgetPasswordPageComponent from './Component/ForgetPasswordPage';
import ErrorPageComponent from './Component/ErrorPage';
import HomePageComponent from './Component/HomePage';
import ForgetUsernamePageComponent from './Component/ForgetUsername';
import MainPageComponent from './Component/MainPage';
import Dashborad from './Component/MainPage/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePageComponent />} />
            <Route path="/signup" element={<SignUpPageComponent />} />
            <Route path="/loginpage" element={<LogInPageComponent />} />
            <Route path="/forgetpasswordpage" element={<ForgetPasswordPageComponent />} />
            <Route path="/forgetUsernamepage" element={<ForgetUsernamePageComponent />} />
            <Route path="/mainpage" element={<MainPageComponent />} />
            <Route path="/dashboard" element={<Dashborad />} />
            <Route path="*" element={<ErrorPageComponent />} />
          

        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
