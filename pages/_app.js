import { wrapper } from '../store/store'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default wrapper.withRedux( App )
