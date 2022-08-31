import React from 'react'
import Steak from '../../../images/desktop/steak.jpg'








const MenuImg = () => {

    return(
        <div className='home__menu-main__img-box'>
            <img className='home__menu-main__img-box__img' src={Steak} alt='steak'  />
        </div>
    )
}

export default MenuImg