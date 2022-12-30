import React from 'react'
import Comp from './Comp'


const About = () => {
    return (
        <>
            <Comp
                tag='Welcome To About Page'
                btnName='Contact us'
                link='/contact'
            />
        </>
    )
}

export default About