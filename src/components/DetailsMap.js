import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import DetailsCard from './DetailsCard';
import './map.css';


const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const DetailsMap = ({ locations, item }) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_KEY });

    const center = useMemo(() => ({ lat: locations[0].latitude, lng: locations[0].longitude }), [locations]);

    if (!isLoaded) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    else {
        return (
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                {locations.map((location, index) => (
                    <MarkerF key={index} position={{ lat: location.latitude, lng: location.longitude }} />
                    ))}

                <DetailsCard item={item} />

            </GoogleMap>
        );
    }

};

export default DetailsMap;
