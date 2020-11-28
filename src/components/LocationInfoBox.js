import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';

import {Card,CardActions,CardContent,CardHeader,Avatar } from '@material-ui/core';

import LocationMarker from './LocationMarker'

import Moment from 'react-moment';
const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex'
      },
      cardContainer: {
        borderRadius: '0px',
        margin: '10px',
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '500px',

      },
      cardHeader: {
         backgroundColor: '#D9D9D9',
         color: '#353535'
      },
      avatar: {
        backgroundColor: 'transparent'
      },
      locationInfoList: {
        listStyleType: 'none',
        padding: 0
      },
      
      locationInfoListItem: {
        padding:' 5px 0'
      }
}));

const LocationInfoBox = ({id, title,date,category}) => {
    const classes = useStyles();
    return (
        <Card className={classes.cardContainer} raised={true}>
            <CardHeader className={classes.header}
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    <LocationMarker type={category[0].id}/>
                </Avatar>
                }
                title={title}
                subheader={<Moment format="YYYY/MM/DD - hh:mm:ss">{date[0].date}</Moment>}
            />
        </Card>
    )
}

LocationInfoBox.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.array.isRequired,
    category: PropTypes.array.isRequired,
}

export default LocationInfoBox
