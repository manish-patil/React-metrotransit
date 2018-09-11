import * as React from "react";
import { connect } from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import addAction from "../actions/addAction";
// import subtractAction from "../actions/subtractAction";
import getProviders from "../actions/getProviders";
import getRoutes from "../actions/getRoutes";
import getDirections from "../actions/getDirections";
import getStops from "../actions/getStops";
import getDepartures from "../actions/getDepartures";
import getTimepointDepartures from "../actions/getTimepointDepartures";

class App extends React.Component<any, any>{
    private ddlRoute;
    private ddlDirection;

    constructor(props: any) {
        super(props);

        this.routeChanged = this.routeChanged.bind(this);
        this.directionChanged = this.directionChanged.bind(this);
        this.stopChanged = this.stopChanged.bind(this);

        this.ddlRoute = React.createRef();
        this.ddlDirection = React.createRef();
    }

    componentDidMount() {
        this.props.getProvides();
        this.props.getRoutes();
    }

    routeChanged(e) {
        this.props.getDirections(e.target.value);
        // GetVehicleLocations http://svc.metrotransit.org/NexTrip/VehicleLocations/{ROUTE}
    }

    directionChanged(e) {
        this.props.getStops(this.ddlRoute.current.value, e.target.value)
    }

    stopChanged(e) {
        // this.props.getDepartures(e.target.value);
        this.props.getTimepointDepartures(this.ddlRoute.current.value, this.ddlDirection.current.value, e.target.value)
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h3>Providers</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <select>
                            {
                                this.props.providers.map((provider) => {
                                    return <option key={provider.value} value={provider.value}>{provider.label}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Routes</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <select ref={this.ddlRoute} onChange={this.routeChanged} style={{ flex: 1 }}>
                            <option key={0} value={0}>{}</option>
                            {
                                this.props.routes.map((route) => {
                                    return <option key={route.value} value={route.value}>{route.label}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Directions</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <select ref={this.ddlDirection} onChange={this.directionChanged} style={{ flex: 1 }}>
                            <option key={0} value={0}>{}</option>
                            {
                                this.props.directions.map((direction) => {
                                    return <option key={direction.value} value={direction.value}>{direction.label}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Stops</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <select onChange={this.stopChanged} style={{ flex: 1 }}>
                            <option key={0} value={0}>{}</option>
                            {
                                this.props.stops.map((stop) => {
                                    return <option key={stop.value} value={stop.value}>{stop.label}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        providers: state.providers,
        routes: state.routes,
        directions: state.directions,
        stops: state.stops
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProvides: () => getProviders()(dispatch),
        getRoutes: () => getRoutes()(dispatch),
        getDirections: (route) => getDirections(route)(dispatch),
        getStops: (route, direction) => getStops(route, direction)(dispatch),
        // getDepartures: (stop) => getDepartures(stop)(dispatch),
        getTimepointDepartures: (route, direction, stop) => getTimepointDepartures(route, direction, stop)(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);