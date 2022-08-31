import React from 'react'
import { Link } from 'react-router-dom'

const Links = [
    {id:1, name:'Home', path:'/'},
    {id:2, name:'Menu', path:'/menu'},
    {id:3, name:"Private Dinning", path:'/private-dinning'},
    {id:4, name:'About', path:'/about'}
]

const NavigationLinks = () => {
    

    return(
        <div className='navigation__nav-links'>
            {Links.map(link => (
                <>
                <Link className='navigation__nav-links__link' to={link.path}>
                  {link.name}
                </Link>
                </>
            ))}
            
        </div>
    )
}

export default NavigationLinks