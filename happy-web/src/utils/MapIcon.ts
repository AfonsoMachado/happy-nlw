import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  // posição do icone que representa o ponto
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  // posição do popup
  popupAnchor: [170, 2],
});

export default mapIcon;
