
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/signup' element={<SignUp/>}/>
   <Route path='/signin' element={<SignIn/>}/>
   </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
