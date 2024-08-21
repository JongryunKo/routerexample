import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/about' element={<Aboutpage/>}></Route>
          <Route path='/products' element={<ProductPage/>}></Route>
          <Route path='/products/:id' element={<ProductDetailPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
