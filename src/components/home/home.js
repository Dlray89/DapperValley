import React from 'react'
import CTAImg from './cta-img/cta-img'
import HomeHeader from './home-header/HomeHeader'
import MenuMain from './menu-card/menu-main'
import PrivateDining from './private-dining/private-dining'
import SubHeader from './sub-header-text/SubHeader'



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