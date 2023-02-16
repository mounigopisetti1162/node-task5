import './App.css';
import {BrowserRouter,Routes,Route, useNavigate, Navigate} from 'react-router-dom'
import Forms from './form';
import Login from './login';
import Home from './home';
import Signup from './signup';
import CustomerForm from './sigup2';
import ReviewForm from './sigup2';
import Email from './email';
import { ToastContainer } from 'react-toastify';
import Formss from './form';
function App() {
  const navigate=useNavigate()
const forgot=()=>
{
  navigate('/login')
}

  return (
    <div className="App">
      {/* <ReviewForm /> */}
      <ToastContainer/>


      
      <Routes>
        <Route path='/reset-password/:id' element={<Formss/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/form'element={<Forms/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/verification'element={<Email/>}/>
        <Route path='/'element={<ReviewForm/>}/>
      
          </Routes>
         
    </div>
  );
}

export default App;
