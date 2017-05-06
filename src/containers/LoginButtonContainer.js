import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authLogin } from 'store/actions'

export default connect(() => ({
  label: 'Login',
}), dispatch => bindActionCreators({
  onTouchTap: authLogin,
}, dispatch))(RaisedButton)
