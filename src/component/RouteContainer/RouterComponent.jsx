import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskContainer from '../../container/TaskContainer';
import { BrowserRouter as Router } from 'react-router-dom'
import WallpaperContainer from '../../container/WallpaperContainer';
import FormsContainer from '../../container/FormsContainer';




class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" render={() => <p>Home</p>} />
            <Route exact path="/tasks" component={TaskContainer} />
            <Route exact path="/wallpaper" component={WallpaperContainer} />
            <Route exact path="/forms" component={FormsContainer} />

          </Switch>
        </Fragment>
      </Router>

    )
  }
}

export default RouterComponent;