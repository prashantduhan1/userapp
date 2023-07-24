
import './App.css';
import UserAccountList from './components/UserAccountList';
import Profile from './components/Profile';
import {  Router, Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<UserAccountList />}></Route> 
      <Route exact path="/profile" element={<Profile />} />
     </Routes>

    </div>
  );
}

export default App;
