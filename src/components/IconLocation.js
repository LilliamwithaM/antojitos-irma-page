import L from 'leaflet';

export const IconLocation = L.icon({
    iconUrl: require("../assets/venue_location_icon.svg").default,
    iconRetinaUrl: require("../assets/venue_location_icon.svg"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
});
