import { useEffect, useState } from 'react'
import '../Pages/All.css'
function Form({ stData, updateObj, onSubmitHandler}) {
    // console.log(stData);
    // console.log(stData[0].id);
    const [inputval, setInputval] = useState({id:'' , name: '', age: '', profile: '' })
    useEffect(() => {
        if (stData.length === 0) {
            setInputval({id:'' , name: '', age: '', profile: '' })
        }
        else{
            setInputval ({id: stData[0].id, name: stData[0].name, age: stData[0].age, profile: stData[0].profile})
        }
        
    }, [stData])
    const onChangeHandler = (e) => {
        const obj = { ...inputval }
        const val = e.target.value
        obj[e.target.name] = val
        setInputval(obj)
        // console.log(e.target.name ,e.target.value );
        // console.log(e.target);
    }
    const updateForm = (e) => {
        e.preventDefault()
        // console.log(inputval)
        onSubmitHandler(inputval) 
    }
    return (
        <div className='form_wrapper'>
            <form className='d-flex align-items-center' onSubmit={updateForm}>
                <input className='form-control' name='name' placeholder="name" value={inputval.name} onChange={onChangeHandler} />
                <input  className='form-control' name='age' placeholder="age" value={inputval.age} onChange={onChangeHandler} />
                <input  className='form-control' name='profile' placeholder="profile" value={inputval.profile} onChange={onChangeHandler} />
                <button className='btn btn-warning' onClick={() => {updateObj(inputval) }}>Update</button>
            </form>

        </div>
    )
}
export default Form