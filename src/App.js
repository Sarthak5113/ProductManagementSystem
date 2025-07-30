
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componet/Navbar';
import AddProduct from './componet/AddProduct';
import Home from './componet/Home';
import EditProduct from './componet/EditProduct';
import Login from './componet/Login';

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/addProduct' element={<AddProduct/>}> </Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}> </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </>
  ); 
}

export default App;
