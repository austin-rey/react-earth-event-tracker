import {useState} from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null);
    
    const markers = eventData.map(ev => {
        if(ev.geometries[0].type === "Point") {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocationInfo({id:ev.id, title:ev.title, date:[...ev.geometries], category:[...ev.categories]})} type={ev.categories[0].id}/> 
        }
        return;
       
    })

    console.log(locationInfo)
    return (
        <div className="map">
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
