import logo from './logo.svg';
import './App.css';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import Mynav from './component/Mynav';
import Myslider from './component/Myslider';
import Section from './component/Section';
import { Navigate, Route, Routes } from 'react-router-dom';
import Myfooter from './component/Myfooter';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './component/Products';
import Errorpage from './Pages/Errorpage';
import Productdetials from './Pages/Productdetials';

function App() {
  return (
    <div >
    <Mynav />
    <Routes>
      <Route path='home' element={<Home/>} />
      <Route path='/' element={<Navigate to ="/home"/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='product/:id' element={<Productdetials/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
   

    <Myfooter/>
   
    
    
    </div>
  );
}

export default App;
