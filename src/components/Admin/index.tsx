import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';


const Admin = () => {
	return (
		<>
			<p>Admin 111</p>
		</>
		)
}

const condition = (authUser: any) =>
  authUser && !!authUser.roles["ADMIN"];

export default compose(
  //withEmailVerification,
  withAuthorization(condition),
)(Admin);

