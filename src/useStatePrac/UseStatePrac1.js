import { useState } from "react"
function UseStatePrac1() {
    const [count, setCount] = useState(0)
    //console.log(count,setCount);
    const increaseCount = () => {
        //console.log('test');
        setCount(count + 1)
    }
    return (
        <>
            <p>{count}</p>
            <button type="button" onClick={increaseCount}>Click me</button>
        </>
    )
}

export default UseStatePrac1
// function myUseState(p) {
//     return [p, function () { }]
// }
// const [val1, setVal1] = myUseState(12)// [0, function(){}]
//     console.log(val1, setVal1)
// const arr = [9, 10, 15]
// const val1 = arr[0]
// const val2 = arr[1]
// const val3 = arr[2]
// destructuring feature of es6
    //const arr = [1, 3, 4]
  //console.log(arr)
//   const [val, setVal] = myUseState(111111111111112)
//   console.log(val,setVal);