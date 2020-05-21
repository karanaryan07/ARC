import React from 'react'
import {Card} from 'react-bootstrap'

class Info extends React.Component{

    render()
    {
        return(
            <div className = "cd">
                <Card bg = "primary" text = "white" style = {{width : "15rem"}}>
                    <Card.Header as="h4">{this.props.item.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>Level      : {this.props.item.level}</Card.Text>
                        <Card.Text>Completion : {this.props.item.completion}</Card.Text>
                        <Card.Text>Datasets   : {this.props.item.dcount}</Card.Text>
                        <Card.Text>Datasets   : {this.props.item.mcount}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
} 

export default Info