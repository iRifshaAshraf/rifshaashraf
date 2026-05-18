import {React, useRef} from 'react';
import hiImage from './hi.png'; // Import the image file
import './Header.css'; // Import CSS styles for Header

const Header = () => {
    const homeRef = useRef(null);
  return (

    <header className="header active" id="home" ref={homeRef}>
        <div className="container header-content">
            <div className="h-shape"></div>
            <div className="row">
                <div className="col-md-5 order-md-1 order-2">
                    <div className="left-header">                    
                        <div className="image">
                            <img src={hiImage} alt="IMHIAGE" className="img-fluid" />
                            <div className="social-icons">
                                <h6><a href="https://github.com/iRifshaAshraf"><i className="fab fa-github" aria-hidden="true"></i>iRifsha Ashraf</a></h6>
                                <h6><a href="https://www.linkedin.com/in/rifshaashraf/"><i className="fab fa-linkedin" aria-hidden="true"></i>rifsha.ashraf</a></h6>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="col-md-7 order-md-2 order-1 d-flex">
                    <div className="right-header">
                        <div className="text">
                            <div className="intro">
                                Bonjour! This is <br />
                                <h1>Rifsha Ashraf</h1>
                                {/* <h1>This is <span>Rifsha Ashraf</span>. </h1> */}
                                A Frontend Developer
                            </div>
                        </div>
                    </div>
                </div> 
                              
            </div>    
        </div>         
    </header>
  );
}

export default Header;


          
