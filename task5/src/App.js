import './App.css';
import {BrowserRouter,Routes,Route, useNavigate, Navigate} from 'react-router-dom'
import Form from './form';
import Login from './login';
import Home from './home';
import Signup from './signup';
import CustomerForm from './sigup2';

function App() {
  const navigate=useNavigate()
const forgot=()=>
{
  navigate('/login')
}
  return (
    <div className="App">
      <button onClick={forgot}>Login-forgot</button>

      <h1>this is the page for forgoten password</h1>
      
      <Routes>
        <Route path='/reset-password/:id/:token'element={<Form/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/form'element={<Form/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/signup'element={<Signup/>}/>
      
          </Routes>
    </div>
  );
}

export default App;
