import { connect } from 'react-redux';
import UserDetail from "../components/UserDetail";

function mapStateToProps(state){
  return {
    user:state.currentUser
  }
}
                     
const UserDetailContainer = connect(mapStateToProps)(UserDetail); 
export default UserDetailContainer 