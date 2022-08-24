import { useState } from "react";

function AccordionInfo({data}) {
    // console.log(data)
   const [isActive, setActive] =  useState(false)
    return (
        <div>
            <div className='accordion'>
                <div className='header d-flex align-items-center justify-content-between'>
                    <h2>{data.title}</h2>
                    <button className='btn'  onClick={ () => setActive(!isActive)}>
                        {!isActive ? '+' : '-'}
                    </button>
                </div>
                <div className={"content "  + (!isActive && "hide")}>
                    {data.content}
                </div>
            </div>
        </div>
    )
}
export default AccordionInfo;
