import { useState } from 'react';
import './Getarr.css'

const stulist = [
  { name: 'john', id: 10 },
  { name: 'vickey', id: 10 },
  { name: 'dick', id: 10 },

]
function UncontrolledSearch() {
  const [data, setData] = useState(stulist)
  const [inputVal, setInputVal] = useState('')
  
  // const showdata = () => {
  //   const newData = 
  // }
    const onchangehandler = (event) => {
        //console.log('test')
        setInputVal(event.target.value)
    }
    const handleSearch = ()=> {
      
      const filteredData = stulist.filter((item)=> {
        if (item.name === inputVal) {
          return true
        }
        if (!inputVal) {
          return true
        }
      })
      setData(filteredData)
      console.log(filteredData)
    }
  return (
    <>
      <div className='form-container'>
        <div className='form'>
          <input type="text" value={inputVal} onChange={onchangehandler} />
          <button type='button' onClick={handleSearch}>Search</button>
        </div>

        <div className='showdata'>
          <h2>Header</h2>
          {data.map((item, i) => {
            // { console.log(item) }
            return <div key={i}>{item.name}{item.id}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default UncontrolledSearch;