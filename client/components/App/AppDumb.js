import React, { Fragment, Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';

class App extends Component {
  componentDidMount() {
    this.props.fetchStudents();
    this.props.fetchSchools();
  }

  render() {
    return (
      <Fragment>
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withRouter(App);
