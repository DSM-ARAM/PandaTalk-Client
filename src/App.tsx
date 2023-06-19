import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue, } from 'recoil';
import './App.css';
import { Header } from './components/common/header';
import { Navigate } from './components/common/navigate';
import { AlarmPage } from './pages/alarm';
import { LoginPage } from './pages/login';
import {MainPage} from './pages/main';
import { PeoplePage } from './pages/people';
import { SignupPage } from './pages/signup';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>

          <Route element={<Header/>}>
            <Route element={<Navigate/>}>
              <Route path='/main' element={<MainPage/>}/>
              <Route path='/alarm' element={<AlarmPage/>}/>
              <Route path='/people' element={<PeoplePage/>}/>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;