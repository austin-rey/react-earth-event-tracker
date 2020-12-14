import {useState} from 'react';

import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    map: {
        width: '90vw',
        height: '90vh',
        position: 'relative',
        marginBottom: '20px'
      }
}))

const Map = ({eventData, center, zoom}) => {

    console.log(eventData);
    const classes = useStyles();

    const [locationInfo, setLocationInfo] = useState(null);
    
    const markers = eventData.map(ev => {
        if(ev.geometry[0].type === "Point") {
            return <LocationMarker 
            lat={ev.geometry[0].coordinates[1]} 
            lng={ev.geometry[0].coordinates[0]} 
            onClick={()=>setLocationInfo(
                {id:ev.id, 
                title:ev.title, 
                date:[...ev.geometry], 
                category:[...ev.categories]})
            } 
            type={ev.categories[0].id}/>}
        return;
       
    })
    
    return (
        <div className={classes.map}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyAk4FjfzWamVD5TTWXFWJbLcPx9WQViyFQ'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox id= {locationInfo.id} title={locationInfo.title} date={locationInfo.date} category={locationInfo.category}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

Map.propTypes = {
    eventData: PropTypes.array.isRequired
}

export default Map
