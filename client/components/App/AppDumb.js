import React, { Fragment, Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav from '../Nav/Nav';

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
            <Route path="/" exact render={() => <div>HOME</div>} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withRouter(App);
