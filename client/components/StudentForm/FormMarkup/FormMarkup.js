import { connect } from 'react-redux';

import FormMarkup from './FormMarkupDumb';

const mapStateToProps = ({ schools }) => ({ schools });

export default connect(mapStateToProps)(FormMarkup);
