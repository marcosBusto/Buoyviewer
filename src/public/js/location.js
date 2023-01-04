// MAPAS 
//variables que contienen los puntos (centro de despliegues y marcadores)
var center = [40.389202683361894, -3.6300537703340163];
//capas base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  minZoom: 10
});
//mapa
var map = L.map('location', {
        layers: [osm],
        center: center,
        zoom: 17,
        zoomControl: false
});
//marcadores
var singleMarker = L.marker(center);
singleMarker.addTo(map);
var popup = singleMarker.bindPopup(`
<style>

    a
    {
        text-decoration: none;
    }
</style>

    <a href="https://www.topografia.upm.es/" target="blank">
        Escuela Técnica Superior de Ingenieros en Topografía, Geodesia y Cartografía de Madrid
    </a>
`);
popup.addTo(map);
//control escala
var scale_control = L.control.scale({position: 'bottomright'});
scale_control.addTo(map);
//control zoom 
var zoom_control = L.control.zoom({position: 'bottomright'});
zoom_control.addTo(map); 