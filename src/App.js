// import './App.css';
import {Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import FamilyConnectList from './components/FamilyConnectList';


function App() {
  return (
<>
<NavBar />
<Routes>
  <Route path='/' element={<Login />} />
  <Route path='/postslist' element={<FamilyConnectList/>} />
</Routes>

</>
  );
}

export default App;
