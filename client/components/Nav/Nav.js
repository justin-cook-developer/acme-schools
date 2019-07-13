import { connect } from 'react-redux';

import Nav from './NavDumb';
import { toggleBurger } from '../../actions/ui';

const mapStateToProps = ({ ui }) => {
  const { navExpanded } = ui;
  return { navExpanded };
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
