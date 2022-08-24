import { Outlet } from "react-router-dom"
import Table from "../Comps/Table"

function Students({ data, removeItem, editSt }) {
    return (
        <div>
            <h5 className="mt-3 mb-2">Students page</h5>
            <Table data={data} removeItem={removeItem} editSt={editSt} />
            <Outlet></Outlet>
        </div>
    )
}
export default Students