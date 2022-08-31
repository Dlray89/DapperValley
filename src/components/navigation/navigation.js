import React from 'react'
import { lazy } from 'react'


const NavLinks = lazy(() => import('./navLinks'))
const NavLogo = lazy(() => import('./navLogo'))

const Navigation = () => {

    return(
        <div className='navigation'>
            <NavLogo  />
            <NavLinks />


        </div>
    )
}

export default Navigation