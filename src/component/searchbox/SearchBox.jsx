import React, { Component } from "react";
import "./SearchBox.scss";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
          <div class="input-group mb-3"> 
  <input type="text" class="form-control">
    </input>
</div>
<div class= "text-center">
<button type="button" class="btn btn-success">add</button>

</div>
<div class="layout">
  <div class="row">
    <div class="col-md-4 sm-4">
     col1
    </div>
    <div class="col-md-4 sm-4">
      col2
 
    </div>
    <div class="col-md-4 sm-4">
      col3
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
