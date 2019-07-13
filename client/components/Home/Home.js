import { connect } from 'react-redux';

import Home from './HomeDumb';
import methods from '../../utils/index';

const { findMostPopularSchool, findSchoolWithHighestGPA } = methods;

const mapStateToProps = ({ students, schools }) => {
  if (students.length && schools.length) {
    return {
      mostPopular: findMostPopularSchool(students, schools),
      bestGPA: findSchoolWithHighestGPA(students, schools),
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(Home);
