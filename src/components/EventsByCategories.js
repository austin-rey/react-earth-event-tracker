import PropTypes from 'prop-types'
import {useState,useEffect} from 'react';

import {Card,CardHeader,CardContent,List,ListItem,ListItemText,Divider } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    cardContainer: {
        borderRadius: '0px',
        margin: '10px'
    },
    cardHeader: {
       backgroundColor: '#D9D9D9',
       color: '#353535'
    },
    eventListItem: {
        display: 'flex',
        flexDirection:"column",
        alignItems: 'flex-start',
        borderLeft: '1px solid #BEE3DB',
        marginLeft: '10px',
    },
    listItemText:{
        // borderBottom: '1px solid #efefef',
    },
    cardActions: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
}));

const EventsByCategories = ({eventData,categoryData}) => {
    const classes = useStyles();

    const [categorizedEvents, setCategorizedEvents] = useState([]);
    useEffect(() => {
        const getEventsByCategory = () =>{
            categoryData.forEach(async (cat) => {
                const eventsByCategory = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/${cat.id}`);
                const res = await eventsByCategory.json();
                setCategorizedEvents(categorizedEvents => [...categorizedEvents, res]);
            })
        }
        getEventsByCategory();
    },[categoryData])

    const categories = categorizedEvents.map((category => {

        return <Card className={classes.cardContainer} variant="outlined">
        <CardHeader
            className={classes.cardHeader}
            title={category.title.replace('EONET Events: ','')}
            subheader={category.description}
        />
        <CardContent>
            <List>
                <ListItem className={classes.eventListItem}>
                {
                category.events.map((event,index)=> {
                   return <ListItemText className={classes.listItemText} primary={event.title} secondary={<Moment format="YYYY/MM/DD - hh:mm:ss">{event.geometries[0].date}</Moment>}/>
            })}
            {category.events.length == 0 && <p className="no-results">No events found.</p>}
                </ListItem>
            
            </List>
        </CardContent>
    </Card>
    }));

    return (
    <div>
        <header className="header">
            <h2>Events by Category</h2>

        </header>
        {categories}

    </div>

    )
}

EventsByCategories.propTypes = {
    eventData: PropTypes.array,
    categoryData: PropTypes.array
}

export default EventsByCategories;
