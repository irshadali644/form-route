import { Outlet } from 'react-router-dom';
import EmpList from './emp-list/EmpList';
import './empdata.css'
function EmpData ({data,deleteItem, editSt}) {
    // console.log(data)
    return(
        <div>
            <table className="table mt-2 w-75 m-auto"  border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {data.map ( (item, i) => {
                        return <EmpList data={item} key={i} deleteItem={deleteItem} editSt={editSt}/>
                   })}
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}

export default EmpData;