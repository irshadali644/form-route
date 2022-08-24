import  'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
// import DummyApp from './components/DummyApp';
import NetlifyApp from './components/tours-netlify-app/NetlifyApp';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home';
import Products from './pages/Products';
import Item from './components/Item';
import NastedApp from './components/nested_route/NestedApp';
import MainApp from './components/accordion_project2/MainApp2';
import MainApp2 from './components/accordion_project2/MainApp2';
import EmpApp from './components/employes-details/EmpApp';
import CompanyApp from './components/company_details/CompanyApp';
import MainFormApp from './components/FormRoute/FormRoute/Pages/MainFormApp';
function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <div className="App">
          {/* <div className='container'>
           <div className='navigation'>
              <Link to="/home">Home</Link>
              <Link to="/products">Products</Link>
           </div>
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home data={count} onClickCount={setCount}/>}>
              <Route path='item' element={<Item/>}/>
            </Route>
            <Route path='/products' element={<Products/>}/>
          </Routes>
          </div> */}
          {/* <MainApp/> */}
          {/* <MainApp2/> */}
          {/* <EmpApp/> */}
          {/* <CompanyApp/> */}
          <MainFormApp/>
      </div>
    </BrowserRouter>
  );
}
export default App;



