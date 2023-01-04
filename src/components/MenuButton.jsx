import React from "react";
import CollapseArrowIcon from "./CollapseArrowIcon";
import {headerAndFooterBiLogger, headerBiConf} from '../bi.js';

const MenuButton = ({isExpanded, expandedSetter, title}) =>{
    return(
        <button type="button"
               aria-haspopup="menu"
               aria-expanded={isExpanded? 'true':'false'}
               style={isExpanded? {color:"#166AEA", borderBottom: '1px solid #166AEA'}:{color:"#000000"}}
               onClick={() => {expandedSetter((prev) => {
                const biFields = {
                    button_name:title,
                    tab:title
                
                }
                headerAndFooterBiLogger.log({
                    evid:headerBiConf.wixHeaderAction,
                    ...biFields

                })
                return !prev
            })}}
               >
                {title}{' '}
                <CollapseArrowIcon isExpanded={isExpanded} fill={isExpanded? "#166AEA":"#000000"} width={10} height={10}/>
              </button>
    )
}

export default MenuButton;
