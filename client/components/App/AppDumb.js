import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Students from '../Students/Students';
import AddStudent from '../AddStudent/AddStudent';

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
            <Route path="/students" component={Students} />
            <Route path="/addStudent" exact component={AddStudent} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
