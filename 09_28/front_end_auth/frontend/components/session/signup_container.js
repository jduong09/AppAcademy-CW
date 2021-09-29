import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => {
 return ({
   createNewUser: formUser => dispatch(createNewUser(formUser)),
 }); 
};

const SignupContainer = connect(null, mapDispatchToProps)(Signup);

export default SignupContainer;