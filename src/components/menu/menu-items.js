import React from "react";
import CTAImg from "../home/cta-img/cta-img";
import { menu_items } from './menu-data/meniItems';



const MenuItems = ({ menuTabs, filter }) => {

    return (
        <div className="menu">
            <div className="menu__burgers">  
            {menu_items.burgers.filter(menuTabs[filter]).map(item => (
                <div key={item.key} className="menu__burgers__item-box">
                    
                    <h4 className="menu__burgers__item-box__title">{item.name}</h4>
                    <p className="menu__burgers__item-box__text">{item.description}</p>

                </div>
            ))}
            </div>

            <div className="menu__burgers">
                {menu_items.steaks.filter(menuTabs[filter]).map(item => (
                    <div className="menu__burgers__item-box" key={item.id} >
                        
                        <h4 className="menu__burgers__item-box__title">{item.name}</h4>
                        <p>{item.description}</p>

                    </div>
                ))}
            </div>

            <CTAImg />




        </div>
    )
}

export default MenuItems