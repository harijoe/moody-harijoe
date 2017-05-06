import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authLogout } from 'store/actions'

export default connect(() => ({
  label: 'Logout',
}), dispatch => bindActionCreators({
  onTouchTap: authLogout,
}, dispatch))(RaisedButton)
