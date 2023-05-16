//
import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';

import { IOfferCard } from 'types/IOfferCard';

// Leaflet
import leaflet from 'leaflet';

//

interface IMapProps {
    offers: IOfferCard[]
    city: string
    location: any
    activeMarkerId: number
  }

const Map: React.FC<IMapProps> = ({
    offers, city, location, activeMarkerId,
}) => {
    const mapRef = useRef<any>();
    const [markers, setMarkers] = useState([]);

    const getCityLocation = useCallback(() => {
        if (offers.length === 0) {
            return location[city.toUpperCase()];
        }

        return offers[0].city.location;
    }, [city, location]);

    useEffect(() => {
        const cityLocation = getCityLocation();

        mapRef.current = leaflet.map('map', {
            center: {
                lat: cityLocation.latitude,
                lng: cityLocation.longitude,
            },
            zoom: cityLocation.zoom,
        });

        mapRef.current.on('load');

        leaflet
            .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            })
            .addTo(mapRef.current);

        return () => {
            mapRef.current.remove();
        };
    }, [getCityLocation]);

    useEffect(() => {
        const cityLocation = getCityLocation();
        mapRef.current.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
    }, [city, getCityLocation]);

    useEffect(() => {
        if (offers.length === 0) {
            return;
        }

        if (markers.length > 0) {
            markers.forEach((marker) => {
                marker.remove();
            });
            setMarkers([]);
        }

        const markersList: any[] = [];

        offers.forEach((point) => {
            const isActive = () => point.id === activeMarkerId;

            const customIcon = leaflet.icon({
                iconUrl: isActive() ? './img/pin-active.svg' : './img/pin.svg',
                iconSize: [27, 39],
            });

            const mark = leaflet.marker(
                {
                    lat: point.location.latitude,
                    lng: point.location.longitude,
                },
                {
                    icon: customIcon,
                },
            );

            markersList.push(mark);

            mark
                .addTo(mapRef.current)
                .bindPopup(`${point.title} <br> &euro;${point.price}`);
        });

        setMarkers(markersList);
    }, [offers, activeMarkerId]);

    return (
        <div id="map" style={{ height: '100%' }} ref={mapRef} />
    );
};

export { Map };
