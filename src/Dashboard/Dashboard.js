import React from 'react'
import Info from './Card.js'
import './Dashboard.css'
import carditems from './CardData.js'
import Pie from './Pie.js'
import Column from './Column.js'
// import plus from './Images/plus.png'
import {Table ,Container , Row , Col , Card , Button} from 'react-bootstrap'
class Dashboard extends React.Component{
    constructor()
    {
        super()
        this.state = {
            items : carditems
        }
    }
    render()
    {
        const CardComponent = this.state.items.map(item => <Info id = {item.key} item = {item}/>)
        return(
            <div>
              
             <Card className = "d"> 
             <Card.Header as = "h4">Projects<Button style = {{marginLeft : "72%" , fontSize : "17px"}}>Create a new Project</Button></Card.Header>
            <Table responsive className = "ProjectCard">
                {CardComponent}
            </Table>
            </Card>
            
            <Container style = {{marginTop : "4%" , marginBottom : "2%"}}>
          <Row>
              <Col sm = {6} md = {6}>
                <Card>
                  <Card.Header as="h5">Project Distribution</Card.Header>
                  <Card.Body>
                    <Pie />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm = {6} md = {6}>
              <Card>
                  <Card.Header as="h5">Project Models</Card.Header>
                  <Card.Body>
                    <Column />
                  </Card.Body>
                </Card>
              </Col>
          </Row>
          </Container>

      </div>
        )
    }
}

export default Dashboard