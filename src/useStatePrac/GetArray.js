import { useState } from "react"
const arr = [
    { name: 'A', id: 1 },
    { name: 'B', id: 2 },
    { name: 'C', id: 3 },
]
function Getarr() {
    let [val, setVal] = useState(0)
    //console.log(val);
    const left = () => {
        // console.log('one');
        val = val - 1;
        setVal(val)
    }
    const right = () => {
        // console.log('two')
        val = val + 1;
        setVal(val)
        console.log(val)
    }
    return (
        <>
            <h2>{arr[val].name + arr[val].id}</h2>
            <button type="button" onClick={left}>left</button>
            <button type="button" onClick={right}>right</button>
        </>
    )
}
export default Getarr