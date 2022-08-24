import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import About from './pages/AboutUs';
import './company.css'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { useState } from 'react';
import EditForm from './pages/EditForm';
const companyDetails = [
  {id:1, name: 'Aman', age: 20, profile: 'Developer' },
  {id:2, name: 'Anasri', age: 23, profile: 'Designer' },
  {id:3, name: 'Anas', age: 25, profile: 'App Developer' },

]

function CompanyApp() {
 const [data,setData] =  useState(companyDetails)
 const navigate = useNavigate()
 const deleteItem = (id) => {
    const newArr = data.filter( (item) => {
      return item.id !==id
    })
    setData(newArr)
 }
 const editSt = (id) =>{
  navigate(`Edit/${id}`)
 }
  return (
    <div>
      <nav className='navigation'>
        <div className='container'>
          <Link to='/'>Home</Link>
          <Link to='/about-us'>Abount Us</Link>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home data={data} deleteItem={deleteItem} editSt={editSt}/> } >
            <Route path='Edit/id' element={<EditForm data={data}/>}/>
          </Route>
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </div>
    </div >
  )
}
export default CompanyApp;