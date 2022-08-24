import EmpData from "../empdata/EmpData"
function Home ({data,deleteItem, editSt}) {
    return (
        <div>
              <EmpData data={data} deleteItem={deleteItem} editSt={editSt} />
        </div>
    )
}

export default Home