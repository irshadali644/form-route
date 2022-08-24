import { useState } from "react";

function UseStatePrac() {
   const [count, setCount] = useState(0);
   const increaseCount = ()=> {
       setCount(count + 2)
   }
    console.log('UseStatePrac render---')
    return (
        <>
            <h2>UseStatePrac {count}</h2>
            <button type="button" onClick={increaseCount}>Increase count</button>
        </>
    )
}
export default UseStatePrac;

// function myUseState(p) {
//     return [p, function(){}]
// }
// const [val1, setVal1]  = myUseState(0)// [0, function(){}]
// console.log(val1, setVal1)
// const arr = [9, 10, 15]
// const val1 = arr[0]
// const val2 = arr[1]
// const val3 = arr[2]
// destructuring feature of es6
