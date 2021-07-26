import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { showLoader, hideLoader } from '../../store/dialogReducer'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'

import makeStyles from '@material-ui/core/styles/makeStyles'




const useStyles = makeStyles( theme => ({
	paper: {
		backgroundColor: 'transparent'
	},
	dialog: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}))


const Loader = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { loader } = useSelector( state => state.dialog )

	// useEffect( () => {
	// 	dispatch( showLoader() ) 			// to show loader on any page just dispatch showloader()
	// },[])

	return (
		<Dialog 
			open={loader}
			onClose={() => dispatch(hideLoader())}
			fullScreen
			classes={{ paper: classes.paper }}
		>
			<DialogContent className={classes.dialog} >
				<CircularProgress />
			</DialogContent>
		</Dialog>
	)
}

export default Loader
