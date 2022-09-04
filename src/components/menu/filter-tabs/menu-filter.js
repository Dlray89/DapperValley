import React, { useEffect, useState } from "react";




const FilterTabs = ({filter, setFilter, setToggle, newMenu}) => {
  


    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // })

 
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