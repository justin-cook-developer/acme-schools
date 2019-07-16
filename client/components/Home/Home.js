import { connect } from 'react-redux';

import Home from './HomeDumb';
import methods from '../../utils/index';

const {
  findMostPopularSchoolSelector,
  findSchoolWithHighestGPASelector,
} = methods;

const mapStateToProps = state => {
  if (state.students.length && state.schools.length) {
    return {
      mostPopular: findMostPopularSchoolSelector(state),
      bestGPA: findSchoolWithHighestGPASelector(state),
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(Home);
