import { connect } from 'react-redux';

import Nav from './NavDumb';
import methods from '../../utils/index';

const { findMostPopularSchool, findSchoolWithHighestGPA } = methods;

const mapStateToProps = ({ students, schools }) => {
  if (students.length && schools.length) {
    return {
      students,
      schools,
      mostPopular: findMostPopularSchool(students, schools),
      bestGPA: findSchoolWithHighestGPA(students, schools),
    };
  } else {
    return {
      students,
      schools,
    };
  }
};

export default connect(
  mapStateToProps,
  null
)(Nav);
