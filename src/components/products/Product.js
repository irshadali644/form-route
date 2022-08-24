import Details from "./Details"
import Tabs from "./tabs/Tabs";
import './style.css'
import { useState } from "react";
const companyDtls = [
    { name: 'ABC', id: 1, product: 'jonson' },
    { name: 'Google', id: 2, product: 'G-play' },
    { name: 'facebook', id: 3, product: 'Instagram' },
]

const foundElemm = companyDtls.find(element => {
    return element 
})
console.log(foundElemm)
//   console.log(foundElemm)

const companyName = companyDtls.map((item) => {
    //  console.log(item);
    return item.name
})
function Product() {
    const [val, setVal] = useState(companyDtls[0])
    const changeTab = (text) => {
        const currentData = companyDtls.filter((item) => {
            if (item.name === text) {
                return true
            }
            console.log(text)
        })
        console.log(currentData)
        setVal(currentData[0])
    }
    return (
        <section className="container">
            <Tabs data={companyName} onChangeTab={changeTab} />
            {/* <Tab/> */}
            <Details data={val} />
        </section>
    )
}

export default Product;