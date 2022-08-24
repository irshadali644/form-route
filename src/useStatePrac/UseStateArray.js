import { useState } from "react"
import './Getarr.css'

// const arr = [
//     { name: 'A', id: 1 },
//     { name: 'B', id: 2 },
//     { name: 'C', id: 3 },
//     { name: 'D', id: 4 },
//     { name: 'E', id: 5 },
//     { name: 'F', id: 6 }
// ]
function UseStateArr() {
  const [val, setVal] = useState(0)
  const [inputVal, setInputVal] = useState('')
  
  const increaseCount = () => {
    setVal(val + 1)
  }
  const onChangeHandler = (event)=> {
    setInputVal(event.target.value)
  }
  console.log('use state array render---');
  return (
    <>
      <h2>
        test
        <span>{val}</span>
        <span>{inputVal}</span>
      </h2>
      <input type='text' placeholder="enter username"  value={inputVal} onChange={onChangeHandler}/>
      
      <button onClick={increaseCount}>click me </button>
    </>
  )
}
export default UseStateArr