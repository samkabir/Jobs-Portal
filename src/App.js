import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CreateJobs from './Components/DashBoard/CreateJobs/CreateJobs';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Jobs from './Components/DashBoard/Jobs/Jobs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login.js';
import PageNotFound from './Components/Shared/PageNotFound/PageNotFound';
import SignUp from './Components/SignUp/SignUp.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} >
              <Route path="/dashboard" element={<Jobs />}>
                  <Route path="jobs" element={<Jobs />} />
              </Route>
          </Route>

          {/* <Route path="/jobs" element={<Jobs />} />
          <Route path="/createjobs" element={<CreateJobs />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
