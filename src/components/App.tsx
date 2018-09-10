import * as React from "react";
import { connect } from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import addAction from "../actions/addAction";
// import subtractAction from "../actions/subtractAction";
import getProviders from "../actions/getProviders";
import getRoutes from "../actions/getRoutes";
import getDirections from "../actions/getDirections";

class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.routeChanged = this.routeChanged.bind(this);
    }

    componentDidMount() {
        this.props.getProvides();
        this.props.getRoutes();
    }

    routeChanged(e) {
        console.log("Route", e.target.value);

        this.props.getDirections(e.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Providers</h2>
                    <Dropdown options={this.props.providers} placeholder="Select a Provider" />
                </div>
                <div>
                    <div>
                        <h3>Routes</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <select onChange={this.routeChanged} style={{ flex: 1 }}>
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
                        {/* <select onChange={this.routeChanged} style={{ flex: 1 }}> */}
                        <select style={{ flex: 1 }}>
                            {
                                this.props.directions.map((direction) => {
                                    return <option key={direction.value} value={direction.value}>{direction.label}</option>
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
        directions: state.directions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProvides: () => dispatch(getProviders()),
        getRoutes: () => dispatch(getRoutes()),
        getDirections: (route) => dispatch(getDirections(route))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);