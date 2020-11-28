import {useState, useEffect} from 'react';
import Map from './components/Map';
import EventsByCategories from './components/EventsByCategories';
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

      const resEvents = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await resEvents.json();
      setEventData(events);
      
      const resCategories = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories');
      const { categories } = await resCategories.json();
      setCategoryData(categories);

      setLoading(false);
    }
   
    fetchData();
    
  }, [])

  return (
    <div className={clsx("app",classes.app)}>
        <header className={classes.headerContainer}>
          <h1 className={classes.header}>Disaster Tracker</h1>
          <p className={classes.headerSubText}>(Powered By NASA EONET)</p>
        </header>
        {!loading 
          ? <Map eventData={eventData}/> 
          : <Loader/>
        }
      <EventsByCategories eventData={eventData} categoryData={categoryData}/>
    </div>
  );
}



export default App;
