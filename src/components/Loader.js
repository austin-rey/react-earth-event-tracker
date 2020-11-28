import spinner from '../images/spinner.gif'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
      },
      
      loaderImg: {
        width: '400px'
      },
      
      loaderHeading: {
        marginTop: '100px'
      }
}))
const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.loader}>
            <img className={classes.loaderImg} src={spinner} alt="spinner gif"/>
            <h1 className={classes.loaderHeading}>Fetching Data</h1>
        </div>
    )
}

export default Loader;
