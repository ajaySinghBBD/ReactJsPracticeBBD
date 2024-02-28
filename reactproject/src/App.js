
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPageComponent from './Component/RegistrationPage';
import LogInPageComponent from './Component/LogInPage';
import ForgetPasswordPageComponent from './Component/ForgetPasswordPage';
import ErrorPageComponent from './Component/ErrorPage';
import HomePageComponent from './Component/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePageComponent />}>
            <Route path="/signup" element={<SignUpPageComponent />} />
            <Route path="/loginpage" element={<LogInPageComponent />} />
            <Route path="/forgetpasswordpage" element={<ForgetPasswordPageComponent />} />
            <Route path="*" element={<ErrorPageComponent />} />
          </Route>

        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
