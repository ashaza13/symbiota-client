import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsMap from "../components/DetailsMap";
import { API } from "aws-amplify";
import Loading from "../components/Loading";

const myAPI = "apia1882a21";
const path = "/material";

const myInit = {
    headers: {},
    response: false,
    queryStringParameters: {
        latitude: '0.0',
        longitude: '0.0',
    }
};

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function success(pos) {
    let crd = pos.coords;

    myInit.queryStringParameters.latitude = crd.latitude;
    myInit.queryStringParameters.longitude = crd.longitude;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const DetailsScreen = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(success, error, options);

        API.get(myAPI, path + "/" + id, myInit)
        .then(response => {
            console.log(response);
            setIsLoaded(true);
            setItem(response);
        })
        .catch(error => {
            setIsLoaded(false);
            setError(error);
        })
    }, []);

    if (!isLoaded) {
        return (
            <>
                <Loading text="Symbiota" />
            </>
        );
    }
    else {
        return (
            <>
                <DetailsMap locations={item.locations} item={item} />
            </>
        );
    }

};

export default DetailsScreen;