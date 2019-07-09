import { connect } from 'react-redux';

import NavBurger from './NavBurgerDumb';
import { toggleBurger } from '../../../actions/ui';

const mapStateToProps = ({ ui }) => {
  const { navExpanded } = ui;
  return {
    navExpanded,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleBar() {
    dispatch(toggleBurger());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBurger);
