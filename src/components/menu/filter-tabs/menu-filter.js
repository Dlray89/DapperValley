import React, { useEffect, useState } from "react";




const FilterTabs = () => {
    const [filter, setFilter] = useState('All')
    const [toggle, setToggle] = useState(false)


    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // })

    const menuTabs = {
        "All":() => () => true,
        "Burgers": (item) => !item.type,
        "Steaks": (item) => item.type
    }
    const newMenu = Object.keys(menuTabs);
    return (
        <div className="menu__filter-btn">
            {newMenu.map((item) => (
                <div className="menu__filter-btn__btn-box">
                    <button 
                    className={item === filter ? "menu__filter-btn__btn-box__menu-true" : "menu__filter-btn__btn-box__menu-false"}
                    key={item}
                    onClick={() => {setFilter(item); setToggle(true)}} 
                    >{item}</button>
                    {console.log(item === filter)}
                </div>
            ))}
        </div>
    )
}

export default FilterTabs