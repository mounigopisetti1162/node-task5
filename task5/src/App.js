import './App.css';
import {BrowserRouter,Routes,Route, useNavigate, Navigate} from 'react-router-dom'
import Form from './form';
import Login from './login';
import Home from './home';
import Signup from './signup';
import CustomerForm from './sigup2';
import ReviewForm from './sigup2';

function App() {
  const navigate=useNavigate()
const forgot=()=>
{
  navigate('/login')
}
  return (
    <div className="App">
      {/* <ReviewForm /> */}

      
      <Routes>
        <Route path='/reset-password/:id/:token'element={<Form/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/form'element={<Form/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/'element={<ReviewForm/>}/>
      
          </Routes>
    </div>
  );
}

export default App;
