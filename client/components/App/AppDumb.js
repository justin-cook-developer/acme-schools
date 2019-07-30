import React, { Fragment, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Students from '../Students/Students';
import AddStudent from '../AddStudent/AddStudent';
import EditModal from '../EditModal/EditModal';
import Schools from '../Schools/Schools';
import SchoolDetail from '../SchoolDetail/SchoolDetail';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';

const PrivateRoute = ({ component: ComponentToRender, ...rest }) => {
  return (
    <Route
      {...rest}
      render={_props =>
        rest.id ? <ComponentToRender {..._props} /> : <Redirect to="/login" />
      }
    />
  );
};

const NoUserRoute = ({ component: ComponentToRender, ...rest }) => {
  return (
    <Route
      {...rest}
      render={_props =>
        rest.id === undefined ? (
          <ComponentToRender {..._props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const id = this.props.user.id;
    return (
      <Fragment>
        {id && (
          <header>
            <Nav />
          </header>
        )}
        <main>
          {id && (
            <Route path="/students/edit/:id" exact component={EditModal} />
          )}
          <Switch>
            <PrivateRoute id={id} path="/" exact component={Home} />
            <PrivateRoute id={id} path="/students" component={Students} />
            <PrivateRoute
              id={id}
              path="/addStudent"
              exact
              component={AddStudent}
            />
            <PrivateRoute id={id} path="/schools" exact component={Schools} />
            <PrivateRoute
              id={id}
              path="/schools/:id"
              component={SchoolDetail}
            />

            <NoUserRoute id={id} exact path="/login" component={Login} />
            <NoUserRoute id={id} exact path="/signup" component={Signup} />
            <Route render={() => <Redirect to={id ? '/' : '/login'} />} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
