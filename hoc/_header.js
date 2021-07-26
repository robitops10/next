import Link from 'next/link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

const navItams = [ 'home', 'about', 'login', 'signup' ]

const Header = () => {
	return (
		<Breadcrumbs>
			{navItams.map( item => <Link
					key={item} 
					href={item === 'home' ? '/' : `/${item}`}
				><a>{item.toCapitalizeFirstChar()}</a></Link>
			)}
		</Breadcrumbs>
	)
}
export default Header
