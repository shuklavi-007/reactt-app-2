import React, { Component } from "react";
import SearchBox from "../component/searchbox/SearchBox";
import "./TaskContainer.scss";
import Wallpaper from "../component/Wallpaper/Wallpaper";

class TaskContainer extends Component {
  render() {
    return (
      <div>
        <SearchBox></SearchBox>

      </div>
    );
  }
}

export default TaskContainer;
