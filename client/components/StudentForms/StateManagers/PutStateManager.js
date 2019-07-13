import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StateManager from './StateManager';

const mapStateToProps = ({ students }, { match }) => {
  const student = students.find(s => s.id === match.params.id);
  return { ...student };
};

export default withRouter(connect(mapStateToProps)(StateManager));
