import React from "react";
import { navbarItems, navbarItemsNoSubmenu } from "../navbarItems";
import MenuItems from './MenuItems';

const Navbar = () => {

    return (
        <nav className="nav">
        <ul className="menus">
            {
                navbarItems.map((menuHead, index) =>{
                    return( 
                        <MenuItems menuHead={menuHead} key={index}/>
                    )
                })
            }
            <span className="divider" />
            {
                navbarItemsNoSubmenu.map((item, index) =>{
                    return( 
                        <li className="menu-items" key={index}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    )
                })
            }
        </ul>
                    
        </nav>
    );
};


export default Navbar;