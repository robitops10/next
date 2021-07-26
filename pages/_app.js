import '../uitls/jsUtil'  										// import all the javascript utilility functions here
import Layout from '../hoc/layout'

import { wrapper } from '../store/store'

import Loader from '../components/dialogs/loader'

const App = ({ Component, pageProps }) => (
	<Layout>
		<Loader />
		<Component {...pageProps} />
	</Layout>
)

export default wrapper.withRedux( App )
