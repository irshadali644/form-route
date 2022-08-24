import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import Form from "../Comps/Form"

function FormPage({ data, onSubmitHandler }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [profile, setProfile] = useState('')

    const params = useParams()

    useEffect(()=> {
       const selectedData= data.filter((item)=> {
            if (item.id === params.id) {
                return true
            }
        })
        setName(selectedData[0].name)
        setAge(selectedData[0].age)
        setProfile(selectedData[0].profile)
    }, [params])

    const changeHandlerN = (event)=> {
        setName(event.target.value)
    }
    const changeHandlerage = (event)=> {
        setAge(event.target.value)
    }
    const changeHandlerProfile = (event)=> {
        setProfile(event.target.value)
    }
    
    const onSubmitD = ()=> {
        const obj = {id: params.id, name, age, profile}
        onSubmitHandler(obj)
    }
    return (
        <div className="form_section">
            <h6> Updated Form ID: {params.id}</h6>
            
            <div className='form_wrapper'>
            <form className='d-flex align-items-center'>
                <input className='form-control' name='name' placeholder="name" value={name} onChange={changeHandlerN} />
                <input  className='form-control' name='age' placeholder="age" value={age} onChange={changeHandlerage}/>
                <input  className='form-control' name='profile' placeholder="profile" value={profile} onChange={changeHandlerProfile} />
                <button type="button" className='btn btn-warning' onClick={onSubmitD}>Update</button>
            </form>

        </div>
        </div>
    )
}
export default FormPage
