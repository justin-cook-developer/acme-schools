import { connect } from 'react-redux';

import NavMenu from './NavMenuDumb';
import methods from '../../../utils/index';
import { removeMe } from '../../../actions/user';

const {
  findMostPopularSchoolSelector,
  findSchoolWithHighestGPASelector,
} = methods;

const mapStateToProps = state => {
  const { ui, students, schools } = state;
  const { navExpanded } = ui;
  const base = {
    students,
    schools,
    navExpanded,
  };

  if (students.length && schools.length) {
    return {
      ...base,
      mostPopular: findMostPopularSchoolSelector(state),
      bestGPA: findSchoolWithHighestGPASelector(state),
    };
  } else {
    return base;
  }
};

const mapDispatchToProps = (dispatch, { history }) => ({
  logout() {
    dispatch(removeMe()).then(() => history.push('/login'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu);
