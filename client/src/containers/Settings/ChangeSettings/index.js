import { connect } from 'react-redux';

import ChangeSettings from '../../../components/Settings/ChangeSettings';

import { changeUserSettings } from '../../../store/reducer/user';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    const action = changeUserSettings(value);
    dispatch(action);
  },
});

const ChangeSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeSettings);

export default ChangeSettingsContainer;
