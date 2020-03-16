import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

import { getAllUsers } from '../../store/reducer/user';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    isUser: state.user.isUser,
    isAdmin: state.user.isAdmin,
    allUsers: state.user.allUsers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleGetAllUsers: () => {
    const action = getAllUsers();
    dispatch(action);
  },
});

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;
