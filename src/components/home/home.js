import React, { lazy } from 'react'




const CTAImg = lazy(() => import('./cta-img/cta-img')) 
const HomeHeader = lazy(() => import( './home-header/HomeHeader'))
const MenuMain = lazy(() => import('./menu-card/menu-main')) 
const PrivateDining = lazy(() => import('./private-dining/private-dining')) 
const SubHeader = lazy(() => import( './sub-header-text/SubHeader'))



const Home = () => {

    return(
        <div className='home'>
            <HomeHeader  />
            <SubHeader  />
            <MenuMain  />
            <CTAImg />
            <PrivateDining />
        </div>
    )
}

export default Home