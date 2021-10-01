import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ({
  currentUser: state.session.id ? state.entities.users[state.session.id] : null,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default GreetingContainer;