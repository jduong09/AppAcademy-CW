class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  };

  // benches params = an array of bench objects
  /*
  For each bench, if the id is not a key in this.markers, 
  create a new marker from it and add it to the map and this.markers
  */
  updateMarkers(benches) {
    console.log("time to update");
    benches.forEach(bench => {
      if (!this.markers[bench.id]) {
        createMarkerFromBench(bench);
      }  
    });
  };

  // use bench object (contains lat/long) to create marker
  // add to this.markers
  createMarkerFromBench(bench) {

  }
};

export default MarkerManager;