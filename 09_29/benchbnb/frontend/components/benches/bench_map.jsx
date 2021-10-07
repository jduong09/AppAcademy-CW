import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../utils/marker_manager';

class BenchMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    let mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    if (this.props.singleBench) {
      const position = new google.maps.LatLng(this.props.singleBench.lat, this.props.singleBench.lng);
      
      this.map.setOptions({
        center: position,
        zoom: 16,
        gestureHandling: "none"
      });

      new google.maps.Marker({
        position: position,
        map: this.map,
        benchId: this.props.singleBench.id
      });
    } else {
      this.MarkerManager = new MarkerManager(this.map);
      this.registerListeners();
    }
  };

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.filter('bounds', bounds);
    });

    google.maps.event.addListener(this.map, "click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      this.handleClick({ lat, lng })
    });
  };

  componentDidUpdate() {
    if (this.props.benches) {
      const { benches } = this.props;
      this.MarkerManager.updateMarkers(benches);
    }
  };

  handleClick(coords) {
    this.props.history.push({
      pathname: "/benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`,
    });
  };

  render() {
    return (
      <div id="map-container" ref="map">
        Map goes here.
      </div>
    )
  };
};

export default withRouter(BenchMap);