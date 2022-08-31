import Instagram from '../../../images/desktop/instagram.png'
import Twitter from '../../../images/desktop/twitter.png'
import Facebook from '../../../images/desktop/facebook.png'

const SocialMediaLinks = () => {

    return(
        <div className='home__home-header__social-media'>
            <div className='home__home-header__social-media__logo-box' >
                <img className='home__home-header__social-media__logo-box--logo'  src={Instagram} alt='instagram logo' />
            </div>

            <div className='home__home-header__social-media__logo-box'> 
                 <img className='home__home-header__social-media__logo-box--logo' src={Facebook} alt='facebook logo'  /> 
            </div>
            
            <div className='home__home-header__social-media__logo-box'> 
                <img className='home__home-header__social-media__logo-box--logo' src={Twitter} alt='twitter logo' /> 
            </div>
        </div>
    )
}

export default SocialMediaLinks