import { connect } from 'react-redux';

import ChangeSettings from '../../../components/Settings/ChangeSettings';

import { changeUserSettings, adminEditUserSettings } from '../../../store/reducer/user';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    isAdmin: state.user.isAdmin,
    companies: state.company.allCompanies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    const action = changeUserSettings(value);
    dispatch(action);
  },
  onAdminSubmit: (value) => {
    const action = adminEditUserSettings(value);
    dispatch(action);
  },
});

const ChangeSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeSettings);

export default ChangeSettingsContainer;
