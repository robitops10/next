import Header from './_header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
export default Layout
