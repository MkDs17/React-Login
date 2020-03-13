import { connect } from 'react-redux';

import Login from '../../components/Login';

import { connectUser } from '../../store/reducer/user';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {
    const action = connectUser(username, password);
    dispatch(action);
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
