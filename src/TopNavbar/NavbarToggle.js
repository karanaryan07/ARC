import React from "react"
import {Dropdown} from "react-bootstrap";
// import  arrow from './Images/arrow.png'
import avatar from './Images/avatar.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
class Toggle  extends React.Component{

    constructor()
    {
        super()
        this.state = {
            isVisible : false
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick()
    {
        this.setState({isVisible : !this.state.isVisible})
    }
    render()
    {
        return(
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                    <img
                        className="user-avatar rounded-circle mr-2"
                        style = {{height : "8vh"}}
                        src={avatar}
                        alt="User Avatar"
                    />
                    <span className="d-none d-md-inline-block"><b>John Doe</b></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style = {{width : "100%"}}>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Payment</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
      </div>
        )
    }
}

export default Toggle