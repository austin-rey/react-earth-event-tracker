import PropTypes from 'prop-types'

import {useState,useEffect} from 'react';

import {Card,CardHeader,CardContent,List,ListItem,ListItemText,Divider } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import LocationMarker from './LocationMarker';

import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    recentEventsContainer: {
        width: '90vw',
        maxWidth:'900px',
        position: 'relative',
    },
    cardContainer: {
        borderRadius: '0px',
    },
    cardHeader: {
       backgroundColor: '#9EB7B8',
       color: '#fff'
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
    },
    headerContainer: {
        padding: '20px',
        textAlign: 'center'
      },
      header: {
        padding: '0',
        margin: '0',
        color: '#353535'
      },
}));

const RecentEvents = ({eventData,categoryData}) => {
    const classes = useStyles();

    // const [categorizedEvents, setCategorizedEvents] = useState([]);
    // useEffect(() => {
    //     const getEventsByCategory = () =>{
    //         categoryData.forEach(async (cat) => {
    //             const eventsByCategory = await fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${cat.id}`);
    //             const res = await eventsByCategory.json();
    //             setCategorizedEvents(categorizedEvents => [...categorizedEvents, res]);
    //         })
    //     }
    //     getEventsByCategory();
    // },[categoryData])

    // const categories = categorizedEvents.map((category => {
    //     return <Card className={classes.cardContainer} variant="outlined">
    //     <CardHeader
    //         className={classes.cardHeader}
    //         title={category.title.replace('EONET Events: ','')}
    //         subheader={category.description}
    //     />
    //     <CardContent>
    //         <List>
    //             <ListItem className={classes.eventListItem}>
    //             {
    //             category.events.map((event,index)=> {
    //                return <ListItemText className={classes.listItemText} primary={event.title} secondary={<Moment format="YYYY/MM/DD - hh:mm:ss">{event.geometry[0].date}</Moment>}/>
    //         })}
    //         {category.events.length == 0 && <p className="no-results">No events found.</p>}
    //             </ListItem>
            
    //         </List>
    //     </CardContent>
    // </Card>
    // }));

    const recent = eventData.map((resEvent) => {       
        return <ListItem className={classes.eventListItem}>
            <LocationMarker type={resEvent.categories[0].id}/>
            <ListItemText className={classes.listItemText} primary={resEvent.title} secondary={<Moment format="YYYY/MM/DD - hh:mm:ss">{resEvent.geometry[0].date}</Moment>}/>
        </ListItem>
    }); 

    return (
    <div className={classes.recentEventsContainer}>
        <header className={classes.headerContainer}>
            <h2 className={classes.header}>Recent Events</h2>
            <p></p>
        </header>
        <Card className={classes.cardContainer} variant="outlined">
            {/* <CardHeader
                className={classes.cardHeader}
                title='Title'
                subheader='Sub Title'
            /> */}
            <CardContent>
                <List>
                {recent}
                </List>
            </CardContent>
        </Card>

    </div>

    )
}

RecentEvents.propTypes = {
    eventData: PropTypes.array,
    categoryData: PropTypes.array
}

export default RecentEvents;
