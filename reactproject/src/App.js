
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePageComponent from './Component/HomePage';
import LogInPageComponent from './Component/LogInPage';
import ForgetPasswordPageComponent from './Component/ForgetPasswordPage';
import ErrorPageComponent from './Component/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePageComponent />}/>
          <Route path="/loginpage" element={<LogInPageComponent />}/>
          <Route path="/forgetpasswordpage" element={<ForgetPasswordPageComponent />}/>
          <Route path="*" element={<ErrorPageComponent />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
