import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Students from '../Students/Students';
import AddStudent from '../AddStudent/AddStudent';
import EditModal from '../EditModal/EditModal';
import Schools from '../Schools/Schools';
import SchoolDetail from '../SchoolDetail/SchoolDetail';

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
          <Route path="/students/edit/:id" exact component={EditModal} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />
            <Route path="/addStudent" exact component={AddStudent} />
            <Route path="/schools" exact component={Schools} />
            <Route path="/schools/:id" component={SchoolDetail} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
