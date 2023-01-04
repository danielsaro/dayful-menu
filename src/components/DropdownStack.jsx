import React from "react"
import Dropdown from "./Dropdown"

const DropdownStack = ( {tab, menuHead, isExpanded}) => {
    console.log("tab name in ddstack", tab);
    return(
        <div className='menu-stack' >
                {menuHead.submenu.map((innerHead, index) => {
                  if(index === menuHead.submenu.length - 1 ){
                    return <Dropdown relatedTab={tab} isExpanded={isExpanded} menuHead={innerHead} key={index} />
                  }
                    return (
                    <>
                      <Dropdown relatedTab={tab} isExpanded={isExpanded} menuHead={innerHead} key={index} />
                      <span className={`dividerDropdown ${isExpanded? "showDiv":""}`}  />
                    </>
                    )
                }
                )}
        </div>
    )
}

export default DropdownStack;