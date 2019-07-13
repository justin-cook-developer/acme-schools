import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SchoolDetail from './SchoolDetailDumb';

const mapStateToProps = ({ students, schools }, { match }) => {
  const school = schools.find(s => s.id === match.params.id);
  return { school, students };
};

export default withRouter(connect(mapStateToProps)(SchoolDetail));
