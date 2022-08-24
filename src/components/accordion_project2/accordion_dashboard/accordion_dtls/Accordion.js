import { useState } from "react"
function Accordion ({data}) {
   const [isActive, setActive] =  useState(false)
    // console.log(data)
    return (
        <div>
            <div className='accodion_dtls mb-3'>
                <div className='header d-flex align-items-center justify-content-between'>
                    <h2>{data.title}</h2>
                    <button className='btn' onClick={ () => setActive(!isActive)}>
                        {!isActive ? '+' : '-'}
                    </button>
                </div>
                <div className={'content ' + (!isActive && 'hide ')}>
                    {data.content}
                </div>
            </div>
          
        </div>
    )
}

export default Accordion