import { Provider } from "../../node_modules/@types/react-redux";

let defaultState = {
    providers: [],
    routes: [],
    directions: [],
    stops: [],
    vehicleLocations: [],
    // departures: [],
    timepointDepartures: []
}

export default function MetroTransitReducer(state = defaultState, action) {
    if (action.type === "PROVIDERS_RECEIVED") {
        let providers = [];
        action.payload.data.map((provider) => {
            providers.push({
                value: provider.Value,
                label: provider.Text
            })
        })

        return { ...state, providers: providers };
    } else if (action.type === "ROUTES_RECEIVED") {
        let routes = [];
        action.payload.data.map((route) => {
            routes.push({
                value: route.Route,
                label: route.Description,
                providerId: route.ProviderID
            })
        })

        return { ...state, routes: routes };
    } else if (action.type === "DIRECTIONS_RECEIVED") {
        let directions = [];
        action.payload.data.map((direction) => {
            directions.push({
                value: direction.Value,
                label: direction.Text
            })
        })

        return { ...state, directions: directions };
    } else if (action.type === "STOPS_RECEIVED") {
        let stops = [];

        action.payload.data.map((stop) => {
            stops.push({
                value: stop.Value,
                label: stop.Text
            })
        })

        return { ...state, stops: stops };
    } else if (action.type === "DEPARTURES_RECEIVED") {
        let departures = [];

        return { ...state, departures: departures };
    } else if (action.type === "TIMEPOINT_DEPARTURES_RECEIVED") {
        let timepointDepartures = [];

        action.payload.data.map((timepointDeparture) => {
            timepointDepartures.push({
                departureText: timepointDeparture.DepartureText,
                departureTime: timepointDeparture.DepartureTime,
                description: timepointDeparture.Description,
                terminal: timepointDeparture.Terminal,
            })
        })

        return { ...state, timepointDepartures: timepointDepartures };
    } else {
        return state;
    }
}