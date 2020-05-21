import React from 'react'
import Info from './Card.js'
import './Dashboard.css'
import carditems from './CardData.js'
import Pie from './Pie.js'
import Column from './Column.js'
import {Table ,Container , Row , Col , Card} from 'react-bootstrap'
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
              
             <div className = "d"> 
            <Table responsive className = "ProjectCard">
             
                {CardComponent}
                
            </Table>
            </div>
            
            <Container style = {{marginTop : "4%"}}>
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