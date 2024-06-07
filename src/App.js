import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import Deleteproduct from './components/Deleteproduct';
import ViewAllProduct from './components/ViewAllProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

<Route path='/'  element={<AddProduct/>}  />
<Route path='/search'  element={<SearchProduct/>}  />
<Route path='/delete'  element={<Deleteproduct/>}  />
<Route path='/view'  element={<ViewAllProduct/>}  />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
