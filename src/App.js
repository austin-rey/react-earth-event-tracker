import {useState, useEffect} from 'react';

import Map from './components/Map';
import RecentEvents from './components/RecentEvents';
import Loader from './components/Loader';

import {makeStyles} from '@material-ui/core/styles';

import clsx from  'clsx';

function App() {

  const useStyles = makeStyles((theme) => ({
    app: {
      backgroundColor: '#F3F6F7',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
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
    headerSubText: {
      fontSize: '14px',
      color: '#6D9395'
    }
  }));

  const classes = useStyles();

  const [eventData, setEventData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // All events that are open
      const resEvents = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events?status=open');
      const { events } = await resEvents.json();
      setEventData(events);

      // All category types
      const resCategories = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories');
      const { categories } = await resCategories.json();
      setCategoryData(categories);

      setLoading(false);
    }
   
    fetchData();
    
  }, [])

  // Recent 10 events
  let recentEvents = eventData.slice(0, 10);
  
  return (
    <div className={clsx("app",classes.app)}>
        <header className={classes.headerContainer}>
          <h1 className={classes.header}>Earth Event Tracker</h1>
          <p className={classes.headerSubText}>(Powered By <a href="https://eonet.sci.gsfc.nasa.gov/" target="_blank">NASA EONET</a>)</p>
        </header>
        {!loading 
          ? <Map eventData={eventData}/> 
          : <Loader/>
        }
      <RecentEvents eventData={recentEvents} categoryData={categoryData}/>
    </div>
  );
}



export default App;
