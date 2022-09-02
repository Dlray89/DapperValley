import React, { lazy, Suspense } from 'react'
import Logo from '../../images/desktop/logo.png'
const FilterTabs = lazy(() => import('./filter-tabs/menu-filter')) 


const MenuHeader = lazy(() => import('./menu-header'))



const Menu = () => {

    return (
        <Suspense fallback={<div className='suspense-load'><img alt='logo of DR' className='suspense-load--img' src={Logo} /></div>}>
            <div className='menu'>
                <MenuHeader />
                <FilterTabs />
            </div>
        </Suspense>

    )
}

export default Menu