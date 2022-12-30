import React from 'react'
import Card from './Card'
import Sdta from './Sdta'
const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Service</h1>
            </div>

            <div className='cards'>
                {Sdta.map((val, idx) => {
                    return <Card key={idx} img={val.img} title={val.title} />
                })}
            </div>
        </>
    )
}

export default Service