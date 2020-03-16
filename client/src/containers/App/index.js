import { connect } from 'react-redux';

import App from '../../components/App';

import { disconnect } from '../../store/reducer/user';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    isUser: state.user.isUser,
    isAdmin: state.user.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleDisconnect: () => {
    const action = disconnect();
    dispatch(action);
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
