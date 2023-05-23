import React, { useMemo, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { motion } from "framer-motion";
import DetailsCard from './DetailsCard';
import './map.css';





// const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_KEY = "";

const DetailsMap = ({ locations, item }) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_KEY });
    const mapRef = useRef();
    const center = useMemo(() => ({ lat: locations[0].latitude, lng: locations[0].longitude }), [locations]);
    const options = useMemo(() => ({ mapId: "9e6c1c6e0ec465be", disableDefaultUI: true, clickableIcons: false }), []);

    const onLoad = useCallback((map) => (mapRef.current = map), []);

    if (!isLoaded) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    else {
        return (
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" options={options} onLoad={onLoad}>
                    {locations.map((location, index) => (
                        <MarkerF key={index} position={{ lat: location.latitude, lng: location.longitude }} icon={""} />
                    ))}
                <DetailsCard item={item} />
            </GoogleMap>
        );
    }

};

export default DetailsMap;
