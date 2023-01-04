import React from "react";
import MenuIcon from "./MenuIcon";
import Navbar from './Navbar';
import Cta from "./Cta";


const Header = () => {
    const loginObj = {  style: {backgroundColor:"transparent",
    borderRadius:'50px',
    color:"#000000",
    padding:"10px",
    boxShadow:"none",
    border: 'none',
    cursor: 'pointer',
    fontSize:'16px'
  },
  link:'https://users.wix.com/dayful/signin?\view=login&sendEmail=true&dayfuloriginpage=homepage&loginCompName=Dayful%20Get%20Started&redirectTo=https:%2F%2Fwww.wix.com%2Fresolve-dayful-intro&enforceSso=true&dayfulClientId=bb4f9457-052e-4fdc-8bd2-a5120c5bb2b2&autoRedirect=true&skipSurvey=true&loginDialogContext=login&forceRender=true'
  }

  const startFreeObj = {style: {backgroundColor:"#000000",
    borderRadius:'50px',
    color:"#ffffff",
    padding:"10px",
    boxShadow:"none",
    border: 'none',
    cursor: 'pointer',
    fontSize:'16px'
  },
  link:'https://users.wix.com/dayful/signin?view=sign-up&sendEmail=true&dayfuloriginpage=homepage&loginCompName=Dayful%20Get%20Started&redirectTo=https:%2F%2Fwww.wix.com%2Fresolve-dayful-intro&enforceSso=true&dayfulClientId=bb4f9457-052e-4fdc-8bd2-a5120c5bb2b2&autoRedirect=true&skipSurvey=true&loginDialogContext=signup&forceRender=true'
  }   
        return (
            <header >
              <div className="nav-area">
                <div style={{display:'flex', alignItems:'center'}}>
                  <a href="https://www.dayful.com/" className="logo" style={{display:'flex', alignItems:'center', padding: '8px'}}>
                    <MenuIcon height={40} width={86}/>
                  </a>
                  <Navbar/>
                </div>
                <div className="cta-div" >
                  <Cta label={"Log In"} style={loginObj.style} link={loginObj.link}/>
                  <Cta label={"Start Free"} style={startFreeObj.style} link={startFreeObj.link} />
                </div>  
              </div>
            </header>
          );
    
}

export default Header;