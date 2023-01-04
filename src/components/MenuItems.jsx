import React, { useState, useRef, useEffect }  from 'react';
import DropdownStack from './DropdownStack';
import MenuButton from './MenuButton';

const MenuItems = ({menuHead}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const menuRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target) &&buttonRef.current && !buttonRef.current.contains(event.target)){
          setIsExpanded((prevExpanded) => {
            if(prevExpanded){
              return !prevExpanded;
            }
          })
        }
      }
    
      document.addEventListener('click', handleClickOutside);
    
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [menuRef]);

    // console.log('title of tab in menuitems', menuHead.title);

    return (
        <li className="menu-items">
          {menuHead.submenu ? (
            <>
              <div ref={buttonRef}>
                <MenuButton  isExpanded={isExpanded} expandedSetter={setIsExpanded} title={menuHead.title}/>
              </div>
              <div ref={menuRef}>
                <DropdownStack tab={menuHead.title} isExpanded={isExpanded} menuHead={menuHead}/>
              </div>
            </>
          ) : (
            <a href={menuHead.url}>{menuHead.title}</a>
          )}
        </li>
      );
}

export default MenuItems;