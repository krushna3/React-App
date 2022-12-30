import React from 'react'
const year = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className='w-100 bg-light text-center mt-5'>
                <p>© {year} React App All Rights Reserved | Terms And Condations </p>
            </footer>
        </>
    )
}

export default Footer