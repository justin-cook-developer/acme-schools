import { connect } from 'react-redux';
import Students from './StudentsDumb';

const mapStateToProps = ({ students }) => ({ students });

export default connect(mapStateToProps)(Students);

