import React from "react";
import dot from '../../images/desktop/menu-pics/dot.png'



const MenuHeader = () => {

    return(
        <div className="menu__header">
            <h2 className="menu__header__title">Menu</h2>
            <div className="menu__header__subheaders">
                <p className="menu__header__subheaders__text">Burgers</p> 
                <div className="menu__header__subheaders__img-box"><img  className="menu__header__subheaders__img-box__img" src={dot} /> </div>
                <p className="menu__header__subheaders__text">Steaks</p>
                <div className="menu__header__subheaders__img-box"><img  className="menu__header__subheaders__img-box__img" src={dot} /> </div>
                <div className="menu__header__subheaders__text">Desserts</div>
            </div>
        </div>
    )
}

export default MenuHeader