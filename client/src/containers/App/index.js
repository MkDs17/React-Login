import { connect } from 'react-redux';

import App from '../../components/App';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    isUser: state.user.isUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
