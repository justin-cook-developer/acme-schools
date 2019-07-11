import React, { Fragment, Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Students from '../Students/Students';
import StudentsForm from '../StudentForm/StudentForm';

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
          <StudentsForm />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withRouter(App);
