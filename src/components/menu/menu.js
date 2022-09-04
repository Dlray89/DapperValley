import React, { lazy, Suspense, useState } from 'react'
import Logo from '../../images/desktop/logo.png'



const FilterTabs = lazy(() => import('./filter-tabs/menu-filter')) 
const MenuHeader = lazy(() => import('./menu-header'))
const MenuItems = lazy(() => import('./menu-items'))



const Menu = () => {
    const [filter, setFilter] = useState('Burgers')
    const [toggle, setToggle] = useState(false)

    const menuTabs = {
        "All":() => true,
        "Burgers": (item) => !item.type,
        "Steaks": (item) => item.type
    }

    const newMenu = Object.keys(menuTabs);

    return (
        <Suspense fallback={<div className='suspense-load'><img alt='logo of DR' className='suspense-load--img' src={Logo} /></div>}>
            <div className='menu'>
                <MenuHeader />
                <FilterTabs 
                filter={filter} 
                setFilter={setFilter} 
                setToggle={setToggle} 
                newMenu={newMenu}
                toggle={toggle}
                />
                <MenuItems menuTabs={menuTabs} filter={filter} />
            </div>
        </Suspense>

    )
}

export default Menu