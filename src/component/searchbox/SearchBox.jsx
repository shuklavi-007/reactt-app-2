import React, { Component } from "react";
import "./SearchBox.scss";
import { Button, Modal } from "react-bootstrap"



class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      input: '',
      taskArray1: [],
      taskArray2: [],
      taskArray3: [],
      taskArray4: [],
      show: false,
      buttonId: ''
    };
  }


  handleModal = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleClick = (e) => {
    this.setState({
      buttonId: e.target.id
    })

  }

  getInputValue = (e) => {
    if (e.target.id == 'input1') {
      this.setState({
        inputValue: e.target.value
      })
    }
  }

  saveData = (buttonId, inputValue) => {
    console.log("button and value", buttonId, inputValue)
    if (buttonId == 'button1') {
      let value = this.state.taskArray1
      value.push(inputValue)
      this.setState({
        taskArray1: value,
        inputValue: ''
      })
    }
    if (buttonId == 'button2') {
      let value = this.state.taskArray2
      value.push(inputValue)
      this.setState({
        taskArray2: value,
        inputValue: ''
      })
    }
    if (buttonId == 'button3') {
      let value = this.state.taskArray3
      value.push(inputValue)
      this.setState({
        taskArray3: value,
        inputValue: '',

      })
    }

    if (buttonId == 'button4') {
      let value = this.state.taskArray4
      value.push(inputValue)
      this.setState({
        taskArray4: value,
        inputValue: '',
      })


    }
  }


  render() {

    return (
      <div>
        <Modal show={this.state.show}
          onHide={() => this.handleClose()}
          backdrop="static"
          keyboard={false}>
          <Modal.Header closeButton>Modal heading</Modal.Header>
          <Modal.Body>
            <input id="input1" type="text" className="form-control" onChange={(e) => this.getInputValue(e)} value={this.state.inputValue} className="search-box text-center">
            </input>
          </Modal.Body>
          <Modal.Footer>
            <Button id="button1" onClick={(e) => this.handleClick(e)}>1</Button>
            <Button id="button2" onClick={(e) => this.handleClick(e)}>2</Button>
            <Button id="button3" onClick={(e) => this.handleClick(e)}>3</Button>
            <Button id="button4" onClick={(e) => this.handleClick(e)}>4</Button>
            <Button onClick={() => this.handleClose()}>Close</Button>
            <Button onClick={() => this.saveData(this.state.buttonId, this.state.inputValue)}> Save</Button>

          </Modal.Footer>
        </Modal>

        <div className="card">
          <div className="card-body">
            <div className="text-center">

            </div>
          </div>

          <div>
            <Button onClick={() => this.handleModal()}>Launch</Button>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                {
                  this.state.taskArray1.map((v, k) => {
                    return (
                      <div className="taskcard mt-2" key={k}>
                        {v}
                      </div>

                    )
                  })
                }
              </div>
            </div>
            <div className="column">
              <div className="card">
                {
                  this.state.taskArray2.map((v, k) => {
                    return (
                      < div className="taskcard mt-2" key={k} >
                        {v}
                      </div>

                    )
                  })
                }
              </div>
            </div>
            <div className="column">
              <div className="card">
                {
                  this.state.taskArray3.map((v, k) => {
                    return (
                      < div className="taskcard mt-2" key={k} >
                        {v}
                      </div>

                    )
                  })
                }
              </div>

            </div>
            <div className="column">
              <div className="card">
                {
                  this.state.taskArray4.map((v, k) => {
                    return (
                      < div className="taskcard mt-2" key={k} >
                        {v}
                      </div>

                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default SearchBox;
