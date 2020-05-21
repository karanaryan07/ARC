import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from "reactstrap";

class CreateProject extends Component {
  constructor(props) {
    super (props);
    this.state = {
      id: 0,
      modal: false,
      name: "",
      description: "",
      isshow: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
      isshow: false,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name
    const value = event.target.value
    this.setState({
      id: this.state.id + 1,
      [name]: value,
      isshow: true,
      modal: !this.state.modal,
    });
    console.log(this.state.id," id");
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  resetForm() {
    this.setState({
      name: "",
      description: "",
      modal: !this.state.modal,
      isshow: false,
    });
  }
  render() {
    return (
      <>
        {
          this.state.isshow ?
            (<div>
              <h3>Project Name: {this.state.name}</h3>
              <h3>Project Description: {this.state.description}</h3>
            </div>)
          :
          (null)
        }
        <Button color="primary" onClick={this.resetForm} size="lg" style={{ marginLeft:"76%"}}>Create New Project
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static" className={this.props.className} centered>
          <ModalHeader toggle={this.toggle}>Create New Project</ModalHeader>
          <ModalBody>
            <Form>
              <div className="container">
                <div className="row text-center">
                  <div className="form-group col-md-12">
                    <label>Project Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="Project Name" className="form-control" />
                  </div>
                </div>
                <div className="row text-center">
                  <div className="form-group col-md-12">
                    <label>Project Description:</label>
                    <textarea value={this.state.description} onChange={this.handleChangeDescription} placeholder="Project Description" className="form-control" />
                  </div>
                </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Create</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default CreateProject;
