L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({
  
  onAdd: function (map) {
    // Triggered when the layer is added to a map.
    //   Register a click listener, then do all the upstream WMS things
    L.TileLayer.WMS.prototype.onAdd.call(this, map);
    map.on('click', this.getFeatureInfo, this);
  },
  
  onRemove: function (map) {
    // Triggered when the layer is removed from a map.
    //   Unregister a click listener, then do all the upstream WMS things
    L.TileLayer.WMS.prototype.onRemove.call(this, map);
    map.off('click', this.getFeatureInfo, this);
  },
  
  getFeatureInfo: function (evt) {
    // Make an AJAX request to the server and hope for the best
    var url = this.getFeatureInfoUrl(evt.latlng),
        showResults = L.Util.bind(this.showGetFeatureInfo, this);
    $.ajax({
      url: url,
      success: function (data, status, xhr) {
        var err = typeof data === 'string' ? null : data;
        showResults(err, evt.latlng, data);
      },
      error: function (xhr, status, error) {
        showResults(error);  
      }
    });
  },
  
  getFeatureInfoUrl: function (latlng) {
    // Construct a GetFeatureInfo request URL given a point
    var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
        size = this._map.getSize(),
        
        params = {
          request: 'GetFeatureInfo',
          service: 'WMS',
          srs: 'EPSG:4326',
          styles: this.wmsParams.styles,
          transparent: this.wmsParams.transparent,
          version: this.wmsParams.version,      
          format: this.wmsParams.format,
          bbox: this._map.getBounds().toBBoxString(),
          height: size.y,
          width: size.x,
          layers: this.wmsParams.layers,
          query_layers: this.wmsParams.layers,
          info_format: 'text/html'
        };
    
    params[params.version === '1.3.0' ? 'i' : 'x'] = Math.round(point.x);
    params[params.version === '1.3.0' ? 'j' : 'y'] = Math.round(point.y);
    
    return this._url + L.Util.getParamString(params, this._url, true);
  },
  
  showGetFeatureInfo: function (err, latlng, content) {
    if (err) { console.log(err); return; } // do nothing if there's an error
    
    // Otherwise show the content in a popup, or something.
    L.popup({ maxWidth: 800})
      .setLatLng(latlng)
      .setContent(content)
      .openOn(this._map);
  }
});

L.tileLayer.betterWms = function (url, options) {
  return new L.TileLayer.BetterWMS(url, options);  
};


//variables que contienen los puntos (centro de despliegues y marcadores)
var center = [51.505, -0.09];
//capas base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  minZoom: 10
});
var dark = L.tileLayer('https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
//var ocean = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',

//mapa
var map = L.map('map', {
        layers: [dark,osm],
        center: center,
        zoom: 8,
        zoomControl: false
});
//marcadores
var singleMarker = L.marker(center);
singleMarker.addTo(map);
var popup = singleMarker.bindPopup('This is a popup');
popup.addTo(map);
//control capas
var baseLayers = {
"Dark": dark,
"OSM": osm
};
var overlays = {
"Marker": singleMarker
};
var layer_control = L.control.layers(baseLayers,overlays);
layer_control.addTo(map);
//control escala
var scale_control = L.control.scale({position: 'bottomright'});
scale_control.addTo(map);
//control zoom 
var zoom_control = L.control.zoom({position: 'bottomright'});
zoom_control.addTo(map); 

var wmsbuoys = L.tileLayer.wms('http://localhost:8080/geoserver/Buoyviewer/wms', {
  layers: 'Buoys',
  format: 'image/png',
  transparent: true
}).addTo(map);

var wmsinfo = L.tileLayer.betterWms('http://localhost:8080/geoserver/Buoyviewer/wms', {
  layers: 'Buoys',
  format: 'image/png',
  transparent: true 
}).addTo(map);
