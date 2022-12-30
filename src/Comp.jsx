import React from 'react'
import { NavLink } from 'react-router-dom'
import web from './imgs/home.svg'


const Comp = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center sec'>
                <div className='container-fluid' >
                    <div className='row'>
                        <div className='col-10 mx-auto mt-5'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>{props.tag}<strong className='brandName'> React App</strong></h1>
                                    <h5 className='my-3'>We are the team of talented developers making websites</h5>
                                    <div className='mt-3'>
                                        <NavLink to={props.link} className='btn btn-outline-info'>{props.btnName}</NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={web} className='img-fluid animated' alt='Home Image loading ....' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comp