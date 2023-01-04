import {headerAndFooterBiLogger, headerBiConf} from '../bi.js';


const Dropdown = ({relatedTab, isExpanded, menuHead}) => {
    console.log(relatedTab);
    const sendBi = (title,tab ) => {
      const biFields = {
        button_name:title,
        tab
    };

    headerAndFooterBiLogger.log({
        evid:headerBiConf.wixHeaderAction,
        ...biFields
    });
    }
    
    if(menuHead.submenu){
      return(

      <ul className={`dropdown ${isExpanded? 'show':''}`}>
        <li className="menu-items" style={{fontWeight: 'bold'}} key={999} onClick={()=>{sendBi(menuHead.title, relatedTab);}}>
                <a href={menuHead.link}>{menuHead.title}</a>
        </li>
        {
          menuHead.submenu.map((item, index) => {
            return(
              <li className="menu-items"  key={index} onClick={()=>{sendBi(item.title, relatedTab);}}>
               <a href={item.url}>{item.title}</a>
              </li> 
            )
          })
        }
      </ul>
      )
    }
    else{
      return (
        <ul className={`dropdown ${isExpanded? 'show':''}`}>
        <li className="menu-items" style={{fontWeight: 'bold'}} key={999}>
                <a href={menuHead.link}>{menuHead.title}</a>
        </li>
      </ul>
      )
    }
}

export default Dropdown;