import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
constructor(props){
  super(props)
  this.state ={
    alertMessage : '',
    inputValue : ''
  };
  
}

  handleClick = () => {
    window.alert(this.state.alertMessage);
    this.setState({
      inputValue : ''
     } )
  }

  getInputValue = (e) =>{

 if(e.target.id == 'input1'){
   this.setState({
    alertMessage : e.target.value,
    inputValue : e.target.value
   } )
 }
  }


  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
          <div className="input-group mb-3"> 
  <input id="input1" type="text" onChange={(e) => this.getInputValue(e)} value = {this.state.inputValue} className="searh-box">
    </input>
</div>
<div className= "text-center">
<button onClick={() => this.handleClick()}  type="button" className="btn btn-success">add</button>



</div>
<div>
<div className="row">
  <div className="column">

    <div className="card">..</div>
  </div>
  <div className="column">
    <div className="card">..</div>
  </div>
  <div className="column">
    <div className="card">..</div>
  </div>
   <div className="column">
    <div className="card">..</div>
  </div>
</div>
          

      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default SearchBox;
