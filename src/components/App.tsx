import * as React from "react";
import { connect } from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// import addAction from "../actions/addAction";
// import subtractAction from "../actions/subtractAction";
import getProviders from "../actions/getProviders";
import getRoutes from "../actions/getRoutes";

class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        // this.add = this.add.bind(this);
        // this.subtract = this.subtract.bind(this);
    }

    componentDidMount() {
        this.props.getProvides();
        this.props.getRoutes();
    }

    // add() {
    //     this.props.add(this.props.result, 1);
    // }

    // subtract() {
    //     this.props.subtract(this.props.result, 1);
    // }

    render() {
        return (
            <div>
                <div>
                    <h2>Providers</h2>
                    <Dropdown options={this.props.providers} placeholder="Select a Provider" />
                </div>
                <div>
                <h2>Routes</h2>
                    <Dropdown options={this.props.routes} placeholder="Select a Route" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        // lableStyle: state.result >= 0 ? "boxPos" : "boxNeg",
        // result: state.result
        providers: state.providers,
        routes: state.routes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // add: (currentResult, num) => dispatch(addAction(currentResult, num)),
        // subtract: (currentResult, num) => dispatch(subtractAction(currentResult, num))
        getProvides: () => dispatch(getProviders()),
        getRoutes: () => dispatch(getRoutes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);