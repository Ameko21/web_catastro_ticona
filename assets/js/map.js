var map = L.map('map', {
    center: [-17.98873376713679, -70.23931103264377],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
    
    
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
    layers: "web_catastro:curvas", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
curvas.addTo(map);


var lotes = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:lotes", 
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO",
       maxZoom: 20, // Ajusta el nivel máximo de zoom
       minZoom: 0,  // Ajusta el nivel mínimo de zoom
       maxNativeZoom: 20, // Nivel máximo soportado por el servidor
       minNativeZoom: 0   // Nivel mínimo soportado por el servidor
       
	});
lotes.addTo(map);


var manzanas = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:manzanas", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO",
       maxZoom: 20, // Ajusta el nivel máximo de zoom
       minZoom: 0,  // Ajusta el nivel mínimo de zoom
       maxNativeZoom: 20, // Nivel máximo soportado por el servidor
       minNativeZoom: 0   // Nivel mínimo soportado por el servidor
       
	});
manzanas.addTo(map);


var veredas = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:veredas", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO",
       maxZoom: 20, // Ajusta el nivel máximo de zoom
       minZoom: 0,  // Ajusta el nivel mínimo de zoom
       maxNativeZoom: 20, // Nivel máximo soportado por el servidor
       minNativeZoom: 0   // Nivel mínimo soportado por el servidor
       
	});
veredas.addTo(map);


var area_verde = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:area_verde", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO",
       maxZoom: 20, // Ajusta el nivel máximo de zoom
       minZoom: 0,  // Ajusta el nivel mínimo de zoom
       maxNativeZoom: 20, // Nivel máximo soportado por el servidor
       minNativeZoom: 0   // Nivel mínimo soportado por el servidor
       
	});
area_verde.addTo(map);


var buzones = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:buzones", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO",
       maxZoom: 20, // Ajusta el nivel máximo de zoom
       minZoom: 0,  // Ajusta el nivel mínimo de zoom
       maxNativeZoom: 20, // Nivel máximo soportado por el servidor
       minNativeZoom: 0   // Nivel mínimo soportado por el servidor
       
	});
buzones.addTo(map);

var vias = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:vias", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO",
       maxZoom: 20, // Ajusta el nivel máximo de zoom
       minZoom: 0,  // Ajusta el nivel mínimo de zoom
       maxNativeZoom: 20, // Nivel máximo soportado por el servidor
       minNativeZoom: 0   // Nivel mínimo soportado por el servidor
       
	});
vias.addTo(map);


var baseMaps = {
    "OSM": basemapOSM,
    "Google Satellite":googleSat
};

var overlayMaps = {
    "Curvas de Nivel": curvas,
    "lotes": lotes,
    "manzanas": manzanas,
    "veredas":veredas,
    "area_verde":area_verde,
    "buzones":buzones,
    "vias":vias
    
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);


L.control.scale({
    imperial: false
  }).addTo(map);
  
  