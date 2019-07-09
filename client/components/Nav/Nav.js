import { connect } from 'react-redux';

import Nav from './NavDumb';
import { toggleBurger } from '../../actions/ui';
import methods from '../../utils/index';

const { findMostPopularSchool, findSchoolWithHighestGPA } = methods;

const mapStateToProps = ({ students, schools, ui }) => {
  const { navExpanded } = ui;
  const base = {
    students,
    schools,
    navExpanded,
  };

  if (students.length && schools.length) {
    return {
      ...base,
      mostPopular: findMostPopularSchool(students, schools),
      bestGPA: findSchoolWithHighestGPA(students, schools),
    };
  } else {
    return base;
  }
};

const mapDispatchToProps = dispatch => ({
  toggleBar() {
    dispatch(toggleBurger());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
