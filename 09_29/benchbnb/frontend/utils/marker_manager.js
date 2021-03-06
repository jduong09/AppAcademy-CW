class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
  };

  // benches params = an array of bench objects
  /*
  For each bench, if the id is not a key in this.markers, 
  create a new marker from it and add it to the map and this.markers
  */
  updateMarkers(benches) {
    const benchesObj = {};
    benches.forEach(bench => benchesObj[bench.id] = bench);

    benches
      .filter(bench => !this.markers[bench.id])
      .forEach(newBench => this.createMarkerFromBench(newBench));

    Object.keys(this.markers)
      .filter(benchId => !benchesObj[benchId])
      .forEach((benchId) => this.removeMarker(this.markers[benchId]))
  };

  // use bench object (contains lat/long) to create marker
  // add to this.markers
  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });
    
    this.markers[marker.benchId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId];
  }
};

export default MarkerManager;