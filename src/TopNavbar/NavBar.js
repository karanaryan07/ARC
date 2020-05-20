import React from 'react';
import './Nav.css'
import Toggle from './NavbarToggle.js'
// import logo from './Images/logo.png'
import  {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TopBar extends React.Component{

    render()
    {
        return(
            <nav className = "nav">
                <div className = "logo">
                    <h4 className = "logo-title">ARC</h4>
                    {/* <img className = "logo" src = {logo} alt = "Logo"/> */}
                </div>   
                <div className = "nav-links"> 
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Datasets</Nav.Link>
                        <Nav.Link href="#">Models</Nav.Link>
                </div>
                <div>
                    <Toggle />
                </div>
            </nav>
        )
    }
}

export default TopBar