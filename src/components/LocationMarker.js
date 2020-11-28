import {makeStyles} from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faSmog,faHouseDamage,faWater,faRoad,faMale,faIcicles,faCloudShowersHeavy,faSnowflake,faTemperatureLow,faMapPin,faBacterium,faFire,faMountain } from '@fortawesome/free-solid-svg-icons'

import clsx from  'clsx';

const useStyles = makeStyles((theme) => ({
    icon : {fontSize:'1.5rem',cursor:'pointer'},
    faSun : {color:'#ff9900'},
    faSmog : {color:'#666699'},
    faHouseDamage : {color:'#996666'},
    faWater : {color:'#0099ff'},
    faRoad : {color:'#000000'},
    faMale : {color:'#faMale'},
    faIcicles : {color:'#00ffff'},
    faCloudShowersHeavy : {color:'#334d4d'},
    faSnowflake : {color:'#0099cc'},
    faTemperatureLow : {color:'#001a4d'},
    faMountain : {color:'#663300'},
    faBacterium : {color:'#00cc99'},
    faFire : {color:'#cc0000'},
}));

const LocationMarker = ({onClick,type}) => {
    const classes = useStyles();

    switch(type) {
        case 6  : //Drought
            return <FontAwesomeIcon icon={faSun} className={clsx(classes.icon, classes.faSun)} onClick={onClick}/>

        case 7  : //Dust and Haze
            return <FontAwesomeIcon icon={faSmog} className={clsx(classes.icon, classes.faSmog)} onClick={onClick}/>

        case 16 : //Earthquakes
            return <FontAwesomeIcon icon={faHouseDamage} className={clsx(classes.icon, classes.faHouseDamage)} onClick={onClick}/>

        case 9  : //Floods
            return <FontAwesomeIcon icon={faWater} className={clsx(classes.icon, classes.faWater)} onClick={onClick}/>

        case 14 : //Landslides
            return <FontAwesomeIcon icon={faRoad} className={clsx(classes.icon, classes.faRoad)} onClick={onClick}/>

        case 19 : //Manmade
            return <FontAwesomeIcon icon={faMale} className={clsx(classes.icon, classes.faMale)} onClick={onClick}/>

        case 15 : //Sea and Lake Ice
            return <FontAwesomeIcon icon={faIcicles} className={clsx(classes.icon, classes.faIcicles)} onClick={onClick}/>

        case 10 : //Severe Storms
            return <FontAwesomeIcon icon={faCloudShowersHeavy} className={clsx(classes.icon, classes.faCloudShowersHeavy)} onClick={onClick}/>

        case 17 : //Snow
            return <FontAwesomeIcon icon={faSnowflake} className={clsx(classes.icon, classes.faSnowflake)} onClick={onClick}/>

        case 18 : //Temperature Extremes
            return <FontAwesomeIcon icon={faTemperatureLow} className={clsx(classes.icon, classes.faTemperatureLow)} onClick={onClick}/>

        case 12 : //Volcanoes
            return <FontAwesomeIcon icon={faMountain} className={clsx(classes.icon, classes.faMountain)} onClick={onClick}/>

        case 13 : //Water Color
            return <FontAwesomeIcon icon={faBacterium} className={clsx(classes.icon, classes.faBacterium)} onClick={onClick}/>

        case 8  : //Wildfires
            return <FontAwesomeIcon icon={faFire} className={clsx(classes.icon, classes.faFire)} onClick={onClick}/>;

        default : //Other
            return <FontAwesomeIcon icon={faMapPin} className={clsx(classes.icon, classes.faMapPin)} onClick={onClick}/>;
    }
}

LocationMarker.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.number.isRequired
}

export default LocationMarker
