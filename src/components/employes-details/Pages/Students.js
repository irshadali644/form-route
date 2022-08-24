import { useState } from 'react';
import '../employes.css'
import StudentList from './students_details/StudentList';
import {useNavigate,Outlet} from 'react-router-dom';
const empDetails = [
    { id: '1', name: 'Aman', age: '20', profile: 'Developer' },
    { id: '2', name: 'Anas', age: '2', profile: 'Designer' },
    { id: '3', name: 'Herry', age: '30', profile: 'Tester' },
    { id: '4', name: 'Deepak', age: '30', profile: 'PHP Developer' }
]
function Students() {
    const [students, setStudents] = useState(empDetails)
    const navigate = useNavigate()
    //function
    const deleteItem = (id) => {
        const newSts = students.filter((students) => {
            return students.id !== id
        })
        setStudents(newSts)
        // console.log(newSts)
    }
    const editStu = (id) => {
        navigate(`edit/${id}`)
        //  console.log(id)
    }

    return (
        <div>
            <table border="1" className="w-100 mt-3 table_data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((item, i) => {
                        return <StudentList data={item} key={i} index={i} deleteItem={deleteItem} editStu={editStu} />
                    })}
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}
export default Students;

