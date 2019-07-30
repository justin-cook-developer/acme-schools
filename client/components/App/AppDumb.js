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
    const loggedIn = this.props.loggedIn;
    const loading = this.props.loadingUser;

    if (loading) {
      console.log('nothing');

      return null;
    }

    return (
      <Fragment>
        {loggedIn && (
          <header>
            <Nav />
          </header>
        )}
        <main>
          {loggedIn && (
            <Route path="/students/edit/:id" exact component={EditModal} />
          )}
          <Switch>
            {loggedIn && (
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/students" component={Students} />
                <Route path="/addStudent" exact component={AddStudent} />
                <Route path="/schools" exact component={Schools} />
                <Route path="/schools/:id" component={SchoolDetail} />
                <Route render={() => <Redirect to="/" />} />
              </Fragment>
            )}
            {!loggedIn && (
              <Fragment>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route render={() => <Redirect to="/login" />} />
              </Fragment>
            )}
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
