import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue, } from 'recoil';
import './App.css';
import { Header } from './components/common/header';
import { Navigate } from './components/common/navigate';
import { AccessAlarmPage } from './pages/accessAlarm';
import { AlarmPage } from './pages/alarm';
import { AnotherDetailPage } from './pages/anotherDetail';
import { DetailPage } from './pages/detail';
import { LoginPage } from './pages/login';
import {MainPage} from './pages/main';
import { PeoplePage } from './pages/people';
import { ResultPage } from './pages/result';
import { SignupPage } from './pages/signup';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/anotherDetail' element={<AnotherDetailPage/>}/>

          <Route element={<Header/>}>
            <Route element={<Navigate/>}>
              <Route path='/main' element={<MainPage/>}/>
              <Route path='/alarm' element={<AlarmPage/>}/>
              <Route path='/people' element={<PeoplePage/>}/>
              <Route path='/result' element={<ResultPage/>} />
              <Route path='/alarm/access' element={<AccessAlarmPage />}/>
              <Route path='/result/detail' element={<DetailPage/>}/>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;