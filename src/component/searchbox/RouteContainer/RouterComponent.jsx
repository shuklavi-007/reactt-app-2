import React, { Component, Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskContainer from '../../../container/TaskContainer';
import { BrowserRouter as Router } from 'react-router-dom'

class RouterComponent extends Component{
    render(){
        return(
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" render={() => <p>Home</p>} />
          <Route exact path="/tasks" component={TaskContainer} />
        </Switch>
      </Fragment>
    </Router>
           
        )
    }
}

export default RouterComponent;