import { useState } from "react"
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom"
import Products from "./Products"
import Students from "./Students"
import '../Pages/All.css'
import FormPage from "./FormPage"

const students = [
    { id: '1', name: 'Aman', age: 20, profile: ' Developer' },
    { id: '2', name: 'Anas', age: 22, profile: ' Deginer' },
    { id: '3', name: 'Ansari', age: 24, profile: 'PHP Developer' },
    { id: '4', name: 'Herry', age: 25, profile: 'HR' },
    { id: '5', name: 'Tom', age: 25, profile: 'Tester' },
]

function MainFormApp() {
    const navigate = useNavigate()
    const params = useParams()
    const [stData, setStData] = useState(students)

    const removeItem = (id) => {
        const newArr = stData.filter((item) => {
            return item.id !== id
        })
        setStData(newArr)
        navigate('/')
    }

    const editSt = (id) => {
        navigate(`edit/${id}`)

    }

    const updateObj = (obj) => {
        console.log(obj)
        const updatedData = stData.map((item)=> {
            if (item.id === obj.id) {
                return obj
            } else {
               return item
            }
        })
        setStData(updatedData)
    }

    return (
        <div>
            <nav className="navigation">
                <div className="container">
                    <Link to='/'>Students</Link>
                    <Link to='/Products'>Products</Link>
                </div>
            </nav>
            <div className="container">
                <Routes >
                    <Route path="/" element={<Students data={stData} removeItem={removeItem} editSt={editSt} />} >
                        <Route path="Edit/:id" element={<FormPage data={stData} onSubmitHandler={updateObj} />} />
                    </Route>
                    <Route path="/Products" element={<Products />} />
                </Routes>
            </div>

        </div>
    )
}
export default MainFormApp