import { connect } from 'react-redux';

import Schools from './SchoolsDumb';

const mapStateToProps = ({ schools }) => ({ schools });

export default connect(mapStateToProps)(Schools);
