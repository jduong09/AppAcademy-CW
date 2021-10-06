import { connect } from 'react-redux';
import { createBench } from '../../actions/bench_actions';
import BenchForm from "./bench_form";

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
});

const mapDispatchToProps = dispatch => ({
  createBench: (bench) => dispatch(createBench(bench)),
});

const BenchFormContainer = connect(mapStateToProps, mapDispatchToProps)(BenchForm);

export default BenchFormContainer;