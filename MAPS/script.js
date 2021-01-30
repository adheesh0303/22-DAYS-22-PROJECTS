mapboxgl.accessToken = 'pk.eyJ1IjoiYWRoZWVzaHZlcm1hMDMiLCJhIjoiY2tqMWhlMTkxNHZ6bTJ2cWoydmN5bTRtYSJ9.re2eLFPgryjLCEMOXrdAyg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([30.6942,76.8606])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  })
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)


  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}