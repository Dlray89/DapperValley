import React, { lazy } from 'react'



const SocialMedia = lazy(() => import('./social-media'))
const Title = lazy(() => import('./Title'))


const HomeHeader = () => {

    return(
        <div className='home__home-header'>
           <SocialMedia />
           <Title />
        </div>
    )
}

export default HomeHeader